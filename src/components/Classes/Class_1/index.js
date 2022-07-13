import React from "react";
import Icon1 from "../../../images/C++.svg";
import Icon2 from "../../../images/HTML.png";
import Icon3 from "../../../images/Discord.png";
import {
    ClassesContainer,
    ClassesH1,
    ClassesWrapper,
    ClassesCard,
    ClassesIcon,
    ClassesH2,
    ClassesP,
} from "./ClassesElements";

const Classes = () => {
    return (
        <ClassesContainer id="class">
            <ClassesH1>課程簡介</ClassesH1>
            <ClassesWrapper>
                <ClassesCard
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open("https://reurl.cc/NAveNp", "_blank");
                    }}
                >
                    {" "}
                    <ClassesIcon src={Icon1} />
                    <ClassesH2>C++ 基本語法</ClassesH2>
                    <ClassesP>
                        想寫程式，卻只知道Scratch嗎? 那你一定要來聽聽我們這堂課!
                        我們會帶你從零開始建構程式的基礎，用C++寫出無所不能的程式，解決生活大小事!
                    </ClassesP>
                </ClassesCard>
                <ClassesCard
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open("https://reurl.cc/A7VNOp", "_blank");
                    }}
                >
                    <ClassesIcon src={Icon2} />
                    <ClassesH2>HTML + CSS</ClassesH2>
                    <ClassesP>
                        你知道HTML是什麼嗎?
                        你知道許多購物或遊戲網頁都是用HTML寫的嗎?
                        雖然我不是工程師，但這聽起來不錯對吧!
                        如果你對酷炫網頁很有興趣,那這堂課絕對不能錯過!
                    </ClassesP>
                </ClassesCard>
                <ClassesCard
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open("https://reurl.cc/556686", "_blank");
                    }}
                >
                    <ClassesIcon src={Icon3} />
                    <ClassesH2>Discord Bot</ClassesH2>
                    <ClassesP>
                        Discord 是一個熱門的通訊軟體，
                        這堂課會教你如何把Discord的體驗昇華到另一個層次。
                        透過編寫自動化機器人，做出事項提醒等功能。
                        種你能想像的實用功能都能一一實現。
                    </ClassesP>
                </ClassesCard>
            </ClassesWrapper>
        </ClassesContainer>
    );
};

export default Classes;
