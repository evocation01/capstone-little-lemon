import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button"; // Importing from your real shadcn folder

const Hero: React.FC = () => {
    return (
        <section className="bg-primary-green relative w-full overflow-hidden">
            <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 z-10">
                        <h1 className="font-serif text-primary-yellow text-5xl sm:text-7xl font-medium leading-none mb-0">
                            Little Lemon
                        </h1>
                        <h2 className="font-serif text-white text-3xl sm:text-4xl font-normal -mt-2 mb-4">
                            Chicago
                        </h2>

                        <p className="font-sans text-white text-lg sm:text-xl font-medium max-w-md my-4 leading-relaxed">
                            We are a family owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern
                            twist.
                        </p>

                        <Link to="/booking">
                            {/* Overriding shadcn button styles to match brand colors */}
                            <Button
                                size="lg"
                                className="mt-4 bg-primary-yellow text-gray-900 hover:bg-[#e0bc10] font-bold rounded-btn"
                            >
                                Reserve a Table
                            </Button>
                        </Link>
                    </div>

                    <div className="w-full md:w-1/2 relative h-64 md:h-96 mt-6 md:mt-0 flex justify-center md:justify-end">
                        <div className="relative w-full max-w-md aspect-[4/3] rounded-card overflow-hidden shadow-xl md:absolute md:top-8 md:right-0 lg:right-12 transform md:translate-y-4">
                            <img
                                src="/img/restaurant-food.jpg"
                                alt="Delicious Mediterranean Food"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
