import styled from "styled-components";

export const ScheduleContainer = styled.div`
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 480px) {
        margin-top: -400px;
    }
`;

export const ScheduleWrapper = styled.div`
    display: flex;
    z-index: 1;
    white-space: nowrap;
    max-height: 900px;
    max-width: 930px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 1100px) {
        display: block;
        max-width: 700px;
        overflow-x: auto;
    }

    @media screen and (max-width: 1000px) {
        display: block;
        max-width: 700px;
        overflow-x: auto;
    }

    @media screen and (max-width: 768px) {
        display: block;
        max-width: 600px;
        overflow-x: auto;
    }

    @media screen and (max-width: 650px) {
        display: block;
        max-width: 450px;
        overflow-x: auto;
    }

    @media screen and (max-width: 480px) {
        display: block;
        max-width: 300px;
        overflow-x: auto;
    }

    @media screen and (max-width: 375px) {
        display: block;
        max-width: 250px;
        overflow-x: auto;
    }
`;

export const ScheduleH1 = styled.h1`
    font-size: 3.5rem;
    letter-spacing: 5px;
    font-family: "Noto Sans TC", sans-serif;
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
        0px 18px 23px rgba(0, 0, 0, 0.1);
    color: #a5dbf7;
    margin-bottom: 50px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ScheduleTable = styled.table`
    border-collapse: collapse;
    border-radius: 5px 5px 0 0;
    margin: 50px auto;
    font-size: 1.2em;
    font-family: "Noto Sans TC", sans-serif;
    letter-spacing: 1px;
    min-width: 1200px;
    min-height: 320px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const ScheduleThead = styled.thead`
    -webkit-box-shadow: #a5dbf7 2px 2px 10px;
    box-shadow: #a5dbf7 2px 2px 10px;
`;

export const ScheduleTheadTR = styled.tr`
    background-color: #a5dbf7;
    color: #fff;
    text-align: center;
    font-weight: bold;
`;

export const ScheduleTH = styled.th`
    padding: 12px 15px;
    color: #010606;
    text-align: center;
`;

export const ScheduleTD = styled.td`
    padding: 12px 15px;
    text-align: center;
    color: #fff;
`;

export const ScheduleTimeTD = styled.td`
    padding: 12px 12px;
    text-align: center;
    color: #fff;
`;

export const ScheduleTBody = styled.tbody``;

export const ScheduleTR = styled.tr`
    background-color: #1c1c1c;

    &:nth-of-type(even) {
        background-color: #2b2b2b;
        border-top: #a5dbf7;
    }

    &:last-of-type {
        border-bottom: 1px solid #a5dbf7;
    }
`;
