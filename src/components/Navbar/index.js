import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
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
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo href="/" onClick={toggleHome}>
                            IZCC
                        </NavLogo>
                        <Hamburger onClick={toggle}>
                            <FaBars />
                        </Hamburger>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to="about"
                                    smooth={true}
                                    duration={800}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    關於
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="class"
                                    smooth={true}
                                    duration={800}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    課程
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="schedule"
                                    smooth={true}
                                    duration={800}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    行程
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="caption"
                                    smooth={true}
                                    duration={800}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    說明
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="contact"
                                    smooth={true}
                                    duration={800}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    聯絡
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavButton>
                            <NavBtnLink href="/join">報名</NavBtnLink>
                        </NavButton>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
