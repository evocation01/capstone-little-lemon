import React from "react";
import { Route, Routes } from "react-router-dom";
import BookingPage from "../../pages/BookingPage";
import About from "./About";
import Hero from "./Hero";
import Highlights from "./Highlights";
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
    return (
        <main className="flex-grow">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
        </main>
    );
};

export default Main;
