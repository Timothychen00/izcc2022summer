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
                    <SidebarLink to="about" onClick={toggle}>
                        關於
                    </SidebarLink>
                    <SidebarLink to="class" onClick={toggle}>
                        課程
                    </SidebarLink>
                    <SidebarLink to="schedule" onClick={toggle}>
                        行程
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        聯絡
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            <SideBtnWrap>
                <SidebarRoute to="/signup">報名</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar;
