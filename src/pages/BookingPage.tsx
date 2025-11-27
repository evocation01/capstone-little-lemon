import React from "react";
import BookingForm from "../components/BookingForm";

interface BookingPageProps {
    availableTimes: string[];
    dispatch: React.Dispatch<{ type: string; date: string }>;
    submitForm: (formData: any) => void;
}

const BookingPage: React.FC<BookingPageProps> = ({
    availableTimes,
    dispatch,
    submitForm,
}) => {
    return (
        <section className="bg-highlight-gray min-h-[60vh] py-16">
            <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-primary-green text-5xl sm:text-6xl mb-4">
                        Reserve a Table
                    </h1>
                    <p className="font-sans text-gray-600 text-lg max-w-xl mx-auto">
                        Book your table for an unforgettable Mediterranean
                        dining experience in the heart of Chicago.
                    </p>
                </div>

                {/* Pass submitForm down to the form */}
                <BookingForm
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    submitForm={submitForm}
                />
            </div>
        </section>
    );
};

export default BookingPage;
