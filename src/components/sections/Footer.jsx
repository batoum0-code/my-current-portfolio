import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


import img from '../../../public/favicon.png';
import { GoArrowDownLeft } from "react-icons/go";




import MagicButton from '../utils/MagicButton';
import ContactMagicButton from '../utils/ContactMagicButton';
import SocialMediaTitle from '../utils/SocialMediaTitle';











const Footer = () => {


    const navigate = useNavigate();

    const borderRef = useRef(null);

    // Watch scroll progress relative to the MagicButton
    const { scrollYProgress } = useScroll({
        target: borderRef,
        offset: ['start end', 'end start'],
    });

    // Animate Y position from 100px to -20px based on scroll
    const x = useTransform(scrollYProgress, [1, 0], [60, -90]);


    const now = new Date();

    const time = new Intl.DateTimeFormat('en-UK', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZoneName: 'short',
    }).format(now);




    return <footer className="bg-dark w-full h-screen flex flex-col justify-between md:pt-[6rem] md:px-[1.2rem] pt-[5rem] font-samirFont">

        <div className='flex flex-col justify-center px-[1rem] md:px-[12rem]  '>

            <div className=' flex  md:gap-[24rem] pb-[5.9rem]'>
                <div className="flex flex-col items-start justify-start leading-[3.3rem] md:leading-[4.4rem] md:tracking-[.2rem]">
                    <h1 className="text-light text-[2.3rem] md:text-[5rem] flex items-center  gap-6 font-samirFont md:pb-[1rem]">
                        <img src={img} alt="" className="max-w-[4.4rem] max-h-[4.4rem] rounded-full" />Let’s work

                    </h1>
                    <h1 className="text-light text-[2.3rem] md:text-[5rem]  font-samirFont" >
                        together
                    </h1>
                </div>

            </div>

            <div className='relative'>
                <div className='absolute z-20 right-20 -top-20'>

                    <motion.div
                        ref={borderRef}
                        style={{ x }}>

                        <div
                            className='hidden md:block'
                            onClick={() => navigate('/contact')}>
                            <MagicButton text={'Get in tuch'} size={'9.9rem'} bg={'blue'} hoverBg={'deepb'} rounded={'full'} />
                        </div>
                        <div
                            className='md:hidden'
                            onClick={() => navigate('/contact')}>
                            <MagicButton text={'Get in tuch'} size={'8rem'} bg={'blue'} hoverBg={'deepb'} rounded={'full'} />
                        </div>

                    </motion.div>

                    <div className='text-light text-[2rem]   absolute -top-10 -right-20'>
                        <GoArrowDownLeft />
                        
                    </div>
                </div>
                <div className="absolute  z-10 bg-gray w-full h-[1.5px] opacity-20"></div>
            </div>

            <div className='flex flex-col md:flex-row gap-5 md:gap-2 md:pt-11 pt-[7rem]'>
                <ContactMagicButton text={'batoumsamir0@gmail.com'} size={'4rem'} bg={'transparent'} hoverBg={'blue'} rounded={'lg'} />
                <ContactMagicButton text={'+212 6 04 36 04 52'} size={'4rem'} bg={'transparent'} hoverBg={'blue'} rounded={'lg'} />
            </div>
        </div>

        <div className='bg-dark md:py-[1rem] px-[1rem] md:px-[2rem] text-light'>
            <div className="flex flex-col-reverse md:flex-row  justify-between items-center">
                <div className="flex gap-[12rem] pb-8 md:pb-0 md:gap-[2rem]">
                    <div className='flex flex-col gap-2 justify-start'>
                        <span className='uppercase md:text-[.6rem] text-[.52rem] tracking-[.1px] font-extrabold text-gray opacity-80 font-samirFont'>version</span>
                        <span className='text-[11px] font-bold font-samirFont'>2022 © Edition</span>
                    </div>
                    <div className='flex flex-col gap-2 justify-start'>
                        <span className="uppercase md:text-[.6rem] text-[.52rem] tracking-[.1px] font-extrabold text-gray opacity-80 font-samirFont">
                            local time
                        </span>
                        <span className='text-[11px] font-bold font-samirFont uppercase'>
                            {time}
                        </span>
                    </div>
                </div>

                {/* smooth line under */}
                <div className="h-[.1px] bg-borderSolid opacity-40 w-full md:hidden mt-[.7rem] mb-[1.6rem]"></div>

                <div className="">
                    <span className='uppercase md:text-[.6rem] text-[.52rem] tracking-[.1px] font-extrabold text-gray opacity-80 font-samirFont'>socials</span>
                    <div>
                        <ul className=" pt-3 flex gap-6">
                            <li className="cursor-pointer"><SocialMediaTitle label='Youtube' /></li>
                            <a href="https://www.linkedin.com/in/samir-batoum-3948b72a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                <li className="cursor-pointer"><SocialMediaTitle label='Linkedin' /></li></a>
                            <a href="https://github.com/batoum0-code" target="_blank" rel="noopener noreferrer">
                                <li className="cursor-pointer"><SocialMediaTitle label='Github' /></li>
                            </a>
                            <li className="cursor-pointer"><SocialMediaTitle label='Whatsapp' /></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </footer>;
};

export default Footer;
