import React from "react";
import About from "./Main/About";
import Hero from "./Main/Hero";
import Highlights from "./Main/Highlights";
import Testimonials from "./Main/Testimonials";

const Main: React.FC = () => {
    return (
        <main className="flex-grow">
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </main>
    );
};

export default Main;
