import React, { useState } from "react";
import Caption from "../components/Caption";
import Class1 from "../components/Classes/Class_1";
import Class2 from "../components/Classes/Class_2";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Schedule from "../components/Schedule";
import Sidebar from "../components/Sidebar";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <Class1 />
            <Class2 />
            <Schedule />
            <Caption />
            <Footer />
        </>
    );
};

export default Home;
