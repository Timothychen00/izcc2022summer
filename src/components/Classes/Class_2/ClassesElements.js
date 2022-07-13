import styled from "styled-components";

export const ClassesContainer = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ClassesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
        margin-top: 50px;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
        margin-top: -400px;
    }
`;

export const ClassesCard = styled.div`
    background: #fff;
    max-height: 260px;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    font-family: "Noto Sans TC", sans-serif;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ClassesIcon = styled.img`
    height: 100px;
    width: 100px;
    margin-bottom: 20px;
`;

export const ClassesH2 = styled.h2`
    font-size: 1.5rem;
    font-family: "Noto Sans TC", sans-serif;
    margin-top: -1px;
    margin-bottom: -10px;
    @media screen and (max-width: 768px) {
        margin-top: 15px;
    }

    @media screen and (max-width: 480px) {
        margin-top: 0px;
    }
`;

export const ClassesP = styled.p`
    font-size: 16px;
    font-family: "Noto Sans TC", sans-serif;
    text-align: center;
`;
