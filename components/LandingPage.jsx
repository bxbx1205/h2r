import React, { useState } from "react";
import PixelTransition from "./PixelTransition";
import GradientText from "./GradientText";
import Link from "next/link";

export default function LandingPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-start px-4 sm:px-8">
            {/* Top Bar */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-center py-4">
                {/* Logo & Hamburger */}
                <div className="flex items-center justify-between w-full sm:w-auto">
                    <span className="text-white font-bold text-2xl sm:text-3xl cursor-pointer select-none">
                        humansof<span className="text-orange-500 font-bold">rbu</span>
                    </span>

                    {/* Hamburger Icon */}
                    <button
                        className="sm:hidden text-white focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Top Right Button */}
                <a
                    href="#"
                    className="bg-gray-800 text-white px-4 py-2 rounded-full text-xs sm:text-sm mt-4 sm:mt-0 whitespace-nowrap hover:bg-gray-700 transition sm:ml-6"
                >
                    RBU's only social space to exist
                </a>
            </div>

            {/* Nav Links */}
            <nav
                className={`w-full flex-col sm:flex-row sm:flex sm:justify-center sm:space-x-8 bg-gray-800 sm:bg-transparent rounded-md sm:rounded-none 
                    ${menuOpen ? "flex" : "hidden"} sm:flex`}
            >
                <Link
                    href="#discord"
                    className="block px-4 py-2 text-center text-gray-400 hover:text-white transition border-b border-gray-700 sm:border-none"
                    onClick={() => setMenuOpen(false)}
                >
                    Discord
                </Link>
                <a
                    href="#instagram"
                    className="block px-4 py-2 text-center text-gray-400 hover:text-white transition border-b border-gray-700 sm:border-none"
                    onClick={() => setMenuOpen(false)}
                >
                    Instagram
                </a>
                <a
                    href="#"
                    className="block px-4 py-2 text-center text-gray-400 hover:text-white transition border-b border-gray-700 sm:border-none"
                    onClick={() => setMenuOpen(false)}
                >
                    Anonymous Confession
                </a>
                <a
                    href="#"
                    className="block px-4 py-2 text-center text-gray-400 hover:text-white transition sm:border-none"
                    onClick={() => setMenuOpen(false)}
                >
                    Notes Warehouse
                </a>
            </nav>

            {/* Main Content */}
            <main className="flex flex-col items-center justify-center flex-1 mt-8 sm:mt-16 text-center max-w-3xl px-2 sm:px-0">
                <div className="flex flex-col items-center">
                    <span className="text-2xl sm:text-5xl text-white font-bold mb-2 leading-tight">
                        humansof<span className="text-orange-500 font-bold">rbu</span>, a student driven community
                    </span>

                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class text-base sm:text-xl max-w-xl mt-2"
                    >
                        We are bringing Anonymous Confessions, Notes Warehouse and many more ...
                    </GradientText>

                    <span className="text-gray-400 text-sm sm:text-base mb-6 mt-2">
                        <span className="text-gray-600 mr-2">(hover it)</span>
                    </span>
                </div>
            </main>

            {/* Pixel Transition Section */}
            <PixelTransition
                firstContent={
                    <img
                        src="https://i.postimg.cc/Jh2kLW9y/Frame-45.png"
                        alt="default pixel transition content, a cat!"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                }
                secondContent={
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "#111",
                        }}
                    >
                        <p
                            style={{
                                fontWeight: 900,
                                fontSize: "2rem",
                                color: "#ffffff",
                                textAlign: "center",
                                padding: "0 10px",
                            }}
                        >
                            We are cooking something !!
                        </p>
                    </div>
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card w-full max-w-screen-xl h-[60vh] sm:h-screen"
            />
        </div>
    );
}
