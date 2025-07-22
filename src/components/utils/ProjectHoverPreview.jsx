import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/cerveau.png";
import img3 from "../../assets/5.png";
import img4 from "../../assets/q1.webp";

const projects = [
    {
        id: 1,
        title: "Riad BERBERE",
        tech: ["React", "Node.js", "MongoDB"],
        image: img1,
        theme: "bg-lightGray",
    },
    {
        id: 2,
        title: "AMELKIS RESOURTS",
        tech: ["Next.js", "Tailwind", "NestJS"],
        image: img4,
        theme: "bg-gray",
    },
    {
        id: 3,
        title: "WEDEDING SIWO",
        tech: ["Vue.js", "Firebase"],
        image: img3,
        theme: "bg-dark",
    },
];

// Color mapping for smooth background transitions
const colorMap = {
    bgLightGray: "#d3d3d3",
    bgGray: "#808080",
    bgDark: "#000000",
};

export default function ProjectHoverWithSlide() {
    const containerRef = useRef(null);
    const projectRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showPreview, setShowPreview] = useState(false);

    // Track mouse position to determine active project
    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = containerRef.current.getBoundingClientRect();
            const y = e.clientY - rect.top;

            // Check which project is hovered
            for (let i = 0; i < projectRefs.current.length; i++) {
                const ref = projectRefs.current[i];
                if (ref) {
                    const projectRect = ref.getBoundingClientRect();
                    const top = projectRect.top - rect.top;
                    const bottom = projectRect.bottom - rect.top;

                    if (y >= top && y <= bottom && activeIndex !== i) {
                        setActiveIndex(i);
                        break;
                    }
                }
            }
        };

        const handleMouseEnter = () => setShowPreview(true);
        const handleMouseLeave = () => setShowPreview(false);

        const el = containerRef.current;
        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseenter", handleMouseEnter);
            el.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [activeIndex]);

    return (
        <div
            ref={containerRef}
            className="relative bg-light pb-[5rem] mx-[10rem] border-t-[1px] border-gray"
        >
            {/* Project List */}
            <div className="w-full relative z-10">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        ref={(el) => (projectRefs.current[index] = el)}
                        className="hover:bg-gray-50 flex items-center justify-between gap-1 
              cursor-pointer transition-all duration-300 py-14 border-b-[1px] 
              border-gray px-6 hover:px-1"
                        onMouseEnter={() => setActiveIndex(index)}
                    >
                        <h3 className="text-5xl font-semibold text-text">{project.title}</h3>
                        <p className="text-lg text-text">{project.tech.join(", ")}</p>
                    </div>
                ))}
            </div>

            {/* Fixed Preview Container */}
            <AnimatePresence>
                {showPreview && (
                    <motion.div
                        className="fixed top-1/2 right-[10%] -translate-y-1/2 pointer-events-none z-[9999] 
              w-[375px] h-[375px] overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <motion.div
                            className={`w-full h-full ${projects[activeIndex].theme}`}
                            initial={{ backgroundColor: colorMap[projects[0].theme] }}
                            animate={{ backgroundColor: colorMap[projects[activeIndex].theme] }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Vertical Slider Container */}
                            <motion.div
                                className="w-full h-full relative"
                                animate={{ y: -activeIndex * 375 }}
                                transition={{
                                    type: "spring",
                                    damping: 25,
                                    stiffness: 150
                                }}
                            >
                                {projects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="w-full h-[375px] flex items-center justify-center relative"
                                    >
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover absolute inset-0"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.4 }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <button className="text-light bg-blue rounded-full h-16 w-16 text-lg font-samirFont z-10">
                                                View
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}