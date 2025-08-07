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
        <div className="pb-[7rem] ">
            {/* the section is the scroll target */}
            <motion.div
                ref={sectionRef}
                style={{ y: containerY }}
                className="flex lg:pt-[6rem] flex-col lg:flex-row
                justify-center lg:gap-[6rem] gap-[2rem] h-full lg:px-[3rem] px-[1rem] "
            >
                <AnimatedSplitText text={myText} />

                <div className="flex flex-col lg:gap-[3rem] pb-[4rem] lg:pb-0">
                    <p className="text-dark lg:text-[.9rem] text-[.9rem] font-samirFont ">
                        The combination of my passion <br /> for design, code & interaction <br /> positions me in a unique place in
                        <br /> the web design world.
                    </p>

                    <motion.div style={{ y: buttonY }}>
                        <button
                            onClick={() => navigate('/about')}
                            aria-label="About me"
                            className="pl-[11rem] sm:pl-0"
                        >
                            <MagicButton text={'About me'} size={'10rem'} bg={'dark'} hoverBg={'blue'} rounded={'full'} />
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            <div className="overflow-hidden py-[3rem] hidden xl:block">
                <div className="text-start ml-[10rem] text-gray lg:pb-9 text-sm">Recent work</div>
                <ProjectHoverPreview />
            </div>

            <div>
                <MobileProjectPreview />
            </div>

            <div className="flex items-center justify-center h-[3rem] pt-[1.5rem]">
                <ContactMagicButton text={'More Work'} size={'3rem'} bg={'transparent'} color={'blue'} hoverBg={'blue'} />
            </div>
        </div>
    );
};

export default ProfOfWork;
