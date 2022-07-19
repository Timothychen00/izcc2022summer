import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: #101522;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: grid;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 820px) {
        margin-left: 25px;
    }

    @media screen and (max-width: 768px) {
        margin-left: 0px;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    column-gap: 40px;
    width: 100%;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        margin-left: 8px;
        padding: 10px;
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        margin-left: 10px;
        padding: 10px;
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        margin-left: 5px;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    color: #fff;
    font-size: 40px;
    letter-spacing: 3px;
    margin-bottom: 60px;
    margin-left: 160px;

    @media screen and (max-width: 768px) {
        margin-left: 3px;
    }

    @media screen and (max-width: 480px) {
        margin-left: 5px;
        font-size: 2rem;
    }
`;

export const FooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 20px;
    margin-right: 20px;

    &:hover {
        color: #a5dbf7;
        transition: all 0.3s ease-in-out;
    }

    @media screen and (max-width: 768px) {
        font-size: 20px;
        white-space: nowrap;
    }

    @media screen and (max-width: 480px) {
        white-space: nowrap;
    }

    @media screen and (max-width: 400px) {
        padding-left: 10px;
        white-space: nowrap;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    font-family: "Noto Sans TC", sans-serif;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
    letter-spacing: 2px;
    margin-left: 160px;
    font-family: "Noto Sans TC", sans-serif;

    @media screen and (max-width: 820px) {
        margin-left: 5px;
    }

    @media screen and (max-width: 768px) {
        margin-left: 0px;
        margin-bottom: 30px;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

    @media screen and (max-width: 480px) {
        margin-top: 20px;
    }
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;

    &:hover {
        color: #a5dbf7;
    }
`;
