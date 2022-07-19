import styled from "styled-components";

export const CaptionContainer = styled.div`
    margin-top: -300px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 900px) {
        height: 1200px;
    }
`;

export const CaptionH1 = styled.h1`
    font-size: 3.5rem;
    letter-spacing: 2px;
    font-family: "Noto Sans TC", sans-serif;
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
        0px 18px 23px rgba(0, 0, 0, 0.1);
    color: #a5dbf7;
    margin-bottom: 50px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const CaptionWrapper = styled.div`
    display: inline-flex;
    margin-right: 33px;
    gap: 200px;

    @media screen and (max-width: 900px) {
        display: grid;
        grid-gap: 70px;
        grid-template-columns: 1fr;
    }
`;

export const CaptionUl = styled.ul`
    width: 400px;
    color: #fff;
    text-decoration: none;
    list-style-type: none;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 450px) {
        width: 300px;
    }
`;

export const CaptionTitle = styled.li`
    font-size: 1.5em;
    font-weight: bold;
    padding-bottom: 15px;
    font-family: "Noto Sans TC", sans-serif;
    color: #fff;
    border-bottom: 1px solid #fff;

    @media screen and (max-width: 450px) {
        font-size: 1.3em;
        margin-right: 10px;
        margin-left: 5px;
    }
`;

export const CaptionLI = styled.li`
    color: #fff;
    font-size: 1.2em;
    font-family: "Noto Sans TC", sans-serif;
    padding-top: 20px;

    @media screen and (max-width: 450px) {
        font-size: 1em;
    }
`;

export const CaptionDescription = styled.span`
    color: #b3472e;
    display: block;
    top: 10px;
    margin-bottom: 5px;
    font-size: 0.9em;
    position: relative;
`;

export const CaptionMoney = styled.li`
    color: #a5dbf7;
    font-weight: bold;
    font-size: 1.2em;
    font-family: "Noto Sans TC", sans-serif;
    padding-top: 20px;

    @media screen and (max-width: 450px) {
        font-size: 1em;
    }
`;
