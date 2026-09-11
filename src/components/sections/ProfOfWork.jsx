import AnimatedSplitText from '../utils/AnimatedSplitText';
import MagicButton from '../utils/MagicButton';
import ProjectHoverPreview from './ProjectHoverPreview';
import ContactMagicButton from '../utils/ContactMagicButton';
import MobileProjectPreview from './MobileProjectPreview'





import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfOfWork = () => {
    const myText = `Helping brands to stand out in the digital era.
    Together we will set the new status quo. No
    nonsense, always cutting edge.`; // fixed typo

    const navigate = useNavigate();
    const sectionRef = useRef(null);



    // single useScroll observing the section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // derive two different transforms for depth
    const containerY = useTransform(scrollYProgress, [0, 1], [180, -90]);
    const buttonY = useTransform(scrollYProgress, [0, 1], [120, -30]);

    return (
        <div className="pb-[5rem] bg-[#fffe] ">
            {/* the section is the scroll target */}
            <motion.div
                ref={sectionRef}
                style={{ y: containerY }}
                className="flex lg:pt-[6rem] flex-col lg:flex-row
                justify-center lg:gap-[6rem] gap-[2rem] h-full lg:px-[3rem] px-[1rem]"
            >
                <AnimatedSplitText text={myText} />

                <div className="flex flex-col lg:gap-[3rem] pb-[4rem] lg:pb-0">
                    <p className="text-dark lg:text-[1.1rem] text-[.9rem] font-samirFont tracking-[-1.3px] ">
                        The combination of my passion <br /> for design, code & interaction <br /> positions me in a unique place in
                        <br /> the web design world.
                    </p>

                    <motion.div style={{ y: buttonY }}>
                        <div
                            onClick={() => navigate('/about')}
                            aria-label="About me"
                            className="pl-[11rem] sm:pl-0"
                        >
                            <MagicButton text={'About me'} size={'10rem'} bg={'dark'} hoverBg={'blue'} rounded={'full'} />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <div className="overflow-hidden hidden xl:block py-[7rem]">
                <div className="text-start ml-[14rem] text-gray lg:pb-9 text-[9.6px] font-semibold
                                    font-samirFont uppercase">Recent work</div>
                <ProjectHoverPreview />
            </div>

            <div className='xl:hidden'>

                <MobileProjectPreview />

            </div>

            <div className="flex items-center justify-center h-[3rem]  ">
                <ContactMagicButton text={'More Work'} size={'3rem'} bg={'dark'} color={'white'} hoverBg={'blue'} isContact={false}/>
            </div>
        </div>
    );
};

export default ProfOfWork;
