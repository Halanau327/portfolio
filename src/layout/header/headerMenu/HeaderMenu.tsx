import React from 'react';
import styled, {css} from "styled-components";
import Image from "../../../assets/images/icon.png";
import {Menu} from "./menu/Menu";

const items = ["Skills", "Projects", "Testimony", "Contacts"]

export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <Link href="/">
                <HeaderLogo src={Image} alt="Logo"/>
            </Link>
            <Menu menuItems={items}/>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 3vw;
`

const HeaderLogo = styled.img`
    position: fixed;
    z-index: 9999999;
    width: 100px;
    height: 70px;
    
    @media screen and (max-width: 600px){
        position: static;
    }
`

const Link = styled.a`
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`
