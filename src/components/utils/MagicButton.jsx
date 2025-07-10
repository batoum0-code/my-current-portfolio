import { useState, useRef } from "react";
import { motion } from "framer-motion";

const MagicButton = ({ children }) => {
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

        const maxOffset = 15;

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
            className="relative overflow-hidden px-[3rem] py-[4.6rem] rounded-full bg-dark-dark text-white font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-2xl"
            style={{
                transform: `translate(${offsetX}px, ${offsetY}px)`,
                transition: "transform 0.3s ease-out",
            }}
        >
            {/* Animated text */}
            <span
                className="relative z-10 block"
                style={{
                    transform: `translate(${offsetX / 2}px, ${offsetY / 2}px)`,
                    transition: "transform 0.3s ease-out",
                }}
            >
                {children}
            </span>

            {/* Blue background */}
            <motion.span
                className="absolute inset-0 bg-blue rounded-[100px] scale-150 z-0"
                style={{
                    clipPath: "ellipse(120% 100% at 50% 100%)",
                }}
                initial={false} // prevent any initial animation from Framer
                animate={animateProps}
                transition={{
                    duration: hasInteracted && bgState !== "resetting" ? 0.5 : 0,
                    ease: "easeInOut",
                }}
            />
        </button>
    );
};

export default MagicButton;
