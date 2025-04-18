import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// Validation schemas
const priceUpdateSchema = z.object({
  roomId: z.string(),
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
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (!type) {
      return NextResponse.json(
        { error: 'Request type is required' },
        { status: 400 }
      );
    }

    const body = await request.json();

    switch (type) {
      case 'update-price':
        const priceData = priceUpdateSchema.parse(body);
        const updatedRoom = await prisma.room.update({
          where: { id: priceData.roomId },
          data: { price: priceData.price },
        });
        return NextResponse.json(updatedRoom);

      case 'update-booking-status':
        const bookingData = bookingStatusSchema.parse(body);
        const updatedBooking = await prisma.booking.update({
          where: { id: bookingData.bookingId },
          data: { status: bookingData.status },
        });
        return NextResponse.json(updatedBooking);

      case 'update-message-status':
        const messageData = messageStatusSchema.parse(body);
        const updatedMessage = await prisma.contact.update({
          where: { id: messageData.messageId },
          data: { read: messageData.read },
        });
        return NextResponse.json(updatedMessage);

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