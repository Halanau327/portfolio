import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Billboard = () => {
    return (
        <div>
            <FlexWrapper direction="column">
                <HiBillboard>Hi! Everyone</HiBillboard>
                <SubTitleBillboard>Alex Halanau</SubTitleBillboard>
                <TitleBillboard>Frontend Dev</TitleBillboard>
                <SpanBillboard>Collaborating with designers and backend developers for exceptional digital
                    solutions.</SpanBillboard>
                <ButtonBillboard>get in touch</ButtonBillboard>
            </FlexWrapper>
        </div>
    );
};

const HiBillboard = styled.span`
    font-family: "Epilogue", sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    color: #2D2C2C;
`

const SubTitleBillboard = styled.h2`
    font-family: "Epilogue", sans-serif;
    font-size: 108px;
    font-weight: 800;
    line-height: 111.02%;
    letter-spacing: -4%;
    text-transform: capitalize;
    color: #2D2C2C;
`

const TitleBillboard = styled.h1`
    font-family: "Epilogue", sans-serif;
    font-size: 108px;
    font-weight: 800;
    line-height: 111.02%;
    letter-spacing: -4%;
    text-transform: capitalize;
    color: white;
`

const SpanBillboard = styled.span`
    font-family: "Epilogue", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 198.02%;
    letter-spacing: 2%;
    text-align: left;
    color: white;
`

const ButtonBillboard = styled.button`
    background-color: transparent;
    box-sizing: border-box;
    border: 1px solid;
    width: 254px;
    height: 81px;
    color: rgb(255, 255, 255);
    font-family: "Epilogue", sans-serif;
    font-size: 19px;
    font-weight: 600;
    line-height: 234.52%;
    letter-spacing: 10%;
    text-align: center;
    text-transform: uppercase;
    color: white;
`