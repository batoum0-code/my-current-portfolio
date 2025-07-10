import { motion, useScroll, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const NewsTicker = () => {
    const { scrollY } = useScroll();
    const x = useMotionValue(0);
    const lastScrollY = useRef(0);
    const directionRef = useRef(-1); // -1: left, 1: right

    const text = "Batoum Samir —";
    const repeatedText = text.repeat(50); // enough to overflow screen

    // Animation loop that keeps moving ticker
    useEffect(() => {
        let frame;

        const animate = () => {
            const current = x.get();
            const next = current + directionRef.current * 1.5; // speed here

            // Reset to 0 to create infinite loop illusion
            const resetPoint = -2000; // adjust based on actual text width
            const loopStart = 0;

            if (directionRef.current === -1 && next <= resetPoint) {
                x.set(loopStart);
            } else if (directionRef.current === 1 && next >= loopStart) {
                x.set(resetPoint);
            } else {
                x.set(next);
            }

            frame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(frame);
    }, [x]);

    // Reverse direction on scroll movement
    useEffect(() => {
        const unsubscribe = scrollY.on("change", (y) => {
            const delta = y - lastScrollY.current;

            if (delta > 0) {
                directionRef.current = -1; // scroll down → left
            } else if (delta < 0) {
                directionRef.current = 1; // scroll up → right
            }

            lastScrollY.current = y;
        });

        return () => unsubscribe();
    }, [scrollY]);

    return (
        <div className="relative overflow-hidden w-full h-[12rem] bg-transparent flex items-center">
            <motion.div
                className="flex whitespace-nowrap absolute"
                style={{ x }}
            >
                <span className="text-[9rem] text-white">{repeatedText}</span>
                <span className="text-[9rem] text-white">{repeatedText}</span>
            </motion.div>
        </div>
    );
};

export default NewsTicker;
