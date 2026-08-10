import NewsTicker from "../utils/NewsTicker ";
import samir from '../../assets/samir.png';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "./Header";
import { FiArrowDownRight } from "react-icons/fi";



const Hero = () => {




    const boxRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            boxRef.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
    }, []);




    return <div className=" bg-gray ">

        <Header pageColor={'bg-gray'} />

        <main className="w-full">

            <div className="flex  items-center h-screen  relative">
                <div className="bg-dark hidden md:flex  items-center gap-3  absolute top-[29%]
                rounded-tr-[30rem] rounded-br-[30rem] px-6 py-5 ">
                    <h3 className="text-light font-medium pl-[16px] pr-[3rem] leading-5">
                        Located <br/> in The<br /> Morocco
                    </h3>

                    <div className="bg-gray rounded-full p-[28px]">
                        
                        {/* <img src="/public/videos/planete.gif" alt="" /> */}
                    </div>

                </div>

                <div className=" flex bottom-0  absolute left-[1%] md:left-[25%]">
                    <div
                        ref={boxRef}
                        className=" w-[24rem] md:w-[37rem]   sticky">
                        <img className="w-full object-cover" src={samir} alt="My photo" />
                    </div>


                    {/*  description  */}
                    <div className="text-light">
                        <h2 className="absolute top-[24rem] md:top-[14rem] left-3 md:left-auto md:right-[-9rem] 
                        lg:right-[-21rem] xl:right-[-24.5rem] flex flex-col md:gap-5 ">
                            <span className="text-[1rem] pb-2 md:text-[1.8rem] ">
                                <FiArrowDownRight />
                            </span>
                            <span className="lg:text-[1.7rem] md:text-[1rem] text-[1.2rem] font-medium  md:font-medium md:space-y-9 md:pt-1">
                                Freelance
                                <br />
                                React, Node, Wordpress
                            </span>

                        </h2>


                    </div>
                </div>

                <div className="absolute md:bottom-40 left-0 right-0 bg-transparent">
                    <NewsTicker />
                </div>


                <div className="sm:hidden absolute top-[31rem]  right-3 rotate-12">
                    <img src="/public/videos/planete.gif" alt="" />
                </div>

            </div>

        </main>

    </div>;
};

export default Hero;
