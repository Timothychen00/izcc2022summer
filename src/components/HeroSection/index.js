import React, { useState } from "react";
import HeroImage from "../../images/Hero.png";
import { ButtonR } from "../ButtonElements";
import {
    HeroContainer,
    HeroBg,
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from "./HeroElements";


const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg id="hero" src={HeroImage} />
            </HeroBg>
            <HeroContent>
                <HeroH1>楓落景畔遇建成</HeroH1>
                <HeroP>2022 四校聯合資訊營</HeroP>
                <HeroBtnWrapper>
                    <ButtonR
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        cyan='true'
                        dark='true'
                        fontBig='true'
                    >
                        報名表單 {hover ? <ArrowForward /> : <ArrowRight />}
                    </ButtonR>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
