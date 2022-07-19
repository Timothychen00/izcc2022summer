import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    z-index: 1;
    background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 900px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) =>
        imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 400px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 1000px) {
        margin-left: 80px;
    }

    @media screen and (max-width: 768px) {
        padding-top: 60px;
        margin-left: 90px;
    }

    @media screen and (max-width: 480px) {
        margin-left: 40px;
    }

    @media screen and (max-width: 375px) {
        margin-left: 20px;
    }
`;

export const TopLine = styled.p`
    color: ${({ headlinedark }) => (headlinedark ? "#0d7bd4" : "#a5dbf7")};
    font-size: 30px;
    font-family: "Noto Sans TC", sans-serif;
    margin-left: -3px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-top: 16px;

    @media screen and (max-width: 768px) {
        margin-left: 5px;
        font-size: 25px;
    }

    @media screen and (max-width: 480px) {
        margin-left: -20px;
        font-size: 15px;
    }
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    margin-left: -5px;
    font-size: 55px;
    font-family: "Noto Sans TC", sans-serif;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

    @media screen and (max-width: 768px) {
        margin-left: 5px;
        font-size: 50px;
    }

    @media screen and (max-width: 480px) {
        margin-left: -20px;
        font-size: 40px;
    }
`;

export const Subtitle = styled.p`
    margin-bottom: 35px;
    font-family: "Noto Sans TC", sans-serif;
    font-size: 18px;
    line-height: 30px;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

    @media screen and (max-width: 768px) {
        margin-right: 20px;
        margin-left: 10px;
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        padding-right: 20px;
        margin-right: 20px;
        margin-left: -18px;
        font-size: 15px;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
        margin-left: 10px;
    }

    @media screen and (max-width: 480px) {
        margin-left: -15px;
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    margin-top: ${({ buttonEnable }) => (buttonEnable ? "0px" : "-100px")};
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;

    @media screen and (max-width: 1000px) {
        width: 70%;
        padding-left: 30px;
        margin: -30px 0 30px 0;
    }

    @media screen and (max-width: 768px) {
        width: 70%;
        margin-left: 55px;
    }

    @media screen and (max-width: 480px) {
        width: 90%;
        margin-left: 0px;
    }

    @media screen and (max-width: 420px) {
        width: 90%;
        margin-left: -15px;
    }

    @media screen and (max-width: 375px) {
        width: 90%;
    }
`;
