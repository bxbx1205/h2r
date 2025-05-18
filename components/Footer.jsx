import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gradient-to-r from-[#1a1e33] to-[#232842] py-6 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo and Social Links */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-[#1a1e33]">
                            <span className="text-[#FF4B39] font-bold text-lg">RBU</span>
                        </div>
                        <div className="flex gap-4 text-white/80">
                            {/* Instagram Icon */}
                            <a href="https://www.instagram.com/humansofrbu/" className="hover:text-[#FF4B39] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>

                            {/* Discord Icon */}
                            <a href="https://discord.gg/qYhRRdumMM" className="hover:text-[#FF4B39] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.976-.608 1.41a18.27 18.27 0 0 0-5.487 0 12.278 12.278 0 0 0-.617-1.41.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 6.031 3.056.075.075 0 0 0 .082-.023c.45-.618.846-1.275 1.188-1.962a.076.076 0 0 0-.041-.105 13.209 13.209 0 0 1-1.879-.892.075.075 0 0 1-.007-.125c.126-.095.252-.193.372-.292a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 0 1 .079.01c.12.098.245.196.372.292a.075.075 0 0 1-.006.125c-.598.35-1.226.645-1.88.892a.077.077 0 0 0-.041.106c.348.687.744 1.344 1.188 1.961a.075.075 0 0 0 .082.023 19.963 19.963 0 0 0 6.03-3.056.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex gap-8 text-sm text-white/80">
                        <a href="#" className="hover:text-white transition-colors">Home</a>
                        <a href="https://www.instagram.com/humansofrbu/" className="hover:text-white transition-colors">Instagram</a>
                        <a href="https://discord.gg/qYhRRdumMM" className="hover:text-white transition-colors">Discord</a>
                        {/* <a href="#" className="hover:text-white transition-colors">Community</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a> */}
                    </div>
                </div>

                {/* Made with Love Text */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/70 text-sm">
                        © {currentYear} Humans of RBU. All rights reserved.
                    </p>

                    <p className="text-white/70 text-sm flex items-center">
                        <span>Made with</span>
                        <span className="text-[#FF4B39] mx-1 animate-pulse">💖</span>
                        <span>by team Humans of RBU</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
