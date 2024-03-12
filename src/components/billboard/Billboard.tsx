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
    padding: 0 15px;
    margin: 0 auto;
`

const GreedingsOfBillboard = styled.span`
    max-width: 121px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.accent};
    padding: 5px;
    margin-bottom: 45px;
`

const SubtitleOfBillboard = styled.span`
    font-size: 108px;
    font-weight: 800;
    line-height: 111.02%;
    text-transform: capitalize;
`

const TitleOfBillboard = styled.h1`
    font-size: 108px;
    font-weight: 800;
    line-height: 111.02%;
    text-transform: capitalize;
    color: ${theme.colors.primaryBg};
    margin-bottom: 35px;
`

const DescriptionOfBillboard = styled.span`
    max-width: 720px;
    width: 100%;
    font-size: 24px;
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
`

