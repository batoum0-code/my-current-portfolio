import { useState } from "react";
import NavItem from "../utils/NavItem";
import brain from '../../assets/cerveau.png';





const Header = () => {


    const [isNameHovered, setIsNameHovered] = useState(false);

    return (
        <header className="p-6 flex justify-between w-full text-light  ">
            <div className="">
                <h1
                    className="cursor-pointer relative w-[9rem]"
                    onMouseEnter={() => setIsNameHovered(true)}
                    onMouseLeave={() => setIsNameHovered(false)}
                >
                <span>
                    <img  className={`max-w-6 inline-block pr-1 transition-all duration-700 ${isNameHovered ? "rotate-180 ": ""} `} src={brain} alt="" />
                </span>
                    <span
                        className={`absolute  font-samirFont transition-all duration-700 ease-in-out ${isNameHovered ? "-translate-x-full opacity-0 text-gray" : "translate-x-0 opacity-100"
                            } `}
                    >
                        Code by Samir
                    </span>
                    <span
                        className={`absolute font-samirFont transition-all duration-700 ease-in-out ${isNameHovered ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 text-gray"
                            }`}
                    >
                        Samir Batoum
                    </span>
                </h1>
            </div>
            <nav>   
                <ul className="flex gap-6">
                    <li className="cursor-pointer"><NavItem label='About'/></li>
                    <li className="cursor-pointer"><NavItem label='Work'/></li>
                    <li className="cursor-pointer"><NavItem label='Contact'/></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;











