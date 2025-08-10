import Hero from "../components/sections/Hero";
import ProfOfWork from "../components/sections/ProfOfWork";
import VideoShowcase from "../components/sections/VideoShowCase";
import Footer from '../components/sections/Footer';

const Home = () => {
    return <div>
        <Hero />
        <ProfOfWork/>
        <div className="hidden sm:block">
            <VideoShowcase/>
        </div>
        <Footer/>
    </div>;
};

export default Home;
