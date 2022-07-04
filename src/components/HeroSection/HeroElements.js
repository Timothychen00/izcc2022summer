import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
                180deg,
                rgbd(0, 0, 0, 0.2) 0%,
                rgbd(0, 0, 0, 0.6) 100%
            ),
            linear-gradient(180deg, rgbd(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 115%;
    background: #0c0c0c;
    overflow: hidden;
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 115%;
    opacity: 0%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #0c0c0c;
    transition: all ease-in-out 2s;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    font-family: "Noto Sans TC", sans-serif;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #87d3ff;
    -webkit-text-stroke: 2px black;
    font-size: 70px;
    font-weight: 700;
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
        0px 18px 23px rgba(0, 0, 0, 0.1);
    font-family: "Noto Sans TC", sans-serif;
    text-align: center;
    letter-spacing: 8px;

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }

    @media screen and (max-width: 480px) {
        font-size: 38px;
    }
`;

export const HeroP = styled.p`
    margin-top: -10px;
    color: #d4eefa;
    opacity: 90%;
    font-size: 24px;
    font-weight: 600;
    text-shadow: 3px 3px 0 #000, 0px 0px 0 #000, 0px 0px 0 #000, 0px 0px 0 #000,
        1px 1px 0 #000;
    font-family: "Noto Sans TC", "Fira Code", sans-serif;
    letter-spacing: 4px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;