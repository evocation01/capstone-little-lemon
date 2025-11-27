import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import BookingPage from "../../pages/BookingPage";
import About from "./About";
import Hero from "./Hero";
import Highlights from "./Highlights";
import { initializeTimes, updateTimes } from "./mainReducer"; // Importing from the new file
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
                        />
                    }
                />
            </Routes>
        </main>
    );
};

export default Main;
