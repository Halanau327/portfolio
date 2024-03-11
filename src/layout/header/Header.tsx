import React from 'react';
import styled from "styled-components";
import photo from "../../assets/images/ava.png"
import {Billboard} from "../../components/billboard/Billboard";
import Image from "./../../assets/images/icon.png"
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {BurgerSpan} from "./burgerSpan/BurgerSpan";


const items = ["Skills", "Projects", "Testimony", "Contacts"]
export const Header = () => {
    return (
        <HeaderWrapper>
            <StyledHeader>
                <HeaderContainer>
                    <HeaderImage src={Image}/>
                    <HeaderMenu menuItems={items}/>
                    <BurgerSpan/>
                </HeaderContainer>
                <Billboard/>
            </StyledHeader>
        </HeaderWrapper>
    );
};

const StyledHeader = styled.header`

`

const HeaderWrapper = styled.div`
    position: relative;
    background-image: url(${photo});
    background-size: cover;
    background-position: top;
    width: 100%;
    height: 100vh;
`

const HeaderImage = styled.img`
    width: 100px;
    height: 70px;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1620px;
    width: 100%;
    min-height: 100%;
    padding: 0 15px;
    margin: 0 auto 110px auto;
`


