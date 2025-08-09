import { useEffect, useState, useRef, useContext } from "react";



import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


import { HiBars2 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

import MenuItem from "../utils/MenuItem";
import SocialMediaTitle from "../utils/SocialMediaTitle";
import MagicButton from "../utils/MagicButton";









const SlideMenu = () => {


    const navigate = useNavigate();



    const [showButton, setShowButton] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [buttonState, setButtonState] = useState(false);
    const [isAnyHovered, setIsAnyHovered] = useState(false);
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

            if (window.scrollY > 2470) {
                setButtonState(true);
            } else {
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





    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            // Clean up in case the component unmounts
            document.body.style.overflow = '';
        };
    }, [menuOpen]);



    const menuItems = [
        { label: 'Home', paht: "/" },
        { label: 'Work', paht: "/work" },
        { label: 'About', paht: "/about" },
        { label: 'Contact', paht: "/contact" },
    ]






    return (
        <div className="">
            {/* Menu Toggle Button */}
            {(showButton || menuOpen) && (

                <div
                    ref={buttonRef}
                    onClick={toggleMenu}
                    className={`fixed top-7 right-7 z-50   ${buttonState ? 'text-gray border-[1px] border-gray hover:border-none ' : 'text-light'}  
                        ${menuOpen ? 'border-none' : ''}
                    rounded-full transition-all duration-100 `}
                >
                    {
                        menuOpen ? <MagicButton
                            size={'4.8rem'}
                            text={<RxCross1 size={20} />}
                            bg={'blue'}
                            hoverBg={'deepb'}
                            rounded={'full'}
                        /> :
                            <MagicButton
                                size={'4.8rem'}
                                text={<HiBars2 size={28} />}
                                bg={'dark'}
                                hoverBg={'blue'}
                                rounded={'full'}
                                color={'gray'}
                                hoverColor={'light'}
                            />
                    }
                </div>
            )}

            {/* Overlay + Sliding Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-gradient-to-r from-black/20 to-black/90 opacity-20 z-30 hidden md:block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={handleOverlayClick}
                        />

                        {/* Right Menu */}
                        <motion.div
                            className="fixed top-0 right-0 left-0 md:left-auto h-full bg-dark z-40 text-light  shadow-full shadow-white w-full
                            px-[5vw] pt-[15vh] pb-[10vh]"

                            style={{ width: 510 }}
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
                                clipPath: "inset(19% 19% 100% 100%)",
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.25, 1, 0.5, 1], // smooth curve-like motion
                            }}
                        >
                            <div className="flex flex-col items-start justify-start ">
                                <h2 className="text-[.55rem] font-bold pl-[1.7rem] pt-6 pb-6 text-gray uppercase">Navigation</h2>
                                <div className="h-[.1px] ml-[1.7rem] bg-gray w-[20.2rem] opacity-60"></div>
                                <ul className="pt-6 -space-y-3">
                                    {
                                        menuItems.map(({ label, path }) => {
                                            return (
                                                <li key={label} onClick={() => navigate(path)}
                                                    className="cursor-pointer">
                                                    <MenuItem label={label}
                                                        setIsAnyHovered={setIsAnyHovered} isAnyHovered={isAnyHovered}/>
                                                </li>)
                                        })
                                    }
                                </ul>
                            </div>

                            <div className="pl-[1rem] md:hidden h-[1px] opacity-70 w-full bg-gray mt-[10rem]">

                            </div>


                            {/* social media icons or titles depend on moode */}
                            <div className="pl-[1rem] md:pl-[1.7rem] md:pt-[7.2rem] ">
                                <h2 className="text-[.65rem] tracking-normal text-gray uppercase font-bold">Socials</h2>
                                <ul className=" pt-3 flex gap-6">
                                    <li onClick={() => console.log('this your current page ', currentPage)} className="cursor-pointer"><SocialMediaTitle label='Awwwards' /></li>
                                    <li className="cursor-pointer"><SocialMediaTitle label='Linkedin' /></li>
                                    <li className="cursor-pointer"><SocialMediaTitle label='Github' /></li>
                                    <li className="cursor-pointer"><SocialMediaTitle label='Whatsapp' /></li>
                                </ul>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>


    );
};

export default SlideMenu;
