import { useState, useRef } from "react";
import { motion } from "framer-motion";







const ContactMagicButton = ({ text, bg, hoverBg, color }) => {




    const ref = useRef(null);

    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [bgState, setBgState] = useState("init");
    const [hasInteracted, setHasInteracted] = useState(false);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const maxOffset = 10;

        const newX = Math.max(-maxOffset, Math.min(maxOffset, x - centerX));
        const newY = Math.max(-maxOffset, Math.min(maxOffset, y - centerY));

        setOffsetX(newX);
        setOffsetY(newY);

        if (!hasInteracted) {
            setHasInteracted(true);
        }

        setBgState("hover");
    };

    const handleMouseLeave = () => {
        setOffsetX(0);
        setOffsetY(0);
        setBgState("leaving");

        setTimeout(() => {
            setBgState("resetting");
            setTimeout(() => setBgState("init"), 10);
        }, 500);
    };

    let animateProps = {};
    if (bgState === "hover") {
        animateProps = { y: 0, opacity: 1 };
    } else if (bgState === "leaving") {
        animateProps = { y: "-200%", opacity: 0 };
    } else if (bgState === "resetting") {
        animateProps = { y: "100%", opacity: 0 };
    } else {
        animateProps = { y: "100%", opacity: hasInteracted ? 1 : 0 };
    }

    return (
        <button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-full bg-${bg}  ${color ? `text-${color} 
                text-[1.2rem] tracking-[.2rem] font-medium`: 'text-white'} hover:text-white
                font-semibold px-[2.7rem] py-[1.3rem] border-[1.8px]
                border-borderSolidLight hover:border-none tracking-widest 
            text-lg  transition-all duration-600  flex items-center justify-center`}
            style={{
                transform: `translate(${offsetX}px, ${offsetY}px)`,
                transition: "transform 0.1s ease-out",
            }}
        >
            {/* Animated text */}
            <span
                className={`relative z-10 block text-center md:-tracking-[.8px] md:text-[1rem] text-[.8rem] font-medium  `}
                style={{
                    transform: `translate(${offsetX / 2}px, ${offsetY / 2}px)`,
                    transition: "transform 0.6s ease-out",
                }}
            >
                {text}
            </span>

            {/* Blue background */}
            <motion.span
                className={`absolute inset-0 bg-${hoverBg} rounded-full scale-150 z-0`}
                style={{
                    clipPath: "ellipse(390% 100% at 50% 100%)",
                }}
                initial={false}
                animate={animateProps}
                transition={{
                    duration: hasInteracted && bgState !== "resetting" ? 0.5 : 0,
                    ease: "easeInOut",
                }}
            />
        </button>

    );
};

export default ContactMagicButton;
