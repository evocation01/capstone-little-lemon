import { CheckCircle } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

/**
 * ConfirmedBooking Component
 * Renders the booking confirmation page.
 * It displays a success message and a link to go back to the homepage.
 */
const ConfirmedBooking: React.FC = () => {
    return (
        <section
            className="bg-highlight-gray min-h-[60vh] flex items-center justify-center py-16"
            aria-labelledby="confirmation-heading"
        >
            <div className="max-w-md w-full bg-white p-8 rounded-card shadow-lg text-center">
                <div className="flex justify-center mb-6" aria-hidden="true">
                    <CheckCircle size={64} className="text-primary-green" />
                </div>

                <h1
                    id="confirmation-heading"
                    className="font-serif text-primary-green text-4xl mb-4"
                >
                    Booking Confirmed!
                </h1>
                <p className="font-sans text-gray-600 mb-8">
                    We are excited to see you! A confirmation email has been
                    sent to you.
                </p>

                <Link to="/" aria-label="Back to Home">
                    <Button
                        size="lg"
                        className="w-full bg-primary-yellow text-gray-900 hover:bg-[#e0bc10] font-bold"
                    >
                        Back to Home
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default ConfirmedBooking;
