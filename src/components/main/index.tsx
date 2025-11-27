import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import BookingPage from "../../pages/BookingPage";
import ConfirmedBooking from "../../pages/ConfirmedBooking";
import { addBooking } from "../../utils/fakeAPI"; // Import the helper
import About from "./About";
import Hero from "./Hero";
import Highlights from "./Highlights";
import { initializeTimes, updateTimes } from "./mainReducer";
import Testimonials from "./Testimonials";

const HomePage = () => (
    <>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
    </>
);

const Main: React.FC = () => {
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );
    const navigate = useNavigate();

    const submitForm = (formData: any) => {
        // 1. Submit to the mock API (which just returns true)
        const isSubmitted = window.submitAPI(formData);

        if (isSubmitted) {
            // 2. Save the booking to Local Storage so it disappears from the list
            addBooking(formData.date, formData.time);

            // 3. Update the available times in the UI immediately for that date
            // This ensures if they hit "back", the slot is gone.
            dispatch({ type: "UPDATE_TIMES", date: formData.date });

            // 4. Navigate to confirmation
            navigate("/confirmed");
        }
    };

    return (
        <main className="flex-grow">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/booking"
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
};

export default Main;
