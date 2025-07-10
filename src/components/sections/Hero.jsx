import Header from "./Header";
import NewsTicker from "../utils/NewsTicker ";
import samir from '../../assets/samir.png';

const Hero = () => {
    return <div className=" bg-gray ">
        <Header />
        <main className="">
            <div className="flex  items-center h-screen relative  ">
                <div className="bg-dark flex items-center gap-3
                rounded-tr-[30rem] rounded-br-[30rem] px-6 py-4 ">
                    <h3 className="text-light font-medium">
                        located in <br /> Morocco
                    </h3>

                    <div className="bg-gray rounded-full ">
                        <img src="/public/videos/planete.gif" alt="" />
                    </div>

                </div>

                <div className=" flex bottom-0 absolute  left-[29%]">
                    <div className="w-[24rem] sticky">
                        <img className="w-full object-cover" src={samir} alt="My photo" />
                    </div>
                    {/* small description  */}
                    <div className="text-light">
                        <h2 className="absolute top-[9rem] right-[-27rem] flex flex-col gap-11">
                            <span className="">
                                <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 14 14"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g stroke="#FFFFFF" strokeWidth="1.5" transform="rotate(90 7 7)">
                                            <polyline points="2.76923077 0 12 0 12 9.23076923"></polyline>
                                            <line x1="12" y1="0" x2="0" y2="12"></line>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                            <span className="text-[1.7rem]  font-medium space-y-9 pt-11">
                                Full Stack Dev & Freelancer

                                <br />

                                React, Node, Wordpress
                            </span>

                        </h2>
                    </div>
                </div>
                <div className="absolute bottom-20 left-0 right-0 bg-transparent">
                    <NewsTicker />
                </div>

            </div>

        </main>

    </div>;
};

export default Hero;
