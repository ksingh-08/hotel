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

interface BookingFormProps {
  onSubmit?: (data: {
    date: DateRange;
    guests: number;
    roomType: string;
  }) => void;
}

export function BookingForm({ onSubmit }: BookingFormProps) {
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 3)),
  });
  const [guests, setGuests] = useState<number>(1);
  const [roomType, setRoomType] = useState<string>("deluxe");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ date, guests, roomType });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 border rounded-xl shadow-md max-w-md bg-white"
    >
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
              onSelect={(newDate) => {
                // Ensure newDate is a valid DateRange
                if (newDate?.from && newDate?.to) {
                  setDate(newDate);
                }
              }}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Guests Input */}
      <div className="space-y-2">
        <Label htmlFor="guests">Guests</Label>
        <Input
          id="guests"
          type="number"
          min={1}
          max={10}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        />
      </div>

      {/* Room Type Selection */}
      <div className="space-y-2">
        <Label htmlFor="roomType">Room Type</Label>
        <Select
          defaultValue={roomType}
          onValueChange={(value) => setRoomType(value)}
        >
          <SelectTrigger id="roomType">
            <SelectValue placeholder="Select a room type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="standard">Standard</SelectItem>
            <SelectItem value="deluxe">Deluxe</SelectItem>
            <SelectItem value="suite">Suite</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full">
        Book Now
      </Button>
    </form>
  );
}
