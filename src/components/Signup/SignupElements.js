import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    min-height: 2300px;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        200deg,
        rgba(49, 83, 135, 1) 0%,
        rgba(49, 83, 135, 1) 100%
    );

    @media screen and (max-width: 480px) {
        min-height: 2300px;
    }
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 32px;
    font-family: "Noto Sans TC", sans-serif;
    letter-spacing: 2px;

    @media screen and (max-width: 480px) {
        margin-left: 30px;
        margin-top: 40px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #010101;
    max-width: 500px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

    @media screen and (max-width: 480px) {
        margin-top: 50px;
        max-width: 300px;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }
`;

export const FormGenderWrap = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const FormFileWrap = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: flex-start;
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    letter-spacing: 3px;
    font-family: "Noto Sans TC", sans-serif;
    color: #fff;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    font-weight: 800;
`;

export const FormLabel = styled.label`
    margin-bottom: 10px;
    font-size: 16px;
    color: #fff;

    @media screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
`;

export const FormGenderLabel = styled.label`
    margin-bottom: 15px;
    margin-left: 135px;
    margin-right: 4px;
    font-size: 18px;
    color: #fff;

    @media screen and (max-width: 480px) {
        margin-bottom: 20px;
        margin-left: 70px;
    }
`;

export const FormInput = styled.input`
    color: #fff;
    font-size: 20px;
    background: #282a36;
    padding: 22px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;

    @media screen and (max-width: 480px) {
        padding: 20px 16px;
        ::-webkit-input-placeholder {
            font-size: 16px;
        }
    }
`;

export const FormGenderInput = styled.input`
    color: #fff;
    font-size: 20px;
    background: #282a36;
    padding: 22px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    transform: scale(1.3);

    @media screen and (max-width: 480px) {
        padding: 20px 16px;
    }
`;

export const FormFileUpload = styled.input`
    display: none;
    background-color: #4d8cf2;
    font-weight: 800;
    padding: 12px 18px;
    margin-top: -12px;
    margin-left: 25px;

    &:hover {
        background-color: #fff;
        transition: all 0.3s ease-in-out;
    }
`;

export const FormFileLabel = styled.label`
    color: #fff;
    font-weight: 500;
    letter-spacing: 1px;
    background-color: #4d8cf2;
    border-radius: 9px;
    padding: 12px 18px;
    margin-top: -12px;
    margin-left: 25px;

    &:hover {
        color: #fff;
        background-color: #3b73ce;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }
`;

export const FormButton = styled.button`
    margin-top: 30px;
    background: #a5dbf7;
    padding: 22px 0;
    border: none;
    border-radius: 4px;
    color: #000;
    font-size: 20px;
    font-family: "Noto Sans TC", sans-serif;
    font-weight: 800;
    cursor: pointer;
    letter-spacing: 3px;

    &:hover {
        background: #fff;
        transition: all 0.3s ease-in-out;
    }
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;
