import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import photo from "../../assets/images/ava.png"
import {Billboard} from "../../components/billboard/Billboard";


const items = ["Skills", "Projects", "Testimony", "Contacts"]
export const Header = () => {
    return (
        <WrapperHeader>
            <StyledHeader>
                <Logo/>
                <Menu menuItems={items}/>
            </StyledHeader>
            <Billboard/>
        </WrapperHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`

const WrapperHeader = styled.div`
    position: relative;
    background-image: url(${photo});
    background-size: cover;
    background-position: top;
    width: 100%;
    height: 100vh;
`

