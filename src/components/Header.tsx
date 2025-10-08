'use client';

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/Button";

export default function Header() {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsAboutOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <a href="#" className="flex items-center space-x-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 font-bold text-2xl">
                            ARULA
                        </span>
                    </a>
                </div>


                {/* Desktop Navigation */}
                <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                    <li>
                        <a href="#" className="hover:text-pink-700 text-gray-600 font-medium transition-colors">
                            Home
                        </a>
                    </li>
                    <li className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsAboutOpen(!isAboutOpen)}
                            className="hover:text-pink-700 text-gray-600 font-medium flex items-center transition-colors"
                        >
                            About
                            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isAboutOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 border border-gray-100">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Our Story</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Team</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Mission</a>
                            </div>
                        )}
                    </li>
                    <li>
                        <a href="#" className="hover:text-pink-700 text-gray-600 font-medium transition-colors">
                            Course
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-pink-700 text-gray-600 font-medium transition-colors">
                            Learning Hub
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-pink-700 text-gray-600 font-medium transition-colors">
                            Blogs
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-pink-700 text-gray-600 font-medium transition-colors">
                            Success Stories
                        </a>
                    </li>
                </ul>

                <div className="hidden lg:block">
                    <Button>Get Started</Button>
                </div>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100">
                    <ul className="px-4 py-4 space-y-3">
                        <li>
                            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                Home
                            </a>
                        </li>
                        <li>
                            <button
                                onClick={() => setIsAboutOpen(!isAboutOpen)}
                                className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            >
                                About
                                <ChevronDown className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isAboutOpen && (
                                <div className="pl-4 mt-2 space-y-2">
                                    <a href="#" className="block py-1 text-gray-600 hover:text-blue-600 transition-colors">Our Story</a>
                                    <a href="#" className="block py-1 text-gray-600 hover:text-blue-600 transition-colors">Team</a>
                                    <a href="#" className="block py-1 text-gray-600 hover:text-blue-600 transition-colors">Mission</a>
                                </div>
                            )}
                        </li>
                        <li>
                            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                Course
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                Learning Hub
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                Blogs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                Success Stories
                            </a>
                        </li>
                        <li className="pt-2">
                            <button className="w-full bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                Get Started
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}