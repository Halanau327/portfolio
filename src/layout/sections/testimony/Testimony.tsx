import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import testimonyBackground from './../../../assets/images/background4.jpg'
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper justify="center">
                    <Text>what clients say</Text>
                </FlexWrapper>
                <Slider/>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-image: url(${testimonyBackground});
    background-size: cover;
    background-position: top;
    width: 100%;
`
const Text = styled.span`
    text-transform: uppercase;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    color: ${theme.colors.primaryBg};
    margin: 40px 0;
    background-color: ${theme.colors.accent};
`