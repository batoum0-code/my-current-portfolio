import { motion } from "framer-motion";

const AnimatedSplitText = ({ text }) => {
    const lines = text.split('\n');

    return (
        <div className="space-y-1">
            {lines.map((line, index) => (
                <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    viewport={{ once: true, amount: 1 }}
                    className="text-dark lg:text-3xl text-[1.4rem] font-medium leading-[1.4rem]"
                >
                    {line}
                </motion.p>
            ))}
        </div>
    );
};

export default AnimatedSplitText;
