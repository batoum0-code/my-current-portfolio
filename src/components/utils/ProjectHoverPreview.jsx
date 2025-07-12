import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import img1 from "../../assets/cerveau.png";
import img3 from "../../assets/5.png";
import img4 from '../../assets/q1.webp';

const projects = [
    {
        id: 1,
        title: "Riad BERBERE",
        tech: ["React", "Node.js", "MongoDB"],
        image: img1,
        them:'lightGray'
    },
    {
        id: 2,
        title: "AMELKIS RESOURTS",
        tech: ["Next.js", "Tailwind", "NestJS"],
        image: img4,
        them:'gray'
    },
    {
        id: 3,
        title: "WEDEDING SIWO",
        tech: ["Vue.js", "Firebase"],
        image: img3,
        them:'dark'
    },
];

export default function ProjectHoverWithSlide() {
    const containerRef = useRef(null);
    const projectRefs = useRef([]);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHoveringProject, setIsHoveringProject] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePos({ x, y });

            let found = false;
            for (let i = 0; i < projectRefs.current.length; i++) {
                const ref = projectRefs.current[i];
                if (ref) {
                    const projectRect = ref.getBoundingClientRect();
                    const top = projectRect.top - rect.top;
                    const bottom = projectRect.bottom - rect.top;
                    if (y >= top && y <= bottom) {
                        const project = projects[i];
                        if (hoveredProject?.id !== project.id) {
                            setHoveredProject(project);
                        }
                        found = true;
                        break;
                    }
                }
            }

            if (!found) {
                setHoveredProject(null);
                setIsHoveringProject(false);
            } else {
                setIsHoveringProject(true);
            }
        };

        const handleMouseLeave = () => {
            setHoveredProject(null);
            setIsHoveringProject(false);
        };

        const el = containerRef.current;
        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [hoveredProject]);

    return (
        <div
            ref={containerRef}
            className="relative  bg-light pb-[5rem] mx-[10rem] border-t-[1px] border-gray"
        >
            <div className="w-full  relative z-10">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        ref={(el) => (projectRefs.current[index] = el)}
                        className="  hover:bg-gray-50 flex items-center justify-between gap-1 hover:opacity-70 
                        cursor-pointer transition-all duration-300 py-14 border-b-[1px] border-gray px-6 hover:px-1"
                    >
                        <h3 className="text-5xl font-semibold text-dark-dark">{project.title}</h3>
                        <p className="text-lg text-dark ">
                            {project.tech.join(", ")}
                        </p>
                    </div>
                ))}
            </div>

            {/* Floating Preview */}
            <AnimatePresence>
                {hoveredProject && isHoveringProject && (
                    <motion.div
                        key={hoveredProject.id}
                        className={`pointer-events-none absolute z-[9999] w-[375px] h-[375px] py-[6rem] px-[2rem] bg-${hoveredProject.them}`}
                        style={{
                            top: mousePos.y - 190,
                            left: mousePos.x - 190,
                        }}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.1 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1], // cubic-bezier easeOutBack
                        }}
                    >
                        <div className="relative w-full h-full overflow-hidden ">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={hoveredProject.image}
                                    src={hoveredProject.image}
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -40 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="w-full h-full  absolute top-0 left-0 rounded-sm"
                                />
                            </AnimatePresence>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="text-light bg-blue rounded-full h-16 w-16 text-lg font-samirFont">
                                    View
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    );
}
