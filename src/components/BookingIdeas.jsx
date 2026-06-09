"use client";

import { Button, Card } from "@heroui/react";
import React, { useState } from "react";
import { DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
const BookingIdeas = ({ idea }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [departureDate, setDepartureDate] = useState(null);
  const {
    _id,
    ideaTitle,
    imageUrl,
    estimatedBudget,
    category,
    shortDescription,
    detailedDescription,
    problemStatement,
    proposedSolution,
    targetAudience,
    tags,
  } = idea || {};
  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      departureDate: new Date(departureDate),
      userMail: user?.email,
      ideaId: user?._id,
      ideaTitle: user?.ideaTitle,
      estimatedBudget: user?.estimatedBudget,
      userName: user?.name,
      userImage: user?.image,

      price: user?.estimatedBudget,
      targetAudience: user?.targetAudience,
    };

    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    toast.success("Booking successful!");
  };

  //   console.log(new Date(departureDate));

  return (
    <Card className="p-6 rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 ease-in-out w-[50%]">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Booking Ideas</h1>
      <div className="flex flex-col">
        <span className="text-[11px] text-gray-400 font-extrabold uppercase tracking-wider">
          Estimated Budget
        </span>
        <span className="text-xl font-black text-emerald-600 mt-0.5">
          ${estimatedBudget}
        </span>
      </div>
      <DateField onChange={setDepartureDate} className="w-[full]" name="date">
        <Label> Booking Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
      <Button
        onClick={handleBooking}
        className="mt-4 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-300 w-full"
      >
        Book Now
      </Button>
    </Card>
  );
};

export default BookingIdeas;
