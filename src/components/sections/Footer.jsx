import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";



import img from '../../assets/samir.png';
import { GiSupersonicArrow } from "react-icons/gi";


import MagicButton from '../utils/MagicButton';
import ContactMagicButton from '../utils/ContactMagicButton';
import SocialMediaTitle from '../utils/SocialMediaTitle';











const Footer = () => {


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




    return <footer className="bg-dark w-full h-screen flex flex-col justify-between pt-[4rem]">

        <div className='flex flex-col justify-center px-[12rem]  '>

            <div className=' flex   gap-[24rem] pb-[4.2rem]'>
                <div className="flex flex-col items-start justify-start leading-[4.4rem] tracking-[.2rem]">
                    <h1 className="text-light text-[5rem] flex items-center  gap-6 font-samirFont">
                        <img src={img} alt="" className="max-w-[3rem] max-h-[3rem] rounded-full" />Let’s work

                    </h1>
                    <h1 className="text-light text-[5rem]  font-samirFont" >
                        together
                    </h1>
                </div>

            </div>

            <div className='relative'>
                <div className='absolute z-20 right-20 -top-20'>

                    <motion.div
                        ref={borderRef}
                        style={{ x }}>

                        <MagicButton text={'Get in tuch'} size={'9.6rem'} bg={'blue'} hoverBg={'deepb'} rounded={'full'} />

                    </motion.div>

                    <div className='text-light text-[2rem] transform rotate-90 absolute -top-10 -right-20'>
                        <GiSupersonicArrow />
                    </div>
                </div>
                <div className="absolute  z-10 bg-gray w-full h-[1.5px] opacity-20"></div>
            </div>

            <div className='flex gap-5 pt-9'>
                <ContactMagicButton text={'+212 696550985'} size={'3rem'} bg={'transparent'} hoverBg={'blue'} rounded={'lg'} />
                <ContactMagicButton text={'batoumsamir0@gmail.com'} bg={'transparent'} hoverBg={'blue'} rounded={'lg'} />
            </div>
        </div>

        <div className='bg-dark py-[1rem] px-[2rem] text-light'>
            <div className="flex justify-between items-center">
                <div className="flex gap-[2rem]">
                    <div className='flex flex-col gap-2 justify-start'>
                        <span className='uppercase text-[9px] font-extrabold text-gray font-samirFont'>version</span>
                        <span className='text-[11px] font-bold font-samirFont'>2022 © Edition</span>
                    </div>
                    <div className='flex flex-col gap-2 justify-start'>
                        <span className="uppercase text-[9px] font-extrabold text-gray">
                            local time
                        </span>
                        <span className='text-[11px] font-bold font-samirFont uppercase'>
                            {time}
                        </span>
                    </div>
                </div>
                <div className="">
                    <span className='uppercase text-[9px] font-extrabold text-gray'>socials</span>
                    <div>
                        <ul className=" pt-3 flex gap-6">
                            <li className="cursor-pointer"><SocialMediaTitle label='Awwwards' /></li>
                            <li className="cursor-pointer"><SocialMediaTitle label='Linkedin' /></li>
                            <li className="cursor-pointer"><SocialMediaTitle label='Github' /></li>
                            <li className="cursor-pointer"><SocialMediaTitle label='Whatsapp' /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>;
};

export default Footer;
