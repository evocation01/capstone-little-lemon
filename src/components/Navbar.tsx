import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Menu", href: "#menu" },
        { name: "Reservations", href: "#reservations" },
        { name: "Order Online", href: "#order" },
        { name: "Login", href: "#login" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white w-full shadow-sm font-sans">
            <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-24">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <div className="w-10 h-10 bg-primary-yellow rounded-md flex items-center justify-center">
                            <span className="text-primary-green font-bold text-xl">
                                LL
                            </span>
                        </div>
                        <span className="font-serif text-primary-green text-2xl font-bold tracking-wide">
                            LITTLE LEMON
                        </span>
                    </div>

                    {/* Desktop Menu - Visible on Large screens (lg:flex), Hidden on mobile/tablet */}
                    <div className="hidden lg:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-800 hover:text-primary-green font-bold text-lg transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile/Tablet Menu Button - Visible until Large screens */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 hover:text-primary-green focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg z-50">
                    <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 rounded-md text-base font-bold text-gray-800 hover:bg-highlight-gray hover:text-primary-green"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
