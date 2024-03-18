import React from 'react';
import styled, {css} from "styled-components";
import Image from "../../../assets/images/icon.png";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Menu} from "./menu/Menu";

const items = ["Skills", "Projects", "Testimony", "Contacts"]

export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <Link href="/">
                <HeaderLogo src={Image} alt="Logo"/>
            </Link>
            <Menu menuItems={items}/>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 5vw;
`

const HeaderLogo = styled.img`
    width: 100px;
    height: 70px;
`

const Link = styled.a`
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`
const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999;
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.secondaryBg};
        position: absolute;
        left:40px;
        bottom: 50px;
        
        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.secondaryBg};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
        `}
        }
        
        &::after{
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.secondaryBg};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
        `}
        }
        
    }
`

