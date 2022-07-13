import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer id="contact">
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkTitle>聯絡我們</FooterLinkTitle>
                        <FooterLinkItems>
                            <FooterLink
                                href="//www.instagram.com/infor35th/"
                                target="_blank"
                            >
                                建中資訊
                            </FooterLink>
                            <FooterLink
                                href="//www.instagram.com/ckcsc35th_diary/"
                                target="_blank"
                            >
                                成功電研
                            </FooterLink>
                            <FooterLink
                                href="//www.instagram.com/zsisc29th/"
                                target="_blank"
                            >
                                中山資研
                            </FooterLink>
                            <FooterLink
                                href="//www.instagram.com/cmioc_28th/"
                                target="_blank"
                            >
                                景美電資
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            IZCC
                        </SocialLogo>
                        <WebsiteRights>
                            IZCC © {new Date().getFullYear()} All rights
                            reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="//www.facebook.com/profile.php?id=100082108575943"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//www.instagram.com/izcc_summercamp_2022/"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=izcc.summercamp.2022@gmail.com
                                "
                                target="_blank"
                                aria-label="Gmail"
                            >
                                <SiGmail />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
