import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

export const Billboard = () => {
    return (
        <StyledBillboard>
            <FlexWrapper direction="column">
                <GreedingsOfBillboard>Hi! Everyone</GreedingsOfBillboard>
                <SubtitleOfBillboard>Halanau Alex</SubtitleOfBillboard>
                <TitleOfBillboard>Frontend Dev</TitleOfBillboard>
                <DescriptionOfBillboard>Collaborating with designers and backend developers for exceptional digital
                    solutions.</DescriptionOfBillboard>
                <ButtonBillboard>get in touch</ButtonBillboard>
            </FlexWrapper>
        </StyledBillboard>
    );
};



const StyledBillboard = styled.div`
    max-width: 1400px;
    width: 100%;
    min-height: 100%;
    margin: 70px auto 0;
`

const GreedingsOfBillboard = styled.span`
    max-width: 141px;
    width: 100%;
    font-size: 19px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.accent};
    padding: 5px;
    margin-bottom: 45px;
`

const SubtitleOfBillboard = styled.span`
    font-size: calc((100vw - 375px)/(1920 - 375) * (108 - 48) + 48px);
    font-weight: 800;
    line-height: 111.02%;
    text-transform: capitalize;
`

const TitleOfBillboard = styled.h1`
    font-size: calc((100vw - 375px)/(1920 - 375) * (108 - 48) + 48px);
    font-weight: 800;
    line-height: 111.02%;
    text-transform: capitalize;
    color: ${theme.colors.primaryBg};
    margin-bottom: 35px;
`

const DescriptionOfBillboard = styled.span`
    max-width: 720px;
    width: 100%;
    font-size: calc((100vw - 375px)/(1920 - 375) * (24 - 19) + 19px);
    font-weight: 400;
    line-height: 198.02%;
    color: ${theme.colors.primaryBg};
    margin-bottom: 70px;
`

const ButtonBillboard = styled.button`
    max-width: 254px;
    width: 100%;
    height: 81px;
    border: 1px solid;
    background-color: transparent;
    font-size: 19px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${theme.colors.primaryBg};
    cursor: pointer;

    &:hover {
        color: ${theme.colors.secondaryBg};
        background-color: ${theme.colors.primaryBg};
        border: 2px solid ${theme.colors.secondaryBg};
    }
    
    @media screen () {
        
    }
`