import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";

const SvgBorderBottom = () => {

    const borderRef = useRef(null);

    // Watch scroll progress relative to the MagicButton
    const { scrollYProgress } = useScroll({
        target: borderRef,
        offset: ['start end', 'end start'],
    });

    // Animate Y position from 100px to -20px based on scroll
    const y = useTransform(scrollYProgress, [0, 1], [-220, 230]);



    return <motion.div
        ref={borderRef}
        style={{ y }}
        className="h-[100vh] overflow-hidden"
    >
        
            <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,128L40,106.7C80,85,160,43,240,64C320,85,400,171,480,176C560,181,640,107,720,96C800,85,880,139,960,144C1040,149,1120,107,1200,106.7C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                ></path>
            </svg>
        
    </motion.div>;
};

export default SvgBorderBottom;
