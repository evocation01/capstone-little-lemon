import { Star } from "lucide-react";
import React from "react";

interface Testimonial {
    name: string;
    rating: number;
    review: string;
    img: string;
}

const Testimonials: React.FC = () => {
    const reviews: Testimonial[] = [
        {
            name: "Sarah M.",
            rating: 5,
            review: "Absolutely delicious! The greek salad is a must-try.",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "John D.",
            rating: 5,
            review: "Great atmosphere and friendly staff. Highly recommended.",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Michael R.",
            rating: 4,
            review: "The lemon dessert was the perfect ending to a great meal.",
            img: "https://randomuser.me/api/portraits/men/85.jpg",
        },
        {
            name: "Emily W.",
            rating: 5,
            review: "Authentic flavors that remind me of my trip to Greece.",
            img: "https://randomuser.me/api/portraits/women/65.jpg",
        },
    ];

    return (
        <section className="bg-primary-green py-20">
            <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-4xl sm:text-5xl font-medium text-center text-primary-yellow mb-16">
                    Testimonials
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-card shadow-lg hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="flex gap-1 mb-4 text-primary-yellow">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        fill="currentColor"
                                    />
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={review.img}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-highlight-gray"
                                />
                                <h4 className="font-sans font-bold text-lg text-gray-800">
                                    {review.name}
                                </h4>
                            </div>

                            <p className="font-sans text-gray-600 italic text-sm">
                                "{review.review}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
