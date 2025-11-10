import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import testimonyBackground from './../../../assets/images/back1.jpg'

export const Testimony = () => {
    return (
        <StyledTestimony id={"Testimony"}>
            <Container>
                <SectionTitle color={theme.colors.primaryBg}>Testimony</SectionTitle>
                <FlexWrapper justify="center">
                    <Text>my achievements & stats</Text>
                </FlexWrapper>
                <StatsWrapper>
                    {statsData.map((stat, index) => (
                        <StatCard key={index}>
                            <StatNumber>{stat.number}</StatNumber>
                            <StatLabel>{stat.label}</StatLabel>
                            <StatDescription>{stat.description}</StatDescription>
                        </StatCard>
                    ))}
                </StatsWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-image: url(${
            testimonyBackground
    });
    background-size: cover;
    background-position: top;
    width: 100%;
`

const statsData = [
    {
        number: "5+",
        label: "Projects",
        description: "Completed projects"
    },
    {
        number: "2+",
        label: "Years",
        description: "Of experience"
    },
    {
        number: "100%",
        label: "Quality",
        description: "Code standards"
    },
    {
        number: "24/7",
        label: "Available",
        description: "For new challenges"
    },
]

const Text = styled.span`
    font-family: "Inconsolata", monospace;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    text-transform: uppercase;
    text-align: center;
    margin: 40px 0;
    padding: 5px;
    color: ${theme.colors.primaryBg};
    background-color:black;
`

const StatsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    margin-top: 60px;
    padding: 0 20px;
    
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
`

const StatCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px 20px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    transition: transform 0.3s ease, background 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        background: rgba(0, 0, 0, 0.5);
    }
`

const StatNumber = styled.div`
    font-size: 48px;
    font-weight: 700;
    color: ${theme.colors.primaryBg};
    margin-bottom: 10px;
    line-height: 1;
    
    @media screen and (max-width: 600px) {
        font-size: 36px;
    }
`

const StatLabel = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${theme.colors.primaryBg};
    margin-bottom: 8px;
    text-transform: uppercase;
    
    @media screen and (max-width: 600px) {
        font-size: 16px;
    }
`

const StatDescription = styled.div`
    font-size: 14px;
    color: ${theme.colors.primaryBg};
    opacity: 0.8;
    
    @media screen and (max-width: 600px) {
        font-size: 12px;
    }
`