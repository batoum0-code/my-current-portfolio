// PageEntrance.jsx
import { motion, AnimatePresence } from "framer-motion";

export default function PageEntrance({ pageName, show, onComplete }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ 
            y: "100%", 
            clipPath: "ellipse(150% 40% at 50% 100%)" 
          }}
          animate={{
            y: 0,
            clipPath: "ellipse(150% 0% at 50% 0%)",
            transition: { duration: 3, ease: "easeInOut" }
          }}
          exit={{
            y: "-100%",
            clipPath: "ellipse(150% 40% at 50% 0%)",
            transition: { 
              duration: 3, 
              ease: "easeInOut",
              // Animate clipPath first, then position
              clipPath: { duration: 1.5 },
              y: { delay: 1.5, duration: 1.5 } 
            }
          }}
          className="fixed inset-0 bg-black text-white flex items-center justify-center z-[9999]"
          onAnimationComplete={onComplete}
        >
          <motion.h1 
            className="text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.8 } }}
            exit={{ opacity: 0 }}
          >
            {pageName}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}