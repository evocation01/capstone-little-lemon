import React, { useState } from "react";
import { Button } from "./ui/button";

interface BookingFormProps {
    /** List of available times from the API */
    availableTimes: string[];
    /** Dispatch function to update the available times state */
    dispatch: React.Dispatch<{ type: string; date: string }>;
    /** Function to handle the final form submission */
    submitForm: (formData: any) => void;
}

/**
 * BookingForm Component
 * Renders a controlled form for table reservations with validation.
 * handles client-side state and submission to the parent component.
 */
const BookingForm: React.FC<BookingFormProps> = ({
    availableTimes,
    dispatch,
    submitForm,
}) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00"); // Default value ensures valid initial state
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    /**
     * Updates the date state and dispatches an action to refresh available times
     */
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: "UPDATE_TIMES", date: newDate });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        submitForm(formData);
    };

    // derived state for validation logic
    const isDateValid = date !== "";
    const isTimeValid = time !== "";
    const isGuestsValid = guests >= 1 && guests <= 10;
    const isOccasionValid = occasion !== "";

    const isFormValid =
        isDateValid && isTimeValid && isGuestsValid && isOccasionValid;

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto grid gap-6 bg-white p-6 rounded-card shadow-sm border border-gray-100"
            aria-label="Booking form"
        >
            {/* Date Selection */}
            <div className="grid gap-2">
                <label htmlFor="res-date" className="font-bold text-gray-700">
                    Choose date
                </label>
                <input
                    type="date"
                    id="res-date"
                    data-testid="res-date"
                    value={date}
                    onChange={handleDateChange}
                    required
                    aria-required="true"
                    className="p-3 border border-gray-300 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary-yellow invalid:border-red-500 invalid:text-red-600"
                />
            </div>

            {/* Time Selection */}
            <div className="grid gap-2">
                <label htmlFor="res-time" className="font-bold text-gray-700">
                    Choose time
                </label>
                <select
                    id="res-time"
                    data-testid="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    aria-required="true"
                    className="p-3 border border-gray-300 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary-yellow"
                >
                    {availableTimes.map((t) => (
                        <option key={t} value={t}>
                            {t}
                        </option>
                    ))}
                </select>
            </div>

            {/* Guest Count */}
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
                    data-testid="guests"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    required
                    aria-required="true"
                    className="p-3 border border-gray-300 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary-yellow invalid:border-red-500 invalid:text-red-600"
                />
            </div>

            {/* Occasion Selection */}
            <div className="grid gap-2">
                <label htmlFor="occasion" className="font-bold text-gray-700">
                    Occasion
                </label>
                <select
                    id="occasion"
                    data-testid="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    required
                    aria-required="true"
                    className="p-3 border border-gray-300 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary-yellow"
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>

            {/* Submit Action */}
            <Button
                type="submit"
                size="lg"
                disabled={!isFormValid}
                className="w-full mt-4 bg-primary-yellow text-gray-900 hover:bg-[#e0bc10] font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="On Click"
            >
                Make Your reservation
            </Button>
        </form>
    );
};

export default BookingForm;
