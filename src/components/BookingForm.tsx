import React, { useState } from "react";
import { Button } from "./ui/button";

const BookingForm: React.FC = () => {
    // Step 3: Define state variables for form fields
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    // Step 3: Available times state
    const [availableTimes, setAvailableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted", { date, time, guests, occasion });
        alert(`Reservation submitted for ${date} at ${time}!`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto grid gap-6 bg-white p-6 rounded-card shadow-sm border border-gray-100"
        >
            {/* Date Field */}
            <div className="grid gap-2">
                <label htmlFor="res-date" className="font-bold text-gray-700">
                    Choose date
                </label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="p-3 border border-gray-300 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary-yellow"
                />
            </div>

            {/* Time Field */}
            <div className="grid gap-2">
                <label htmlFor="res-time" className="font-bold text-gray-700">
                    Choose time
                </label>
                <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="p-3 border border-gray-300 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary-yellow"
                >
                    {availableTimes.map((t) => (
                        <option key={t} value={t}>
                            {t}
                        </option>
                    ))}
                </select>
            </div>

            {/* Guests Field */}
            <div className="grid gap-2">
                <label htmlFor="guests" className="font-bold text-gray-700">
                    Number of guests
                </label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="p-3 border border-gray-300 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary-yellow"
                />
            </div>

            {/* Occasion Field */}
            <div className="grid gap-2">
                <label htmlFor="occasion" className="font-bold text-gray-700">
                    Occasion
                </label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="p-3 border border-gray-300 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary-yellow"
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                size="lg"
                className="w-full mt-4 bg-primary-yellow text-gray-900 hover:bg-[#e0bc10] font-bold"
            >
                Make Your reservation
            </Button>
        </form>
    );
};

export default BookingForm;
