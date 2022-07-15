import React from "react";
import Icon1 from "../../../images/Quantum.png";
import Icon2 from "../../../images/Algorithm.png";
import Icon3 from "../../../images/Security.jpg";
import {
    ClassesContainer,
    ClassesWrapper,
    ClassesCard,
    ClassesIcon,
    ClassesH2,
    ClassesP,
} from "./ClassesElements";

const Classes = () => {
    return (
        <ClassesContainer id="classes">
            <ClassesWrapper>
                <ClassesCard
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open("https://reurl.cc/Xjo5Rj", "_blank");
                    }}
                >
                    <ClassesIcon src={Icon1} />
                    <ClassesH2>量子</ClassesH2>
                    <ClassesP>
                        想要學現在討論度十分高的量子電腦嗎?想要學寫量子電腦的程式?想要學與普通電腦完全不同的系統嗎?
                        這些聽起來很難的東西其實比你想像中簡單，而此堂課便會帶你深入其中。
                    </ClassesP>
                </ClassesCard>
                <ClassesCard
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open("https://reurl.cc/moVVlA", "_blank");
                    }}
                >
                    <ClassesIcon src={Icon2} />
                    <ClassesH2>基礎算法</ClassesH2>
                    <ClassesP>
                        演算法是把程式提升到另一層次的關鍵，透過好的演算法，能讓你的程式跑的更有效率。不管是競賽，公司面試等，演算法都是重要的一環。此堂課便會帶你了解基礎演算法思維。
                    </ClassesP>
                </ClassesCard>
                <ClassesCard
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open("https://reurl.cc/2ZX86m", "_blank");
                    }}
                >
                    <ClassesIcon src={Icon3} />
                    <ClassesH2>資安 + 網路架構</ClassesH2>
                    <ClassesP>
                        這次課程將帶你踏入資安及網路的領域。
                        除了介紹逆向工程、隱寫術中的基礎技術。
                        也會帶大家完整認識網路架構中的封包、請求等知識，並學會使用
                        postman、ngnix 等工具。
                    </ClassesP>
                </ClassesCard>
            </ClassesWrapper>
        </ClassesContainer>
    );
};

export default Classes;
