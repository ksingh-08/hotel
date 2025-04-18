import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const rooms = await prisma.room.findMany({
      include: {
        amenities: true,
      },
    });

    // Transform the data to match the frontend interface
    const formattedRooms = rooms.map((room) => ({
      id: room.id,
      type: room.type,
      price: room.price,
      description: room.description,
      amenities: room.amenities.map((a) => a.name),
      maxOccupancy: room.maxOccupancy,
    }));

    return NextResponse.json(formattedRooms);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return NextResponse.json(
      { error: "Failed to fetch rooms" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, price, description, amenities, maxOccupancy } = body;

    const room = await prisma.room.create({
      data: {
        type,
        price,
        description,
        maxOccupancy,
        amenities: {
          create: amenities.map((name: string) => ({ name })),
        },
      },
      include: {
        amenities: true,
      },
    });

    return NextResponse.json(room);
  } catch (error) {
    console.error("Error creating room:", error);
    return NextResponse.json(
      { error: "Failed to create room" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, price } = body;

    const room = await prisma.room.update({
      where: { id },
      data: { price },
      include: {
        amenities: true,
      },
    });

    return NextResponse.json(room);
  } catch (error) {
    console.error("Error updating room:", error);
    return NextResponse.json(
      { error: "Failed to update room" },
      { status: 500 }
    );
  }
} 