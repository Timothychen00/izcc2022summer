import React from "react";
import {
    CaptionContainer,
    CaptionH1,
    CaptionWrapper,
    CaptionUl,
    CaptionTitle,
    CaptionLI,
    CaptionDescription,
    CaptionMoney,
} from "./CaptionElements";

const Caption = () => {
    return (
        <CaptionContainer id="caption">
            <CaptionH1>報名資訊</CaptionH1>
            <CaptionWrapper>
                <CaptionUl>
                    <CaptionTitle>報名方式</CaptionTitle>
                    <CaptionLI>7/18 ～ 7/29 &thinsp;在網站進行報名</CaptionLI>
                    <CaptionLI>
                        7/29 &thinsp;公布正備取名單（正取40名）
                    </CaptionLI>
                    <CaptionLI>7/29 ～ 8/2 &thinsp;正取繳費時間</CaptionLI>
                    <CaptionLI>7/29 ～ 8/2 &thinsp;正取繳費時間</CaptionLI>
                </CaptionUl>
                <CaptionUl>
                    <CaptionTitle>繳費須知</CaptionTitle>
                    <CaptionLI>繳費方式 : &thinsp;採用線上匯款</CaptionLI>
                    <CaptionDescription>
                        *（請在匯款時填備註報名人姓名、或使用email向主辦單位提供轉帳後5碼和姓名確認轉帳。否則超過時限將以報名不成功處理，並進行轉帳退費）
                    </CaptionDescription>
                    <CaptionLI>午餐退費 : &thinsp;一天 100 元</CaptionLI>
                    <CaptionMoney>活動費用 : &thinsp;2500 元</CaptionMoney>
                </CaptionUl>
            </CaptionWrapper>
        </CaptionContainer>
    );
};

export default Caption;
