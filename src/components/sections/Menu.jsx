import { useEffect, useState, useRef, useContext } from "react";



import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


import { HiBars2 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

import MenuItem from "../utils/MenuItem";
import SocialMediaTitle from "../utils/SocialMediaTitle";
import MagicButton from "../utils/MagicButton";

import { usePage } from "../../context/useContext";







const SlideMenu = () => {

    const {menuOpen, setMenuOpen} = usePage();


    const navigate = useNavigate();



    const [showButton, setShowButton] = useState(false);
    
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

            if (window.scrollY > 2170) {
                setButtonState(true);
            } else {
                setButtonState(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [buttonState]);

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



            {/* small devices menu toggle  */}
            <div className="md:hidden">

                {(showButton || menuOpen) && (

                    <div
                        ref={buttonRef}
                        onClick={toggleMenu}
                        className={`fixed md:top-7 md:right-7 top-5 
                            right-2 z-50   ${buttonState ? 'text-gray border-gray border-[1px] hover:border-none ' : 'text-light'}  
                        ${menuOpen ? 'border-none' : ''}
                    rounded-full transition-all duration-100 `}
                    >
                        {
                            menuOpen ?  <MagicButton
                                size={'3.8rem'}
                                text={<RxCross1 size={20} />}
                                bg={'blue'}
                                hoverBg={'deepb'}
                                rounded={'full'}
                            /> :
                                <MagicButton
                                    size={'3.8rem'}
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

            </div>



            {/* large devices menu toggle ------------------------------------------------------------------ */}
            <div className="hidden md:block">

                {(showButton || menuOpen) && (

                    <div
                        ref={buttonRef}
                        onClick={toggleMenu}
                        className={`fixed md:top-7 md:right-7 top-5 right-2 z-50   ${buttonState ? 'text-gray border-opacity-20 border-[1.5px] border-gray hover:border-none ' : 'text-light'}  
                        ${menuOpen ? 'border-none' : ''}
                    rounded-full transition-all duration-100 `}
                    >
                        {
                            menuOpen ? <MagicButton
                                size={'4.5rem'}
                                text={<RxCross1 size={20} />}
                                bg={'blue'}
                                hoverBg={'deepb'}
                                rounded={'full'}
                            /> :
                                <MagicButton
                                    size={'4.5rem'}
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
            </div>

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
                            <div className="flex flex-col items-start justify-start pl-[rem] md:pl-[1.7rem]">
                                <h2 className="text-[.6rem] md:text-[.55rem] font-bold py-4 md:py-6  text-gray uppercase">Navigation</h2>
                                <div className="h-[1px]  bg-borderSolid w-[22.2rem] md:w-[20.2rem] opacity-30"></div>
                                <ul className="pt-6 -space-y-3">
                                    {
                                        menuItems.map(({ label, path }) => {
                                            return (
                                                <li key={label} onClick={() => navigate(path)}
                                                    className="cursor-pointer">
                                                    <MenuItem label={label}
                                                        setIsAnyHovered={setIsAnyHovered} isAnyHovered={isAnyHovered} />
                                                </li>)
                                        })
                                    }
                                </ul>
                            </div>

                            <div className=" md:ml-[1.7rem] md:hidden h-[.2px] max-h-[0.1px] opacity-40 w-[22.2rem] bg-borderSolid mt-[11rem] ">

                            </div>


                            {/* social media icons or titles depend on moode */}
                            <div className=" md:pl-[1.7rem] md:pt-[8.2rem] pt-6">
                                <h2 className="text-[.6rem] md:text-[.65rem] tracking-normal text-gray uppercase font-bold">Socials</h2>
                                <ul className=" pt-3 flex gap-6 ">
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
        </div>


    );
};

export default SlideMenu;
