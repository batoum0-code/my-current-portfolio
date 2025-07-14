import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const SlideMenu = () => {
    const [showButton, setShowButton] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
                setMenuOpen(false); // Optional: auto-close menu on scroll-up
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle menu state
    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    // Close menu when clicking outside
    const handleOverlayClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            {/* Menu Toggle Button */}
            {showButton && (
                <button
                    onClick={toggleMenu}
                    className="fixed top-5 right-5 z-50 p-3 bg-dark text-light shadow-lg rounded-full transition-all duration-900 hover:scale-105"
                >
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            )}

            {/* Overlay + Sliding Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-gray opacity-10 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={handleOverlayClick}
                        />

                        {/* Right Menu */}
                        <motion.div
                            className="fixed top-0 right-0 h-full bg-dark z-50 text-light shadow-2xl  p-6"
                            style={{ width: 500 }}
                            initial={{ x: 500 }}
                            animate={{ x: 0 }}
                            exit={{ x: 500 }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <h2 className="text-xl font-semibold pb-4 border-b-[1px] border-gray">Navigation</h2>
                            <ul className="space-y-4">
                                <li>About</li>
                                <li>Work</li>
                                <li>Contact</li>
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default SlideMenu;
