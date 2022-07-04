import React from "react";
import { FaBars } from "react-icons/fa";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    Hamburger,
    NavMenu,
    NavItem,
    NavLinks,
    NavButton,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">IZCC</NavLogo>
                    <Hamburger onClick={toggle}>
                        <FaBars />
                    </Hamburger>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">關於</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="class">課程</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="schedule">行程</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">聯絡</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavButton>
                        <NavBtnLink to="/signup">報名</NavBtnLink>
                    </NavButton>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
