import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import TestimonyImg from "./../../../assets/images/testimony.jpg"
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

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

`
const ImageTestimony = styled.img`

`
const Text = styled.p`
    text-transform: uppercase;
    text-align: center;
    font-family: Epilogue;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
`