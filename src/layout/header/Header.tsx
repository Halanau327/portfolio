import React from 'react';
import styled from "styled-components";
import photo from "../../assets/images/ava.png"
import {Billboard} from "../../components/billboard/Billboard";
import {HeaderMenu} from "./headerMenu/HeaderMenu";


// const items = ["Skills", "Projects", "Testimony", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
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
`

// const HeaderContainer = styled.div`
// display: flex;
// justify-content: space-between;
//     width: 100%;
//     padding: 0 15px;
// `








