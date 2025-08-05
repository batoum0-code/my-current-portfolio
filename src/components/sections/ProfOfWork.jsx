import AnimatedSplitText from '../utils/AnimatedSplitText';
import MagicButton from '../utils/MagicButton';
import ProjectHoverPreview from '../utils/ProjectHoverPreview';
import ContactMagicButton from '../utils/ContactMagicButton';

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
        <div className="pb-[7rem]">
            {/* the section is the scroll target */}
            <motion.div
                ref={sectionRef}
                style={{ y: containerY }}
                className="flex pt-[6rem] justify-center gap-[6rem] h-full px-[3rem]"
            >
                <AnimatedSplitText text={myText} />

                <div className="flex flex-col gap-[3rem]">
                    <p className="text-text text-[.9rem] font-samirFont">
                        The combination of my passion <br /> for design, code & interaction <br /> positions me in a unique place in
                        <br /> the web design world.
                    </p>

                    <motion.div style={{ y: buttonY }}>
                        {/* Use a semantic button for accessibility. If you prefer client-side navigation semantic Link is best:
                <Link to="/about" aria-label="About me"><MagicButton .../></Link>
            */}
                        <button
                            onClick={() => navigate('/about')}
                            aria-label="About me"
                            className="p-0 m-0"
                        >
                            <MagicButton text={'About me'} size={'10rem'} bg={'dark'} hoverBg={'blue'} rounded={'full'} />
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            <div className="overflow-hidden py-[3rem]">
                <div className="text-start ml-[10rem] text-gray pb-9 text-sm">Recent work</div>
                <ProjectHoverPreview />
            </div>

            <div className="flex items-center justify-center h-[3rem] pt-[1.5rem]">
                <ContactMagicButton text={'More Work'} size={'3rem'} bg={'transparent'} color={'blue'} hoverBg={'blue'} />
            </div>
        </div>
    );
};

export default ProfOfWork;
