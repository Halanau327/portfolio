import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Container} from "../Container";
import {theme} from "../../styles/Theme";

export const Billboard = () => {
    return (
        <div>
            <BillboardContainer>
                <FlexWrapper direction="column">
                    <HiBillboard>Hi! Everyone</HiBillboard>
                    <SubTitleBillboard>Halanau Alex</SubTitleBillboard>
                    <TitleBillboard>Frontend Dev</TitleBillboard>
                    <SpanBillboard>Collaborating with designers and backend developers for exceptional digital
                        solutions.</SpanBillboard>
                    <ButtonBillboard>get in touch</ButtonBillboard>
                </FlexWrapper>
            </BillboardContainer>
        </div>
    );
};

const BillboardContainer = styled.div`
    max-width: 1400px;
    width: 100%;
    min-height: 100%;
    padding: 0 15px;
    margin: 0 auto;
    border: 1px solid red;
`

const HiBillboard = styled.span`
    max-width: 121px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    color: white;
    background-color: ${theme.colors.accent};
    padding: 4px;
    margin-bottom: 45px;
`

const SubTitleBillboard = styled.h2`
    font-size: 108px;
    font-weight: 800;
    line-height: 111.02%;
    text-transform: capitalize;
    
`

const TitleBillboard = styled.h1`
    font-size: 108px;
    font-weight: 800;
    line-height: 111.02%;
    text-transform: capitalize;
    color: white;
    margin-bottom: 35px;
`

const SpanBillboard = styled.span`
    max-width: 720px;
    width: 100%;
    font-size: 24px;
    font-weight: 400;
    line-height: 198.02%;
    color: white;
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
    color: white;
    
`

