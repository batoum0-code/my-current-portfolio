import { useEffect, useState } from "react";
import { usePage } from "../../context/useContext";





const NavItem = ({ label }) => {


    const { currentPage } = usePage();
    

    const comparedCurrentPageAndLabel = currentPage.trim().toLowerCase() === label.trim().toLowerCase();





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

    return (
        <div
            className="inline-block align-top w-28 text-center cursor-pointer text-light"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setOffsetX(0);
                setOffsetY(0);
            }}
            onMouseMove={handleMouseMove}
        >
            <div
                className={`transition-transform duration-700 ease-out`}
                style={{
                    transform: `translate(${isHovered ? offsetX : 0}px, ${isHovered ? offsetY : 0}px)`,
                }}
            >
                <span 
                className="mb-2 font-samirFont font-medium text-[1.1rem]">{label}</span>
                {(!isHovered && !comparedCurrentPageAndLabel) ? 
                            <span className={`block   opacity-0 mt-1 h-[.4rem] w-[.4rem] bg-light rounded-full mx-auto`} /> :
                            <span className={`block  h-[.4rem] mt-1 w-[.4rem] bg-light rounded-full mx-auto`} /> 

                }
            </div>
        </div>
    );
};




export default NavItem;
