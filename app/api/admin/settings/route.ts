import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const settings = await prisma.hotelSettings.findFirst();
    return NextResponse.json(settings);
  } catch (error) {
    console.error("Error fetching settings:", error);
    return NextResponse.json(
      { error: "Failed to fetch settings" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const settings = await prisma.hotelSettings.upsert({
      where: {
        id: 1, // Assuming we only have one settings record
      },
      update: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        website: data.website,
        checkInTime: data.checkInTime,
        checkOutTime: data.checkOutTime,
        basePrice: data.basePrice,
        taxRate: data.taxRate,
      },
      create: {
        id: 1,
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        website: data.website,
        checkInTime: data.checkInTime,
        checkOutTime: data.checkOutTime,
        basePrice: data.basePrice,
        taxRate: data.taxRate,
      },
    });

    return NextResponse.json(settings);
  } catch (error) {
    console.error("Error updating settings:", error);
    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 500 }
    );
  }
} 