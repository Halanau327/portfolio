import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";
import Typewriter from 'typewriter-effect';

export const Billboard = () => {
    return (
        <StyledBillboard>
            <FlexWrapper direction="column" margin="140px 0 0 0">
                <GreedingsOfBillboard>Hi! Everyone</GreedingsOfBillboard>
                <SubtitleOfBillboard>Halanau Alex</SubtitleOfBillboard>
                <TitleOfBillboard>
                    <p>Frontend Dev</p>
                    <Typewriter
                        options={{
                            strings: ["A Web Dev", "A Frontend Dev", "A Web Designer"],
                            autoStart: true,
                            loop: true,
                            delay: 150
                        }}
                    />
                </TitleOfBillboard>
                <DescriptionOfBillboard>Collaborating with designers and backend developers for exceptional digital
                    solutions.</DescriptionOfBillboard>
                <ButtonBillboard>get in touch</ButtonBillboard>
            </FlexWrapper>
        </StyledBillboard>
    );
};



const StyledBillboard = styled.div`
    max-width: 1600px;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    padding: 15px 15px;
    
    @media screen and (max-width: 1140px) {
        padding-top: 50px;
    }
`

const GreedingsOfBillboard = styled.span`
    max-width: 127px;
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
    font-size: calc((100vw - 375px)/(1920 - 375) * (108 - 46) + 46px);
    font-weight: 800;
    line-height: 111.02%;
    text-transform: capitalize;

    @media screen and (max-width: 1140px) {
        color: ${theme.colors.primaryBg};
    }
`

const TitleOfBillboard = styled.h1`
    font-size: calc((100vw - 375px)/(1920 - 375) * (108 - 46) + 46px);
    font-weight: 800;
    line-height: 111.02%;
    text-transform: capitalize;
    color: ${theme.colors.primaryBg};
    margin-bottom: 35px;
    
    p {
        display: none;
    }
`

const DescriptionOfBillboard = styled.span`
    max-width: 720px;
    width: 100%;
    font-size: calc((100vw - 375px)/(1920 - 375) * (24 - 19) + 19px);
    font-weight: 400;
    line-height: 198.02%;
    color: ${theme.colors.primaryBg};
    margin-bottom: 70px;

    @media screen and (max-width: 1140px) {  
        max-width: 375px;
    }
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
    transition: 0.7s;

    &:hover {
        color: ${theme.colors.secondaryBg};
        background-color: ${theme.colors.primaryBg};
        border: 2px solid ${theme.colors.secondaryBg};
    }
`