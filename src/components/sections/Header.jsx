import { useEffect, useState } from "react";
import NavItem from "../utils/NavItem";
import brain from '../../assets/cerveau.png';
import { useNavigate  } from "react-router-dom";
import { usePage } from "../../context/useContext";
import MenuItem from '../utils/MenuItem';





const Header = () => {


    const { currentPage, menuOpen, setMenuOpen  } = usePage();





    const navigate = useNavigate ();


    const [isNameHovered, setIsNameHovered] = useState(false);

    return (
        <header className="md:p-6 pt-9 px-4 flex justify-between w-full text-light  ">
            <div className="">
                <h1
                    onClick={()=> navigate('/')}
                    className="cursor-pointer relative md:w-[9rem] w-[9rem] text-[1.1rem]"
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
            <nav className="hidden md:block">   
                <ul className="flex gap-6">
                    <li onClick={()=>navigate('/about')} className="cursor-pointer"><NavItem label='About' currentPage={currentPage}/></li>
                    <li onClick={()=>navigate('/work')} className="cursor-pointer"><NavItem label='Work' currentPage={currentPage}/></li>
                    <li onClick={()=>navigate('/contact')} className="cursor-pointer"><NavItem label='Contact' currentPage={currentPage}/></li>
                </ul>
            </nav>
            <div className="md:hidden">
                <h3 
                onClick={()=> setMenuOpen(!menuOpen)}> 
                    <MenuItem label='menu' mobile={true}/></h3>
            </div>
        </header>
    );
};

export default Header;











