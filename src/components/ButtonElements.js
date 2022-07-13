import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const ButtonR = styled(LinkR)`
    border-radius: 50px;
    background: ${({ cyan }) => (cyan ? "#a5dbf7" : "#010606")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    color: ${({ dark }) => (dark ? "#010606" : "#fff")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    font-weight: 600;
    font-family: "Noto Sans TC", sans-serif;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ cyan }) => (cyan ? "#fff" : "#a5dbf7")};
    }
`;

export const ButtonS = styled(LinkS)`
    border-radius: 50px;
    background: ${({ cyan }) => (cyan ? "#a5dbf7" : "#010606")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    color: ${({ dark }) => (dark ? "#010606" : "#fff")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    font-weight: 600;
    font-family: "Noto Sans TC", sans-serif;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ cyan }) => (cyan ? "#fff" : "#a5dbf7")};
    }
`;
