import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: ${({ scrollNav }) =>
        scrollNav ? "rgba(0, 0, 0, 0.3)" : "transparent"};
    backdrop-filter: ${({ scrollNav }) =>
        scrollNav ? "blur(10px)" : "blur(0px)"};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.4s all ease-in-out;

    @media screen and (max-width: 960px) {
        transition: 0.4s all ease-in-out;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled.a`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: 600;
    font-family: "Encode Sans Expanded", sans-serif;
    letter-spacing: 1px;
    text-decoration: none;
`;

export const Hamburger = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        margin-top: 5px;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 50px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: "Noto Sans TC", sans-serif;
    cursor: pointer;
`;

export const NavButton = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled.a`
    border-radius: 50px;
    background: #a5dbf7;
    white-space: nowrap;
    padding: 10px 24px;
    color: #010606;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;
