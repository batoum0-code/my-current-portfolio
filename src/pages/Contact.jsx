// import components 
import MagicButton from "../components/utils/MagicButton";
import Header from "../components/sections/Header";
import SocialMediaTitle from '../components/utils/SocialMediaTitle';


// import icons
import { FiArrowDownRight } from "react-icons/fi";

// import tools hooks ... 
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';


import img from '../../public/favicon.png';



const now = new Date();

const time = new Intl.DateTimeFormat('en-UK', {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
  timeZoneName: 'short',
}).format(now);




const Contact = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [comapany, setCompany] = useState();
  const [message, setMessage] = useState();






  const borderRef = useRef();



  // Watch scroll progress relative to the MagicButton
  const { scrollYProgress } = useScroll({
    target: borderRef,
    offset: ['start end', 'end start'],
  });



  // Animate Y position from 100px to -20px based on scroll
  const y = useTransform(scrollYProgress, [-10, -30], [60, 10]);






  return <div className="bg-dark text-light ">
    <Header />
    <div className="md:px-[220px] pt-[105px]">
      <div className="flex gap-[6rem]">

        {/* contact form (right side) */}
        <div className="flex flex-col items-start justify-start pb-[13rem]
        leading-[3.3rem] md:leading-[4.4rem] md:tracking-[.2rem] w-3/4">


          <div className="pb-[11rem] text-light text-[2.3rem] md:text-[5rem]  tracking-[-2px] font-samirFont">
            <h1 className="text-light text-[2.5rem] md:text-[5rem] flex items-center  gap-6 font-samirFont ">
              Let's start a
            </h1>
            <h1 className="text-light text-[2.5rem] md:text-[5rem] pt-[1.7rem] font-samirFont" >
              project together
            </h1>
          </div>

          <form action="" className="w-full font-samirFont">
            <ol className="w-full pb-[10rem]">
              <li className="flex flex-col w-full">
                <div className=" bg-gray w-full h-[1.12px] opacity-40 mb-[1.5rem] rounded-full"></div>

                <div className="flex  gap-[2.3rem] ">
                  <div className="text-gray font-mono font-semibold  text-[12.768px] -tracking-[1px]">01</div>
                  <div className="flex flex-col py-6">
                    <label htmlFor="name" className=" font-[450] text-[21.28px] -tracking-[.3px] leading-tight">
                      What's your name?
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Samir Batoum*"
                      className="text-gray  text-[1.1rem]  mt-0 
                      bg-transparent border-none outline-none -tracking-[.3px]  focus:text-light"
                    />

                  </div>
                </div>
              </li>

              <li className="flex flex-col w-full">
                <div className=" bg-gray w-full h-[1.12px] opacity-40 mb-[1.5rem] rounded-full"></div>

                <div className="flex gap-[2.3rem] mb-[1.25rem]">
                  <div className="text-gray font-semibold text-[12.768px] -tracking-[1px]">02</div>
                  <div className="flex flex-col">
                    <label htmlFor="name" className=" font-semibold  -tracking-[.3px]  text-[21.28px] ">
                      What's your email?
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="batoumsamir@gmail.com *"
                      className="text-gray  text-[1.1rem]  leading-tight
                      bg-transparent border-none outline-none -tracking-[.3px]  focus:text-light"
                    />

                  </div>
                </div>
              </li>

              <li className="flex flex-col w-full">
                <div className=" bg-gray w-full h-[1.12px] opacity-40 my-[1.5rem] rounded-full"></div>

                <div className="flex gap-[2.3rem]  mb-[1.25rem]">
                  <div className="text-gray font-semibold text-[12.768px] -tracking-[1px]">03</div>
                  <div className="flex flex-col">
                    <label htmlFor="name" className=" font-[450]  -tracking-[.3px] text-[21.28px] ">
                      What's the name of your organization?
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Samir & Tamazirt®"
                      className="text-gray  text-[1.1rem]  mt-0 leading-tight
                      bg-transparent border-none outline-none -tracking-[.3px]  focus:text-light"
                    />

                  </div>
                </div>
              </li>

              <li className="flex flex-col w-full mb-[5.9rem]">
                <div className=" bg-gray w-full h-[1.12px] opacity-40 my-[1.5rem]"></div>

                <div className="flex gap-[2.3rem] ">
                  <div className="text-gray font-semibold text-[12.768px] -tracking-[1px] opacity-70">04</div>
                  <div className="flex flex-col ">
                    <label htmlFor="name" className=" font-[450] text-[21.28px]  -tracking-[.3px] ">
                      Your message
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Hello Samir, can you help me with ..."
                      className="text-gray  text-[1.1rem]  mt-0 w-full leading-tight
                      bg-transparent border-none outline-none -tracking-[.3px]  focus:text-light"
                    />

                  </div>
                </div>
              </li>

            </ol>





            {/* Start Send Button  */}

            <div className='relative'>
              <div className='absolute z-20 right-20 -top-20'>

                <motion.div
                  ref={borderRef}
                  style={{ y }}>

                  <div
                    className='hidden md:block'
                    onClick={() => navigate('/contact')}>
                    <MagicButton text={'Send it!'} size={'10rem'} bg={'blue'} hoverBg={'deepb'} rounded={'full'} />
                  </div>
                  <div
                    className='md:hidden'
                    onClick={() => navigate('/contact')}>
                    <MagicButton text={'Send it!'} size={'8rem'} bg={'blue'} hoverBg={'deepb'} rounded={'full'} />
                  </div>

                </motion.div>

              </div>
              <div className="absolute  z-10 bg-gray w-full h-[1.8px] opacity-20 rounded-full"></div>
            </div>

            {/* End send button  */}

          </form>
        </div>




        {/* contact info (left side) */}
        <div className="w-1/4 pt-[5rem] font-samirFont">
          <div className="flex flex-col">

            <img src={img} alt="" className="h-[5.5rem] w-[5.5rem] rounded-full" />

            <div className="pt-[3rem] ">
              <FiArrowDownRight className="text-[1.4rem] " />
            </div>
            <h2 className="text-[.6rem] md:text-[.7rem] -tracking-[.05rem] uppercase text-gray  font-bold pt-[4.6rem] pb-[.88rem]">
              Contact Details
            </h2>
            <div className=" flex flex-col items-start gap-[.6rem]">
              <SocialMediaTitle label={'batoumsamir0@gmail.com'} size={'1rem'} />
              <SocialMediaTitle label={'+212 6 04 36 04 52'} size={'1rem'} />
            </div>


            <h2 className="text-[.6rem] md:text-[.7rem] -tracking-[.05rem] uppercase text-gray  font-bold pt-[4.6rem] pb-[.88rem]">
              About Details
            </h2>
            <div className="leading-[2rem] text-light">
              <span>Full-Stack Dev</span><br />
              <span>Tamazirt Coding.</span><br />
              <span>Location: Marrakech, Morocco</span>
            </div>

            <h2 className="text-[.6rem] md:text-[.7rem] -tracking-[.05rem] uppercase text-gray  font-bold pt-[4.6rem] pb-[.88rem]">
              Socials
            </h2>
            <div className=" flex flex-col items-start gap-[.6rem]">
              <SocialMediaTitle label={'Youtube'} size={'1rem'} />
              <SocialMediaTitle label={'Linkedin'} size={'1rem'} />
              <SocialMediaTitle label={'Github'} size={'1rem'} />
              <SocialMediaTitle label={'Whatsapp'} size={'1rem'} />
            </div>


          </div>
        </div>


      </div>
    </div>







    {/* contact footer extract from global footer  */}
    <div className='bg-dark md:py-[1rem] px-[1rem] md:px-[2rem] text-light'>
      <div className="flex flex-col-reverse md:flex-row  justify-between items-center">
        <div className="flex gap-[12rem] pb-8 md:pb-0 md:gap-[2rem]">
          <div className='flex flex-col gap-2 justify-start'>
            <span className='uppercase md:text-[.7rem] text-[.6rem] tracking-widest font-extrabold text-gray font-samirFont'>version</span>
            <span className='text-[11px] font-bold font-samirFont'>2022 © Edition</span>
          </div>
          <div className='flex flex-col gap-2 justify-start'>
            <span className="uppercase md:text-[.7rem] text-[.6rem] tracking-widest font-extrabold text-gray">
              local time
            </span>
            <span className='text-[11px] font-bold font-samirFont uppercase'>
              {time}
            </span>
          </div>
        </div>

        {/* smooth line under */}
        <div className="h-[.1px] bg-borderSolid opacity-40 w-full md:hidden mt-[.7rem] mb-[1.6rem]"></div>

        <div className="">
          <span className='uppercase md:text-[.7rem] text-[.6rem] tracking-widest font-extrabold text-gray'>socials</span>
          <div>
            <ul className=" pt-3 flex gap-6">
              <li className="cursor-pointer"><SocialMediaTitle label='Youtube' /></li>
              <a href="https://www.linkedin.com/in/samir-batoum-3948b72a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <li className="cursor-pointer"><SocialMediaTitle label='Linkedin' /></li></a>
              <a href="https://github.com/batoum0-code" target="_blank" rel="noopener noreferrer">
                <li className="cursor-pointer"><SocialMediaTitle label='Github' /></li>
              </a>
              <li className="cursor-pointer"><SocialMediaTitle label='Whatsapp' /></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>;
};

export default Contact;





