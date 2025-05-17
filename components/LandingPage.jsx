import React from "react";
import PixelTransition from "./PixelTransition";

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
                </a>            </div>

            {/* Navigation Links */}
            <nav className="flex space-x-8 mt-2">
                <a href="#" className="text-gray-400 hover:text-white transition">NGL</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Discord</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Notes Warehouse</a>
            </nav>

            {/* Main Content */}
            <main className="flex flex-col items-center justify flex-1 mt-24">
                <h1 className="text-4xl md:text-5xl text-gray-300 font-light mb-2">
                    We're just getting <span className="text-white font-large bold">started !!</span>
                </h1>
                {/* Centered "dip" Section */}
                <div className="flex flex-col items-center">
                    <span className="text-2xl text-white font-normal mb-2">Anonymous Confessions, Notes Wareshouse and many more ...</span>
                    <span className="text-gray-400 text-lg mb-8">
                        <span className="text-gray-600 text-sm mr-4">(hover it)</span>
                    </span>
                </div>
            </main>


            <PixelTransition
                firstContent={
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
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
                        <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
                    </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
            />
        </div>
    );
}
