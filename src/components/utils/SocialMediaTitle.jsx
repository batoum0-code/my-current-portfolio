import { useState } from "react";







const SocialMediaTitle = ({ label, size }) => {

    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const maxOffset = 10;

        const offsetX = Math.max(-maxOffset, Math.min(maxOffset, x - centerX));
        const offsetY = Math.max(-maxOffset, Math.min(maxOffset, y - centerY));

        setOffsetX(offsetX);
        setOffsetY(offsetY);
    };


    return <div
        className="inline-block align-top  text-center cursor-pointer text-light"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
            setIsHovered(false);
            setOffsetX(0);
            setOffsetY(0);
        }}
        onMouseMove={handleMouseMove}
    >
        <div
            className={`transition-transform duration-700 ease-out flex flex-col justify-start items-center gap-4`}
            style={{
                transform: `translate(${isHovered ? offsetX : 0}px, ${isHovered ? offsetY : 0}px)`,
            }}
        >
            <span className={`relative text-[.77rem] ${ size ? `md:text-[${size}]` : "md:text-[.9rem]"} pb-1 tracking-widest md:tracking-normal
            leading-none inline-block text-light md:font-medium`}>
                {label}

                {/* Animated line under label */}
                <span
                    className="absolute left-1/2 bottom-0 h-[1.1px] bg-gray transition-all duration-500 ease-in-out origin-center"
                    style={{
                        width: isHovered ? "100%" : "0%",
                        transform: "translateX(-50%)",
                    }}
                />
            </span>
        </div>
    </div>;
};

export default SocialMediaTitle;
