import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

interface Room {
  id: number;
  name: string;
  description: string;
  price: string;
  image: StaticImageData;
  amenities: string[];
  type: string;
  available: boolean;
}

interface RoomCardProps {
  room: Room;
  onBook?: (roomId: number) => void;
}

export function RoomCard({ room, onBook }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Room image */}
      <div className="relative h-48 w-full">
        <Image
          src={room.image}
          alt={room.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      <div className="p-4">
        {/* Room name */}
        <h2 className="text-xl font-semibold text-gray-800">{room.name}</h2>
        
        {/* Room description */}
        <p className="text-gray-600 text-sm mt-2">{room.description}</p>

        {/* Room type and price */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">{room.type}</span>
          <span className="text-lg font-bold text-green-600">₹{room.price} / night</span>
        </div>

        {/* Amenities */}
        <div className="mt-2">
          <ul className="text-sm text-gray-500">
            {room.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        {/* Book button */}
        {room.available ? (
          <Button
            onClick={() => onBook?.(room.id)}
            className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700"
          >
            Book Now
          </Button>
        ) : (
          <span className="mt-4 block text-red-500">Not Available</span>
        )}
      </div>
    </div>
  );
}
