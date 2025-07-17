import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import MenuItem from "../utils/MenuItem";
import SocialMediaTitle from "../utils/SocialMediaTitle";
import { TbRubberStamp } from "react-icons/tb";








const SlideMenu = () => {
    const [showButton, setShowButton] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [buttonState, setButtonState] = useState(false)
    const buttonRef = useRef();

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
                setMenuOpen(false); // Optional: auto-close menu on scroll-up
            }

            if(window.scrollY > 2500){
                setButtonState(true);
            }else {
                setButtonState(false);
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
            {(showButton || menuOpen) && (
                <button
                    ref={buttonRef}
                    onClick={toggleMenu}
                    className={`fixed top-5 right-5 z-50 p-6 border-[1px]  ${menuOpen ? "bg-blue" : "bg-dark"} ${buttonState ? 'text-lightGray border-gray': 'text-light'}  
                    rounded-full transition-all duration-900 `}
                >
                    {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                </button>
            )}

            {/* Overlay + Sliding Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-light opacity-20 z-30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={handleOverlayClick}
                        />

                        {/* Right Menu */}
                        <motion.div
                            className="fixed top-0 right-0 h-full bg-dark z-40 text-light shadow-2xl 
                            px-[5vw] pt-[15vh] pb-[10vh]"

                            style={{ width: 450 }}
                            initial={{
                                x: 500,
                                clipPath: "inset(100% 100% 100% 100%)", // hidden from right with curve
                            }}
                            animate={{
                                x: 0,
                                clipPath: "inset(0% 0% 0% 0%)", // fully shown
                            }}
                            exit={{
                                x: 10,
                                clipPath: "inset(0% 0% 100% 100%)",
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.25, 1, 0.5, 1], // smooth curve-like motion
                            }}
                        >
                            <div className="flex flex-col items-start justify-start">
                                <h2 className="text-[.55rem] font-medium pl-[1.7rem]  pb-6 text-gray uppercase">Navigation</h2>
                                <div className="h-[.1px] ml-[1.7rem] mr-[1rem] bg-gray w-full "></div>
                                <ul className=" pt-6">
                                    <li className="cursor-pointer"><MenuItem label='Home' /></li>
                                    <li className="cursor-pointer"><MenuItem label='Work' /></li>
                                    <li className="cursor-pointer"><MenuItem label='About' /></li>
                                    <li className="cursor-pointer"><MenuItem label='Contact' /></li>
                                </ul>
                            </div>


                            {/* social media icons or titles depend on moode */}
                            <div className="pl-[1.7rem] pt-20">
                                <h2 className="text-[.55rem] font-medium tracking-normal text-gray uppercase">Socials</h2>
                                <ul className=" pt-3 flex gap-6">
                                    <li className="cursor-pointer"><SocialMediaTitle label='Awwwards' /></li>
                                    <li className="cursor-pointer"><SocialMediaTitle label='Linkedin' /></li>
                                    <li className="cursor-pointer"><SocialMediaTitle label='Github' /></li>
                                    <li className="cursor-pointer"><SocialMediaTitle label='Whatsapp' /></li>
                                </ul>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default SlideMenu;
