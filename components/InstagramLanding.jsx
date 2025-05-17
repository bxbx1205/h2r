import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'

const InstagramLanding = () => {
    return (
        <div className="min-h-screen flex items-center p-5" id='Instagram'>
            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Left Section - Image */}
                <div className="lg:w-1/2 w-full flex justify-center order-1 lg:order-none">
                    <motion.div
                        className="bg-[#232842] w-full max-w-xl rounded-3xl p-3 shadow-xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="bg-gradient-to-br from-[#2a2a4c] to-[#1a1a35] rounded-2xl overflow-hidden">
                            <div className="w-full relative pb-[56.25%] overflow-hidden">
                                <Image
                                    src="/img2.png"
                                    width={1000}
                                    height={1000}
                                    alt="RBU Background"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* Right Section - Text */}
                <div className="lg:w-1/2 w-full relative px-4 flex flex-col items-center lg:items-start">
                    <div className="hidden lg:block absolute left-0 top-0 w-px h-full bg-white/10"></div>
                    <div className="hidden lg:block absolute left-10 top-0 w-px h-full bg-white/10"></div>
                    <div className="lg:pl-16 md:max-w-xl mx-auto text-center lg:text-left">
                        <motion.span
                            className="text-[#FF4B39] text-sm block mb-5"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            @humansofrbu
                        </motion.span>
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold mb-5 tracking-wide text-white"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            INSTAGRAM COMMUNITY
                        </motion.h1>
                        <motion.p
                            className="text-white/80 text-base mb-10 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Join our Instagram to connect, share stories, and stay updated on events at Ramdeobaba University. Be part of a vibrant community celebrating students, faculty, and alumni through real stories and experiences.
                        </motion.p>
                        <motion.button
                            className="bg-[#FF4B39] text-white font-semibold py-3 px-8 rounded shadow-[0_0_15px_rgba(255,75,57,0.5)] hover:shadow-[0_0_25px_rgba(255,75,57,0.7)] transition-all duration-300 hover:-translate-y-1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Follow Us!
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstagramLanding;
