import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// Validation schema for booking requests
const bookingSchema = z.object({
  guestHouseId: z.string(),
  roomId: z.string(),
  guestName: z.string().min(2),
  guestEmail: z.string().email(),
  guestPhone: z.string().min(10),
  checkIn: z.string().transform(str => new Date(str)),
  checkOut: z.string().transform(str => new Date(str)),
  guests: z.number().min(1).max(10),
  specialRequests: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = bookingSchema.parse(body);

    // Check if room is available for the selected dates
    const existingBookings = await prisma.booking.findMany({
      where: {
        roomId: validatedData.roomId,
        OR: [
          {
            AND: [
              { checkIn: { lte: validatedData.checkIn } },
              { checkOut: { gt: validatedData.checkIn } },
            ],
          },
          {
            AND: [
              { checkIn: { lt: validatedData.checkOut } },
              { checkOut: { gte: validatedData.checkOut } },
            ],
          },
        ],
        status: 'CONFIRMED',
      },
    });

    if (existingBookings.length > 0) {
      return NextResponse.json(
        { error: 'Room is not available for the selected dates' },
        { status: 400 }
      );
    }

    // Get room details to calculate total price
    const room = await prisma.room.findUnique({
      where: { id: validatedData.roomId },
    });

    if (!room) {
      return NextResponse.json(
        { error: 'Room not found' },
        { status: 404 }
      );
    }

    // Calculate number of nights
    const nights = Math.ceil(
      (validatedData.checkOut.getTime() - validatedData.checkIn.getTime()) / (1000 * 60 * 60 * 24)
    );

    // Calculate total price
    const totalPrice = room.price * nights;

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        ...validatedData,
        totalPrice,
        status: 'PENDING',
      },
    });

    // TODO: Send confirmation email to guest
    // TODO: Send notification to admin

    return NextResponse.json(booking);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid booking data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const guestHouseId = searchParams.get('guestHouseId');
    const status = searchParams.get('status');

    const bookings = await prisma.booking.findMany({
      where: {
        ...(guestHouseId && { guestHouseId }),
        ...(status && { status }),
      },
      include: {
        room: true,
        guestHouse: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
} 