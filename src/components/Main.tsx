import React from "react";
import About from "./main/About";
import Hero from "./main/Hero";
import Highlights from "./main/Highlights";
import Testimonials from "./main/Testimonials";

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
