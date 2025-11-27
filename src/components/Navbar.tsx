import { X } from "lucide-react";
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
                    <a
                        href="#"
                        className="flex-shrink-0 flex items-center cursor-pointer"
                    >
                        <img
                            src="/logo.svg"
                            alt="Little Lemon Logo"
                            className="h-10 w-auto md:h-12"
                        />
                    </a>

                    {/* Desktop Menu - Refactored to use <ul> for semantics */}
                    <ul className="hidden lg:flex space-x-8 items-center list-none m-0 p-0">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-gray-800 hover:text-primary-green font-bold text-lg transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile/Tablet Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 hover:text-primary-green focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X size={28} />
                            ) : (
                                <img
                                    src="/icons/hamburger-menu.svg"
                                    alt="Menu"
                                    className="w-7 h-7"
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg z-50">
                    <ul className="px-4 pt-2 pb-6 space-y-2 flex flex-col list-none m-0">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 rounded-md text-base font-bold text-gray-800 hover:bg-highlight-gray hover:text-primary-green"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
