import { motion, AnimatePresence } from "framer-motion";


export default function PageEntrance({ pageName, show, onComplete }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            y: "0%",
            clipPath: "ellipse(100% 100% at 50% 50%)",
          }}
          animate={{
            y: ["130%", "0%", "0%", "-100%"], // down → up → pause → leave up
            clipPath: [
              
              "ellipse(50% 10% at 60% 60%)", 
                "ellipse(120% 100% at 50% 50%)",   
              "ellipse(100% 100% at 60% 50%)",
              "ellipse(90% 90% at 50% 0%)",
              
            ],
            transition: {
              duration: 3.4, // total duration
              times: [0, 0.475, 0.925, 1], // split for entrance/pause/exit
              ease: "easeInOut"
            }
          }}
          className="fixed left-0 top-0 w-full h-screen bg-dark
                    text-white flex items-center justify-center z-[9999]"
          onAnimationComplete={() => {
            if (onComplete) onComplete();
          }}
        >
          <h1 className="text-4xl font-semibold uppercase">{pageName}</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
