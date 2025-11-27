import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface SpecialItem {
    title: string;
    price: string;
    description: string;
    image: string;
}

/**
 * Highlights Component
 * Renders a section showcasing the restaurant's weekly specials.
 * It displays a grid of cards, each featuring a special menu item.
 */
const Highlights: React.FC = () => {
    const specials: SpecialItem[] = [
        {
            title: "Greek Salad",
            price: "$12.99",
            description:
                "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            image: "/img/greek-salad.jpg",
        },
        {
            title: "Bruchetta",
            price: "$5.99",
            description:
                "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with chopped tomatoes.",
            image: "/img/bruchetta.svg",
        },
        {
            title: "Lemon Dessert",
            price: "$5.00",
            description:
                "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            image: "/img/lemon-dessert.jpg",
        },
    ];

    return (
        <section
            className="bg-white py-16 sm:py-24"
            id="menu"
            aria-labelledby="highlights-heading"
        >
            <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
                    <h2
                        id="highlights-heading"
                        className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-0"
                    >
                        This weeks specials!
                    </h2>
                    <Button
                        size="lg"
                        className="bg-primary-yellow text-gray-900 hover:bg-[#e0bc10] font-bold rounded-btn"
                        aria-label="View the online menu"
                    >
                        Online Menu
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specials.map((item, index) => (
                        <Card
                            key={index}
                            className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group border-none rounded-card"
                            aria-labelledby={`special-item-title-${index}`}
                        >
                            <CardHeader className="p-0">
                                <div className="h-48 w-full overflow-hidden rounded-t-card">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </CardHeader>

                            <CardContent className="p-6 flex flex-col flex-grow bg-highlight-gray rounded-b-card">
                                <div className="flex justify-between items-center mb-4">
                                    <CardTitle
                                        id={`special-item-title-${index}`}
                                        className="font-serif text-xl font-bold text-gray-800 mb-0"
                                    >
                                        {item.title}
                                    </CardTitle>
                                    <span
                                        className="font-sans text-secondary-peach font-bold text-lg"
                                        aria-label={`Price: ${item.price}`}
                                    >
                                        {item.price}
                                    </span>
                                </div>
                                <p className="font-sans text-primary-green text-base leading-relaxed flex-grow">
                                    {item.description}
                                </p>
                                <Button
                                    variant="link"
                                    className="mt-4 p-0 h-auto justify-start text-gray-800 hover:text-primary-green gap-2 font-bold"
                                    aria-label={`Order a delivery of ${item.title}`}
                                >
                                    Order a delivery
                                    <span
                                        className="bg-white/50 px-2 py-1 rounded-full"
                                        aria-hidden="true"
                                    >
                                        <img
                                            src="/icons/Basket.svg"
                                            alt="Basket"
                                            className="w-5 h-5 inline-block"
                                        />
                                    </span>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
