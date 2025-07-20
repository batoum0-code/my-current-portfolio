import AnimatedSplitText from '../utils/AnimatedSplitText';
import MagicButton from '../utils/MagicButton';
import ProjectHoverPreview from '../utils/ProjectHoverPreview';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ProfOfWork = () => {
    const myText = `Helping brands to stand out in the digital era.
        Together we will set the new status quo. No
        nonsense, always oth cutting edge.`;

    const magicRef = useRef(null);

    // Watch scroll progress relative to the MagicButton
    const { scrollYProgress } = useScroll({
        target: magicRef,
        offset: ['start end', 'end start'],
    });

    // Animate Y position from 100px to -20px based on scroll
    const y = useTransform(scrollYProgress, [0, 1], [120, -90]);

    return (
        <div className='rounded-b-[30rem]'>
            <div className="flex pt-[10rem] justify-center gap-[6rem] h-full px-[3rem] ">
                <AnimatedSplitText text={myText} />
                <div className="flex flex-col gap-[3rem]">
                    <p className="text-text text-[.9rem] font-samirFont">
                        The combination of my passion <br /> for design, code & interaction <br /> positions me in a unique place in
                        <br /> the web design world.
                    </p>
                    <motion.div
                        ref={magicRef}
                        style={{ y }}
                    >
                        <div className=''>
                            <MagicButton text={'About me'} size={'9rem'} bg={'dark'} hoverBg={'blue'} rounded={'full'}/>
                        </div>
                    </motion.div>
                </div> 
            </div>

            <div>
                <div className="text-start ml-[10rem] text-gray pb-9 text-sm">Recent work</div>
                <ProjectHoverPreview />
            </div>
        </div>
    );
};

export default ProfOfWork;
