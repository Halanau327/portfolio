import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import photo from "../../assets/images/ava.png"
import {Billboard} from "../../components/billboard/Billboard";
import Image from "./../../assets/images/icon.png"
import {HeaderMenu} from "./headerMenu/HeaderMenu";



const items = ["Skills", "Projects", "Testimony", "Contacts"]
export const Header = () => {
    return (
        <WrapperHeader>
            <StyledHeader>
                <HeaderContainer>
                    <HeaderImage src={Image}/>
                    <HeaderMenu menuItems={items}/>
                    <SpanContainer>
                        <BurgerSpan/>
                        <BurgerSpan/>
                        <BurgerSpan/>
                    </SpanContainer>
                </HeaderContainer>
                <Billboard/>
            </StyledHeader>
        </WrapperHeader>
    );
};

const StyledHeader = styled.header`

`

const WrapperHeader = styled.div`
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

const BurgerSpan = styled.span`
    display: inline-block;
    background-color: black;
    width: 27px;
    height: 3px;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1762px;
    width: 100%;
    min-height: 100%;
    padding: 0 15px;
    margin: 0 auto 110px auto;
    border: 1px solid red;
`

const SpanContainer = styled.div`
    width: 32px;
    height: 21px;

`
