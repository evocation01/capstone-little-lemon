import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

/**
 * Footer Component
 * Renders the footer section of the application.
 * It includes navigation links, contact information, and social media links.
 */
const Footer: React.FC = () => {
    return (
        <footer
            className="bg-primary-green py-12 sm:py-16"
            aria-label="Footer"
        >
            <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo Column */}
                    <div className="flex flex-col gap-4">
                        <div className="w-16 h-24 bg-primary-yellow rounded-sm flex items-center justify-center shadow-lg">
                            <span className="text-primary-green font-bold text-2xl rotate-[-90deg]">
                                LEMON
                            </span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-serif text-primary-yellow text-xl font-bold mb-2">
                            Navigation
                        </h4>
                        <a
                            href="#"
                            className="text-white hover:text-primary-yellow transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-white hover:text-primary-yellow transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#menu"
                            className="text-white hover:text-primary-yellow transition-colors"
                        >
                            Menu
                        </a>
                        <a
                            href="#reservations"
                            className="text-white hover:text-primary-yellow transition-colors"
                        >
                            Reservations
                        </a>
                        <a
                            href="#order"
                            className="text-white hover:text-primary-yellow transition-colors"
                        >
                            Order Online
                        </a>
                        <a
                            href="#login"
                            className="text-white hover:text-primary-yellow transition-colors"
                        >
                            Login
                        </a>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-serif text-primary-yellow text-xl font-bold mb-2">
                            Contact
                        </h4>
                        <p className="text-white opacity-90">
                            123 Lemon Street
                            <br />
                            Chicago, IL 60601
                        </p>
                        <p className="text-white opacity-90">(312) 555-0123</p>
                        <p className="text-white opacity-90">
                            contact@littlelemon.com
                        </p>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-serif text-primary-yellow text-xl font-bold mb-2">
                            Social Media
                        </h4>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="bg-white/10 p-2 rounded-full text-white hover:bg-primary-yellow hover:text-primary-green transition-all"
                                aria-label="Follow us on Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="bg-white/10 p-2 rounded-full text-white hover:bg-primary-yellow hover:text-primary-green transition-all"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="bg-white/10 p-2 rounded-full text-white hover:bg-primary-yellow hover:text-primary-green transition-all"
                                aria-label="Follow us on Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="bg-white/10 p-2 rounded-full text-white hover:bg-primary-yellow hover:text-primary-green transition-all"
                                aria-label="Follow us on Linkedin"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
                    © {new Date().getFullYear()} Little Lemon Restaurant. All
                    rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
