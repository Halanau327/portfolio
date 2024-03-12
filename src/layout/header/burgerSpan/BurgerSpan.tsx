import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type BurgerSpanPropsType = {
    width?: string
}

export const BurgerSpan = () => {
    return (
        <StyledBurgerSpan>
            <Span width="27px"/>
            <Span width="32px"/>
            <Span width="29px"/>
        </StyledBurgerSpan>
    );
};

const StyledBurgerSpan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 30px;
    height: 20px;
    cursor: pointer;
`

const Span = styled.span<BurgerSpanPropsType>`
    display: block;
    width: ${props => props.width || "100%"};
    height: 3px;
    background-color: ${theme.colors.secondaryBg};
    transition: background-color 0.3s ease;

    &:not(:last-child) {
        margin-bottom: 5px;
    }
`