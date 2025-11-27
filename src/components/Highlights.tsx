import { ShoppingBasket } from "lucide-react";
import React from "react";

interface SpecialItem {
    title: string;
    price: string;
    description: string;
    image: string;
}

const Highlights: React.FC = () => {
    const specials: SpecialItem[] = [
        {
            title: "Greek Salad",
            price: "$12.99",
            description:
                "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            image: "img/greek-salad.jpg",
        },
        {
            title: "Bruchetta",
            price: "$5.99",
            description:
                "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with chopped tomatoes.",
            image: "img/bruchetta.svg",
        },
        {
            title: "Lemon Dessert",
            price: "$5.00",
            description:
                "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            image: "img/lemon-dessert.jpg",
        },
    ];

    return (
        <section className="bg-white py-16 sm:py-24" id="menu">
            <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
                    <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-gray-800">
                        This weeks specials!
                    </h2>
                    <button className="bg-primary-yellow text-gray-800 font-bold text-lg py-3 px-8 rounded-btn hover:brightness-110 transition-colors shadow-md">
                        Online Menu
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specials.map((item, index) => (
                        <article
                            key={index}
                            className="bg-highlight-gray rounded-t-card rounded-b-card flex flex-col h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                        >
                            {/* Image */}
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-serif text-xl font-bold text-gray-800">
                                        {item.title}
                                    </h3>
                                    <span className="font-sans text-secondary-peach font-bold text-lg">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="font-sans text-primary-green text-base leading-relaxed flex-grow">
                                    {item.description}
                                </p>
                                <button className="mt-6 flex items-center gap-3 font-bold text-gray-800 hover:underline group/btn">
                                    Order a delivery
                                    <span className="bg-white/50 p-1 rounded-full group-hover/btn:translate-x-1 transition-transform">
                                        <ShoppingBasket
                                            size={18}
                                            className="text-primary-green"
                                        />
                                    </span>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
