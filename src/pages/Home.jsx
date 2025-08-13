import { useState, useEffect } from "react";

import Hero from "../components/sections/Hero";
import ProfOfWork from "../components/sections/ProfOfWork";
import VideoShowcase from "../components/sections/VideoShowCase";
import Footer from '../components/sections/Footer';
import PageEntrance from "../components/utils/PageEntrance";

const Home = () => {

    const [showOverlay, setShowOverlay] = useState(true);
    const [entranceComplete, setEntranceComplete] = useState(false);

    const handleAnimationComplete = () => {
        if (showOverlay) {
            // Entrance completed - start pause timer
            setTimeout(() => {
                setShowOverlay(false); // Triggers exit after 1s pause
            }, 3000);
            setEntranceComplete(true);
        }
    };



    return <div>

        <PageEntrance
            show={showOverlay}
            onComplete={handleAnimationComplete}
            pageName="Home"
        />

        {
            !showOverlay && <>
                <Hero />
                <ProfOfWork />
                <div className="hidden sm:block">
                    <VideoShowcase />
                </div>
                <Footer /></>
        }
    </div>;
};

export default Home;
