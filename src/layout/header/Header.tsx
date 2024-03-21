import React from 'react';
import styled from "styled-components";
import photo from "../../assets/images/ava.png"
import {Billboard} from "../../components/billboard/Billboard";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

export const Header = () => {
    return (
        <StyledHeader id={"Home"}>
            <HeaderMenu/>
            <Billboard/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-image: url(${photo});
    background-size: cover;
    width: 100%;
    height: 100vh;
    
    @media screen and (max-width: 1140px) {
        height: auto;
        background-position: 65%;
    }
`








