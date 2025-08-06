import { useEffect, useState } from "react";


import { usePage } from "../../context/useContext";




const MenuItem = ({ label, isAnyHovered, setIsAnyHovered, mobile }) => {



    const { currentPage } = usePage();






    const compareLabelAndCurrentPage = currentPage.trim().toLowerCase() === label.trim().toLowerCase();




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
        onMouseEnter={() => {
            setIsHovered(true)
            setIsAnyHovered(true)
        }}
        onMouseLeave={() => {
            setIsHovered(false);
            setOffsetX(0);
            setOffsetY(0);
        }}
        onMouseMove={handleMouseMove}
    >
        <div
            className={`transition-transform duration-700 ease-out flex flex-row-reverse justify-start items-center gap-4`}
            style={{
                transform: `translate(${isHovered ? offsetX : 0}px, ${isHovered ? offsetY : 0}px)`,
            }}
        >
            <span className={`${mobile? "text-[1.2rem] ":"text-[3rem]"} font-normal`}>{label}</span>
            <span className={` ${(!compareLabelAndCurrentPage && !isHovered) && 'opacity-0'}
            inline-block  bg-light rounded-full ${mobile? "h-[.5rem]  w-[.5rem]":"h-[.8rem]  w-[.8rem]"}`} />
        </div>
    </div >;
};

export default MenuItem;
