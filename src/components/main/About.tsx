import React from "react";

/**
 * About Component
 * Renders the "About Us" section of the homepage.
 * It includes a brief description of the restaurant and a visualization with overlapping images of the chefs.
 */
const About: React.FC = () => {
    return (
        <section
            className="bg-white py-16 sm:py-24"
            id="about"
            aria-labelledby="about-heading"
        >
            <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2
                            id="about-heading"
                            className="font-serif text-primary-green text-5xl sm:text-6xl font-medium leading-none mb-2"
                        >
                            Little Lemon
                        </h2>
                        <h3 className="font-serif text-gray-800 text-3xl sm:text-4xl font-normal mb-8">
                            Chicago
                        </h3>
                        <p className="font-sans text-gray-600 text-lg leading-relaxed mb-6">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet.
                        </p>
                        <p className="font-sans text-gray-600 text-lg leading-relaxed">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                        </p>
                    </div>

                    {/* Overlapping Images Visualization */}
                    <div className="w-full lg:w-1/2 relative min-h-[20rem] sm:min-h-[28rem]">
                        {/* Image 1 (Bottom/Right) - Using local chefs-b.jpg */}
                        <div className="absolute right-0 bottom-0 w-3/5 h-3/4 z-10 shadow-xl rounded-sm overflow-hidden">
                            <img
                                src="/img/chefs-b.jpg"
                                alt="Chefs interacting"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Image 2 (Top/Left) - Using local chefs-a.jpg */}
                        <div className="absolute left-0 top-0 w-3/5 h-3/4 z-20 shadow-2xl rounded-sm overflow-hidden border-4 border-white">
                            <img
                                src="/img/chefs-a.jpg"
                                alt="Chef preparing food"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
