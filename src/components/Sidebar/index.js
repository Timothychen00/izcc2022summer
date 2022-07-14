import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        to="about"
                        onClick={toggle}
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        關於
                    </SidebarLink>
                    <SidebarLink
                        to="class"
                        onClick={toggle}
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        課程
                    </SidebarLink>
                    <SidebarLink
                        to="schedule"
                        onClick={toggle}
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        行程
                    </SidebarLink>
                    <SidebarLink
                        to="contact"
                        onClick={toggle}
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        聯絡
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            <SideBtnWrap>
                <SidebarRoute href="/join">報名</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar;
