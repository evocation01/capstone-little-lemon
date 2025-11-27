import React, { useState } from "react";
import { Button } from "./ui/button";

interface BookingFormProps {
    availableTimes: string[];
    dispatch: React.Dispatch<{ type: string; date: string }>;
    submitForm: (formData: any) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
    availableTimes,
    dispatch,
    submitForm,
}) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState(availableTimes[0] || "");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: "UPDATE_TIMES", date: newDate });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct the form data object
        const formData = {
            date,
            time,
            guests,
            occasion,
        };

        // Call the submit API function passed from Main
        submitForm(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto grid gap-6 bg-white p-6 rounded-card shadow-sm border border-gray-100"
        >
            <div className="grid gap-2">
                <label htmlFor="res-date" className="font-bold text-gray-700">
                    Choose date
                </label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                    required
                    className="p-3 border border-gray-300 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary-yellow"
                />
            </div>

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
