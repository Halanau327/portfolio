import React from 'react';
import styled from "styled-components";
import photo from "../../assets/images/ava.png"
import {Billboard} from "../../components/billboard/Billboard";
import Image from "./../../assets/images/icon.png"
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {BurgerSpan} from "./burgerSpan/BurgerSpan";
import {theme} from "../../styles/Theme";

const items = ["Skills", "Projects", "Testimony", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <HeaderContainer>
                <Link href="/">
                    <HeaderLogo src={Image} alt="Logo"/>
                </Link>
                <HeaderSpan/>
                {/*<BurgerSpan/>*/}
                {/*<HeaderMenu menuItems={items}/>*/}
            </HeaderContainer>
            <Billboard/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-image: url(${photo});
    background-size: cover;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
`

const HeaderContainer = styled.div`
    display: flex;
    padding: 0 15px;
`

const HeaderLogo = styled.img`
    width: 100px;
    height: 70px;
`

const Link = styled.a`

`

const HeaderSpan = styled.span`
    display: inline-block;
    position: relative;
    width: 27px;
    height: 3px;
    background-color: ${theme.colors.secondaryBg};

    &::before,
    ::after {
        content: "";
        position: absolute;
        width: 27px;
        height: 3px;
        background-color: ${theme.colors.secondaryBg};
    }

    &::before {
        top: 16px;
        width: 20px;
    }
    
    &::after {
        bottom: -8px;
    }
`


