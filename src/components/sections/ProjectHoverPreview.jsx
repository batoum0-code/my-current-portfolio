// ... other imports
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import amelkis from '../../assets/amelkis.webp';
import comgolf from '../../assets/com&golf.webp';
import img3 from "../../assets/5.png";
import img4 from "../../assets/q1.webp";
import cherti from '../../assets/cherti.webp';

import MagicButton from '../utils/MagicButton';



const projects = [
    {
        id: 1,
        title: "Com & Golf",
        tech: ["Wordpress","Elementor"],
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
        tech: ["Wordpress", "React js", "Express js", " Strapi"],
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
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [showPreview, setShowPreview] = useState(false);

    // Scroll preview to active project image
    const scrollToImage = (index) => {
        if (sectionRefs.current[index] && previewScrollRef.current) {
            previewScrollRef.current.scrollTo({
                top: sectionRefs.current[index].offsetTop,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePos({ x, y });

            for (let i = 0; i < projectRefs.current.length; i++) {
                const ref = projectRefs.current[i];
                if (ref) {
                    const projectRect = ref.getBoundingClientRect();
                    const top = projectRect.top - rect.top;
                    const bottom = projectRect.bottom - rect.top;
                    if (y >= top && y <= bottom) {
                        if (activeIndex !== i) {
                            setActiveIndex(i);
                            scrollToImage(i);
                        }
                        break;
                    }
                }
            }
        };

        const el = containerRef.current;
        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseenter", () => setShowPreview(true));
        el.addEventListener("mouseleave", () => setShowPreview(false));

        return () => {

            el.removeEventListener("mouseenter", () => setShowPreview(true));
            el.removeEventListener("mouseleave", () => setShowPreview(false));
        };
    }, [activeIndex]);

    return (
        <div
            ref={containerRef}
            className="relative bg-[rgba(0, 0, 0, 0)] font-samirFont mx-[6.9rem] border-t-[1px] border-gray border-opacity-40"
        >
            <div className="w-full relative z-10">
                {projects.map((project, index) => (
                    <div

                        key={project.id}
                        ref={(el) => (projectRefs.current[index] = el)}
                        className=" flex items-center justify-between gap-1  group hover:opacity-40
                            cursor-pointer transition-all duration-300 pt-[2.375rem] pb-[2.8rem] border-b-[1px] 
                            border-gray border-opacity-50 px-28 hover:px-[6rem]"
                    >
                        <h3 className={`text-[3.625rem]  text-text   -tracking-[3px]`}>
                            {project.title}
                        </h3>
                        <p className="text-sm text-text">{project.tech.join(", ")}</p>
                    </div>
                ))}
            </div>

            {/* Floating Scrollable Preview */}
            <AnimatePresence>
                {showPreview && (
                    <motion.div
                        className="pointer-events-none absolute z-[9999] w-[400px] h-[400px]   overflow-x-hidden"
                        style={{
                            top: mousePos.y - 190,
                            left: mousePos.x - 190,
                        }}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.1 }}
                        transition={{
                            duration: 2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {/* Scrollable Image Container */}
                        <div

                            ref={previewScrollRef}
                            className="overflow-y-auto h-full scroll-smooth hide-scrollbar"
                        >
                            {projects.map((project, index) => (
                                <div


                                    key={index}
                                    ref={(el) => (sectionRefs.current[index] = el)}
                                    className={`h-full w-full flex items-center justify-center px-[2rem] py-[6rem] `}
                                    style={{ backgroundColor: project.theme }}
                                >

                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={project.image}
                                            src={project.image}
                                            initial={{ opacity: 0, x: 40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -40 }}
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                            className="w-full h-full "
                                        />
                                    </AnimatePresence>

                                </div>
                            ))}

                        </div>
                        <div

                            className="absolute inset-0 flex items-center justify-center">

                            <MagicButton text={'View'} size={'4.4rem'} rounded={'full'} bg={'blue'} />
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

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