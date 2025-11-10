import React from 'react';
import styled from "styled-components";
import logo from "../../../assets/images/galanovAlex.png"
import {Menu} from "./menu/Menu";
import {animateScroll as scroll} from "react-scroll";

export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <Link onClick={() => {scroll.scrollToTop()}}>
                <HeaderLogo src={logo} alt="Logo"/>
            </Link>
            <Menu/>
        </StyledHeaderMenu>
    );
};

const  StyledHeaderMenu = styled.div`
    display: flex;
    width: 100%;
    padding: 0 3vw;
    height: 60px;
    position: fixed;
`

const HeaderLogo = styled.img`
    position: fixed;
    z-index: 9999999;
    width: 120px;
    height: 85px;
    
    @media screen and (max-width: 600px){
        position: static;
    }
`

const Link = styled.a`
    cursor: pointer;
`
