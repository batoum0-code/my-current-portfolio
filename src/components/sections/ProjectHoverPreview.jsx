import { useRef, useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";

import amelkis from "../../assets/amelkis.webp";
import comgolf from "../../assets/com&golf.webp";
import img4 from "../../assets/q1.webp";
import cherti from "../../assets/cherti.webp";

const projects = [
    {
        id: 1,
        title: "Com & Golf",
        tech: ["Wordpress", "Elementor"],
        image: comgolf,
        theme: "#DCE3D4",
    },
    {
        id: 2,
        title: "AMELKIS",
        tech: ["React", "Node js"],
        image: amelkis,
        theme: "#141517",
    },
    {
        id: 3,
        title: "Riad BERBERE",
        tech: ["React", "Node.js"],
        image: img4,
        theme: "#E8E4DC",
    },
    {
        id: 4,
        title: "MASSANO CHERTI",
        tech: [
            "Wordpress",
            "React js",
            "Express js",
            "Strapi",
        ],
        image: cherti,
        theme: "#cac5e5",
    },
];

export default function ProjectHoverWithSlide() {
    const containerRef = useRef(null);
    const previewScrollRef = useRef(null);

    const sectionRefs = useRef([]);
    const projectRefs = useRef([]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [mousePos, setMousePos] = useState({
        x: 0,
        y: 0,
    });
    const [showPreview, setShowPreview] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | PREVIEW
    |--------------------------------------------------------------------------
    */

    const PREVIEW_SIZE = 400;
    const PREVIEW_CENTER = PREVIEW_SIZE / 2;

    /*
    |--------------------------------------------------------------------------
    | BUTTON
    |--------------------------------------------------------------------------
    */

    // ~4cm movement radius
    const BUTTON_RADIUS = 150;

    const buttonX = useMotionValue(0);
    const buttonY = useMotionValue(0);

    const springButtonX = useSpring(buttonX, {
        stiffness: 2,
        damping: 18,
        mass: 0.1,
    });

    const springButtonY = useSpring(buttonY, {
        stiffness: 120,
        damping: 14,
        mass: 0.6,
    });

    /*
    |--------------------------------------------------------------------------
    | DELAYED CURSOR
    |--------------------------------------------------------------------------
    */

    const delayedMouseX = useMotionValue(0);
    const delayedMouseY = useMotionValue(0);

    const springMouseX = useSpring(delayedMouseX, {
        stiffness: 80,
        damping: 18,
        mass: 0.5,
    });

    const springMouseY = useSpring(delayedMouseY, {
        stiffness: 80,
        damping: 18,
        mass: 0.5,
    });

    /*
    |--------------------------------------------------------------------------
    | SCROLL PREVIEW
    |--------------------------------------------------------------------------
    */

    const scrollToImage = (index) => {
        const section = sectionRefs.current[index];
        const container = previewScrollRef.current;

        if (!section || !container) return;

        container.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
        });
    };

    /*
    |--------------------------------------------------------------------------
    | MOUSE TRACKING
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const handleMouseMove = (e) => {
            const rect =
                container.getBoundingClientRect();

            /*
            |--------------------------------------------------------------------------
            | REAL CURSOR POSITION
            |--------------------------------------------------------------------------
            */

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            setMousePos({
                x,
                y,
            });

            /*
            |--------------------------------------------------------------------------
            | UPDATE CURSOR TARGET
            |--------------------------------------------------------------------------
            */

            delayedMouseX.set(e.clientX);
            delayedMouseY.set(e.clientY);

            /*
            |--------------------------------------------------------------------------
            | ACTIVE PROJECT
            |--------------------------------------------------------------------------
            */

            for (
                let i = 0;
                i < projectRefs.current.length;
                i++
            ) {
                const project =
                    projectRefs.current[i];

                if (!project) continue;

                const projectRect =
                    project.getBoundingClientRect();

                const top =
                    projectRect.top - rect.top;

                const bottom =
                    projectRect.bottom - rect.top;

                if (y >= top && y <= bottom) {
                    setActiveIndex(
                        (currentIndex) => {
                            if (
                                currentIndex !== i
                            ) {
                                scrollToImage(i);
                                return i;
                            }

                            return currentIndex;
                        }
                    );

                    break;
                }
            }
        };

        const handleMouseEnter = (e) => {
            setShowPreview(true);

            /*
            |--------------------------------------------------------------------------
            | INITIALIZE CURSOR
            |--------------------------------------------------------------------------
            */

            delayedMouseX.set(e.clientX);
            delayedMouseY.set(e.clientY);

            buttonX.set(0);
            buttonY.set(0);
        };

        const handleMouseLeave = () => {
            setShowPreview(false);

            buttonX.set(0);
            buttonY.set(0);
        };

        container.addEventListener(
            "mousemove",
            handleMouseMove
        );

        container.addEventListener(
            "mouseenter",
            handleMouseEnter
        );

        container.addEventListener(
            "mouseleave",
            handleMouseLeave
        );

        return () => {
            container.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            container.removeEventListener(
                "mouseenter",
                handleMouseEnter
            );

            container.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );
        };
    }, []);

    /*
    |--------------------------------------------------------------------------
    | BUTTON FOLLOWING
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        let animationFrame;

        const updateButtonPosition = () => {
            const delayedX =
                springMouseX.get();

            const delayedY =
                springMouseY.get();

            const cursorX =
                delayedMouseX.get();

            const cursorY =
                delayedMouseY.get();

            /*
            |--------------------------------------------------------------------------
            | IMPORTANT
            |--------------------------------------------------------------------------
            |
            | We reverse the previous calculation.
            |
            | This makes the button move IN THE SAME
            | direction as the cursor.
            |
            */

            let offsetX =
                cursorX - delayedX;

            let offsetY =
                cursorY - delayedY;

            /*
            |--------------------------------------------------------------------------
            | LIMIT TO CIRCLE
            |--------------------------------------------------------------------------
            */

            const distance = Math.sqrt(
                offsetX * offsetX +
                    offsetY * offsetY
            );

            if (distance > BUTTON_RADIUS) {
                const angle = Math.atan2(
                    offsetY,
                    offsetX
                );

                offsetX =
                    Math.cos(angle) *
                    BUTTON_RADIUS;

                offsetY =
                    Math.sin(angle) *
                    BUTTON_RADIUS;
            }

            /*
            |--------------------------------------------------------------------------
            | SET BUTTON POSITION
            |--------------------------------------------------------------------------
            */

            buttonX.set(offsetX);
            buttonY.set(offsetY);

            animationFrame =
                requestAnimationFrame(
                    updateButtonPosition
                );
        };

        animationFrame =
            requestAnimationFrame(
                updateButtonPosition
            );

        return () => {
            cancelAnimationFrame(
                animationFrame
            );
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="
                relative
                mx-[6.9rem]
                border-t-[1px]
                border-gray
                border-opacity-40
                bg-transparent
                font-samirFont
            "
        >
            {/* =========================================================
                PROJECT LIST
            ========================================================= */}

            <div className="relative z-10 w-full">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        ref={(el) => {
                            projectRefs.current[index] =
                                el;
                        }}
                        className="
                            group
                            flex
                            cursor-pointer
                            items-center
                            justify-between
                            gap-1
                            border-b-[1px]
                            border-gray
                            border-opacity-50
                            px-28
                            pb-[2.8rem]
                            pt-[2.375rem]
                            transition-all
                            duration-300
                            hover:px-[6rem]
                            hover:opacity-40
                        "
                    >
                        <h3
                            className="
                                text-[3.625rem]
                                -tracking-[3px]
                                text-text
                            "
                        >
                            {project.title}
                        </h3>

                        <p className="text-sm text-text">
                            {project.tech.join(", ")}
                        </p>
                    </div>
                ))}
            </div>

            {/* =========================================================
                FLOATING PREVIEW
            ========================================================= */}

            <AnimatePresence>
                {showPreview && (
                    <motion.div
                        className="
                            pointer-events-none
                            absolute
                            z-[9999]
                            h-[400px]
                            w-[400px]
                            overflow-hidden
                        "
                        style={{
                            top:
                                mousePos.y -
                                PREVIEW_CENTER,

                            left:
                                mousePos.x -
                                PREVIEW_CENTER,
                        }}
                        initial={{
                            opacity: 0,
                            scale: 0.6,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.1,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                    >
                        {/* =================================================
                            IMAGE SCROLLER
                        ================================================= */}

                        <div
                            ref={previewScrollRef}
                            className="
                                hide-scrollbar
                                h-full
                                overflow-y-auto
                                scroll-smooth
                            "
                        >
                            {projects.map(
                                (project, index) => (
                                    <div
                                        key={project.id}
                                        ref={(el) => {
                                            sectionRefs.current[
                                                index
                                            ] = el;
                                        }}
                                        className="
                                            flex
                                            h-full
                                            w-full
                                            items-center
                                            justify-center
                                            px-[2rem]
                                            py-[6rem]
                                        "
                                        style={{
                                            backgroundColor:
                                                project.theme,
                                        }}
                                    >
                                        <motion.img
                                            src={
                                                project.image
                                            }
                                            alt={
                                                project.title
                                            }
                                            initial={{
                                                opacity: 0,
                                                x: 40,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                ease: "easeInOut",
                                            }}
                                            className="
                                                h-full
                                                w-full
                                                object-cover
                                            "
                                        />
                                    </div>
                                )
                            )}
                        </div>

                        {/* =================================================
                            VIEW BUTTON
                        ================================================= */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <motion.button
                                className="
                                    flex
                                    h-[4rem]
                                    w-[4rem]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-blue
                                    text-light
                                "
                                style={{
                                    x: springButtonX,
                                    y: springButtonY,
                                }}
                                whileHover={{
                                    scale: 1.15,
                                }}
                            >
                                View
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* =========================================================
                HIDE SCROLLBAR
            ========================================================= */}

            <style jsx global>{`
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }

                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}