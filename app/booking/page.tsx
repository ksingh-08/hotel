import { BookingForm } from "@/components/BookingForm";
import { prisma } from "@/lib/prisma";

async function getGuestHouses() {
  const guestHouses = await prisma.guestHouse.findMany({
    include: {
      rooms: true,
    },
  });
  return guestHouses;
}

export default async function BookingPage() {
  const guestHouses = await getGuestHouses();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Book Your Stay</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Choose Your Perfect Stay</h2>
              <p className="text-gray-600">
                Select your preferred guest house and room type for a comfortable and
                memorable stay. Our properties offer a range of options to suit your needs.
              </p>
            </div>

            <div className="space-y-6">
              {guestHouses.map((gh) => (
                <div key={gh.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{gh.name}</h3>
                  <p className="text-gray-600 mb-4">{gh.description}</p>
                  <div className="space-y-2">
                    {gh.rooms.map((room) => (
                      <div
                        key={room.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                      >
                        <div>
                          <p className="font-medium">{room.name}</p>
                          <p className="text-sm text-gray-500">
                            Up to {room.capacity} guests
                          </p>
                        </div>
                        <p className="font-semibold">₹{room.price}/night</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <BookingForm guestHouses={guestHouses} />
          </div>
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Booking Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-2">Check-in/Check-out</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Check-in time: 2:00 PM</li>
                <li>• Check-out time: 11:00 AM</li>
                <li>• Early check-in subject to availability</li>
                <li>• Late check-out may be arranged</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Policies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Free cancellation up to 48 hours before check-in</li>
                <li>• Children under 5 stay free</li>
                <li>• Pets not allowed</li>
                <li>• Smoking not allowed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 