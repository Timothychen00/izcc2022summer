import React from "react";
import { ButtonS } from "../ButtonElements";

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
} from "./InfoElements";

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    heading,
    darkText,
    description,
    to,
    cyan,
    dark,
    dark2,
    buttonLabel,
    buttonEnable,
    headlinedark,
    img,
    alt,
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine headlinedark={headlinedark}>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {heading}
                                </Heading>
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    {buttonEnable ? (
                                        <ButtonS
                                            to={to}
                                            cyan={cyan ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1 : 0}
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                        >
                                            {buttonLabel}
                                        </ButtonS>
                                    ) : (
                                        <p>&nbsp;</p>
                                    )}
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap buttonEnable={buttonEnable}>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
