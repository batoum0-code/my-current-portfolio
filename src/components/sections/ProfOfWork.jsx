import AnimatedSplitText from '../utils/AnimatedSplitText';
import MagicButton from '../utils/MagicButton';
import ProjectHoverPreview from '../utils/ProjectHoverPreview';




const ProfOfWork = () => {


    const myText = `Helping brands to stand out in the digital era.
        Together we will set the new status quo. No
        nonsense, always oth cutting edge.`;


    return <div >
        <div className=" flex pt-[10rem] justify-center  gap-[9rem] h-full pb-[5rem] ">
            <AnimatedSplitText text={myText} />
            <div className='flex flex-col gap-[5rem] '>
                <p className='text-dark-dark text-[.9rem] font-samirFont'>The combination of my passion <br />  for design, 
                code & interaction <br /> positions me in a '
                unique place in<br /> the web design world.</p>
                <div>
                    <MagicButton text={'About me'} size={'10rem'}/>
                </div>
            </div>
        </div>
        <div>
            <div className="text-start ml-[10rem] text-gray pb-9 text-sm ">Recent work</div>
        <ProjectHoverPreview/>
        </div>
    </div>;
};

export default ProfOfWork;
