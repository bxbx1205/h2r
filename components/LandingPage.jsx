import React from "react";
import PixelTransition from "./PixelTransition";
import GradientText from "./GradientText";
import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-start">
            {/* Top Navigation */}
            <div className="w-full flex justify-between items-center px-8 py-4">
                <span className="text-white font-bold text-2xl">humansofrbu</span>
                <div className="flex space-x-6 items-center">
                </div>

                <a
                    href="#"
                    className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition"
                >
                    RBU's only social space to exist
                </a>
            </div>

            {/* Navigation Links */}
            <nav className="flex space-x-8 mt-2">
                <Link href='#discord' className="text-gray-400 hover:text-white transition">Discord</Link>
                <a href="#instagram" className="text-gray-400 hover:text-white transition">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Anonymous Confession</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Notes Warehouse</a>
            </nav>

            {/* Main Content */}
            <main className="flex flex-col items-center justify flex-1 mt-24">

                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class text-2xl"
                >
                    We are bringing Anonymous Confessions , Notes Wareshouse and many more ...
                </GradientText>

                {/* Centered "dip" Section */}
                <div className="flex flex-col items-center">
                    <span className="text-xl text-white font-large mb-2">humansofrbu is a student driven community, working in shadows to create a social space for RBU students</span>
                    <span className="text-gray-400 text-lg mb-8">
                        <span className="text-gray-600 text-xl mr-4">(hover it)</span>
                    </span>
                </div>
            </main>


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
                            backgroundColor: "#111"
                        }}
                    >
                        <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>We are cooking something !!</p>
                    </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card w-7xl h-screen"
            />
        </div>
    );
}
