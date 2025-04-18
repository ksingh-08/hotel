"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  capacity: number;
}

interface GuestHouse {
  id: string;
  name: string;
  rooms: Room[];
}

interface BookingFormProps {
  guestHouses: GuestHouse[];
  onSubmit?: (data: any) => void;
}

export function BookingForm({ guestHouses, onSubmit }: BookingFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 3)),
  });
  const [formData, setFormData] = useState({
    guestHouseId: "",
    roomId: "",
    guestName: "",
    guestEmail: "",
    guestPhone: "",
    guests: 1,
    specialRequests: "",
  });

  const selectedGuestHouse = guestHouses.find(
    (gh) => gh.id === formData.guestHouseId
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date.from || !date.to) {
      toast({
        title: "Error",
        description: "Please select check-in and check-out dates",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          checkIn: date.from.toISOString(),
          checkOut: date.toISOString(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create booking");
      }

      toast({
        title: "Success!",
        description: "Your booking has been submitted. We'll confirm it shortly.",
      });

      onSubmit?.(data);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 border rounded-xl shadow-md max-w-md bg-white">
      {/* Guest House Selection */}
      <div className="space-y-2">
        <Label htmlFor="guestHouseId">Guest House</Label>
        <Select
          value={formData.guestHouseId}
          onValueChange={(value) => handleSelectChange("guestHouseId", value)}
        >
          <SelectTrigger id="guestHouseId">
            <SelectValue placeholder="Select a guest house" />
          </SelectTrigger>
          <SelectContent>
            {guestHouses.map((gh) => (
              <SelectItem key={gh.id} value={gh.id}>
                {gh.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Room Selection */}
      {selectedGuestHouse && (
        <div className="space-y-2">
          <Label htmlFor="roomId">Room Type</Label>
          <Select
            value={formData.roomId}
            onValueChange={(value) => handleSelectChange("roomId", value)}
          >
            <SelectTrigger id="roomId">
              <SelectValue placeholder="Select a room type" />
            </SelectTrigger>
            <SelectContent>
              {selectedGuestHouse.rooms.map((room) => (
                <SelectItem key={room.id} value={room.id}>
                  {room.name} - ₹{room.price}/night
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Date Range Picker */}
      <div className="space-y-2">
        <Label>Date Range</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date.from ? (
                date.to ? (
                  `${format(date.from, "PPP")} - ${format(date.to, "PPP")}`
                ) : (
                  format(date.from, "PPP")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Guest Information */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="guestName">Full Name</Label>
          <Input
            id="guestName"
            name="guestName"
            value={formData.guestName}
            onChange={handleChange}
            required
            minLength={2}
            placeholder="Your full name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="guestEmail">Email</Label>
          <Input
            id="guestEmail"
            name="guestEmail"
            type="email"
            value={formData.guestEmail}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="guestPhone">Phone</Label>
          <Input
            id="guestPhone"
            name="guestPhone"
            type="tel"
            value={formData.guestPhone}
            onChange={handleChange}
            required
            minLength={10}
            placeholder="Your phone number"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">Number of Guests</Label>
          <Input
            id="guests"
            name="guests"
            type="number"
            min={1}
            max={10}
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="specialRequests">Special Requests</Label>
          <Textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Any special requests or requirements?"
            className="min-h-[100px]"
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Book Now"}
      </Button>
    </form>
  );
}
