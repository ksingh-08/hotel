import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const rooms = await prisma.room.findMany();

    // Transform the data to match the frontend interface
    const formattedRooms = rooms.map((room) => ({
      id: room.id,
      name: room.name,
      type: room.type,
      price: room.price,
      description: room.description,
      amenities: room.amenities,
      capacity: room.capacity,
      images: room.images,
      guestHouseId: room.guestHouseId,
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
    const { name, type, price, description, amenities, capacity, images, guestHouseId } = body;

    const room = await prisma.room.create({
      data: {
        name,
        type,
        price,
        description,
        capacity,
        amenities,
        images,
        guestHouse: {
          connect: {
            id: guestHouseId,
          },
        },
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