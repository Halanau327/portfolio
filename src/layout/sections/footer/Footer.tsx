import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";


export const Footer = () => {
    return (
        <StyledFooter>
            <SocialLinks>
                <Link href="https://github.com/Halanau327" target="_blank" rel="noopener noreferrer">
                    <Icon iconId="github" height="25px" width="25px" viewBox="0 0 20 20"></Icon>
                </Link>
                <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Icon iconId="linked" height="25px" width="25px" viewBox="0 0 13.5 13.5"></Icon>
                </Link>
                <Link href="https://t.me/halanau" target="_blank" rel="noopener noreferrer">
                    <Icon iconId="telegram" height="25px" width="25px" viewBox="0 0 18 18"></Icon>
                </Link>
            </SocialLinks>
            <TextFooter>© 2025 Galanov Alexander</TextFooter>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: ${theme.colors.secondaryBg};
    min-height: 150px;
    padding: 40px 20px;
    margin: 0 auto;
`
const SocialLinks = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`

const TextFooter = styled.small`
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: ${theme.colors.primaryBg};
    text-align: center;
`

const Link = styled.a`
    cursor: pointer;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    color: ${theme.colors.primaryBg};
    
    &:hover {
        transform: scale(120%);
    }
    
    svg {
        width: 25px;
        height: 25px;
        fill: ${theme.colors.primaryBg};
        color: ${theme.colors.primaryBg};
    }
`