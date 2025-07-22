import Hero from "../components/sections/Hero";
import ProfOfWork from "../components/sections/ProfOfWork";
import VideoShowcase from "../components/sections/VideoShowCase";
import SvgBorderBottom from "../components/utils/SvgBorderBottom";
import Footer from '../components/sections/Footer';

const Home = () => {
    return <div>
        <Hero />
        <ProfOfWork/>
        <VideoShowcase/>
        <Footer/>
    </div>;
};

export default Home;
