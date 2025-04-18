import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// Validation schemas
const priceUpdateSchema = z.object({
  roomType: z.string(),
  price: z.number().positive(),
});

const bookingStatusSchema = z.object({
  bookingId: z.string(),
  status: z.enum(['CONFIRMED', 'CANCELLED', 'COMPLETED']),
});

const messageStatusSchema = z.object({
  messageId: z.string(),
  read: z.boolean(),
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (type === 'stats') {
      // Get total bookings
      const totalBookings = await prisma.booking.count();
      
      // Get total revenue
      const bookings = await prisma.booking.findMany({
        select: {
          totalPrice: true,
        },
      });
      const totalRevenue = bookings.reduce((sum, booking) => sum + (booking.totalPrice || 0), 0);
      
      // Get active guests (bookings with status 'confirmed' and current date within check-in and check-out)
      const today = new Date();
      const activeGuests = await prisma.booking.count({
        where: {
          status: 'CONFIRMED',
          checkIn: {
            lte: today,
          },
          checkOut: {
            gte: today,
          },
        },
      });
      
      // Get pending messages
      const pendingMessages = await prisma.contact.count({
        where: {
          read: false,
        },
      });

      return NextResponse.json({
        totalBookings,
        totalRevenue,
        activeGuests,
        pendingMessages,
      });
    }

    switch (type) {
      case 'bookings':
        const bookings = await prisma.booking.findMany({
          orderBy: { createdAt: 'desc' },
          include: {
            room: true,
            guestHouse: true,
          },
        });
        return NextResponse.json(bookings);

      case 'messages':
        const messages = await prisma.contact.findMany({
          orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(messages);

      default:
        return NextResponse.json(
          { error: 'Invalid request type' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Admin API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action } = body;

    switch (action) {
      case 'updatePrice':
        const priceData = priceUpdateSchema.parse(body);
        
        // First, find the room by type
        const room = await prisma.room.findFirst({
          where: { type: priceData.roomType }
        });

        if (!room) {
          return NextResponse.json(
            { error: 'Room type not found' },
            { status: 404 }
          );
        }

        // Then update it using its ID
        const updatedRoom = await prisma.room.update({
          where: { id: room.id },
          data: { price: priceData.price },
        });
        return NextResponse.json(updatedRoom);

      case 'updateBookingStatus':
        const bookingData = bookingStatusSchema.parse(body);
        const updatedBooking = await prisma.booking.update({
          where: { id: bookingData.bookingId },
          data: { status: bookingData.status },
        });
        return NextResponse.json(updatedBooking);

      case 'updateMessageStatus':
        const messageData = messageStatusSchema.parse(body);
        const updatedMessage = await prisma.contact.update({
          where: { id: messageData.messageId },
          data: { read: messageData.read },
        });
        return NextResponse.json(updatedMessage);

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Admin API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 