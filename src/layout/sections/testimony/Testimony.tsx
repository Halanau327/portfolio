import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import testimonyBackground from './../../../assets/images/background.jpg'

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper align="center" direction="column">
                <Text>what clients says</Text>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 838px;
    background-image: url(${testimonyBackground});
    background-size: cover;
    background-position: top;
    width: 100%;
    height: 100vh;
`
const Text = styled.p`
    text-transform: uppercase;
    text-align: center;
    font-family: Epilogue;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    color: #2D2C2C;
`