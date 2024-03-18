import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import SliderImg from '../../../assets/images/testimony.jpg'
import testimonyBackground from './../../../assets/images/back1.jpg'
import {Slider} from "./slider/Slider";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper justify="center">
                    <Text>what clients say</Text>
                </FlexWrapper>
                <Slider slides={sliderData}/>
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

const sliderData = [
    {
        description: "Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing",
        icon: SliderImg,
        name: "Lucas wolfer",
        job: "ceo - raisins"
    },
    {
        description: "Lorem ipsum dolor sit amet, elit consectetur adipiscing.",
        icon: SliderImg,
        name: "Lucas wolfer",
        job: "Lucas wolfer"
    },
    {
        description: "Lorem ipsum dolor sit amet",
        icon: SliderImg,
        name: "Alex Halanau",
        job: "CEO"
    },
    {
        description: "Lorem ipsum dolor sit amet",
        icon: SliderImg,
        name: "Alex Halanau",
        job: "CEO"
    },
    {
        description: "Lorem ipsum dolor sit amet",
        icon: SliderImg,
        name: "Alex Halanau",
        job: "CEO"
    },
    {
        description: "Lorem ipsum dolor sit amet",
        icon: SliderImg,
        name: "Alex Halanau",
        job: "CEO"
    },
]


//
// export const Testimony = () => {
//     return (
//         <StyledTestimony>
//             <Container>
//                 <SectionTitle>Testimony</SectionTitle>
//                 <FlexWrapper justify="center">
//                     <Text>what clients say</Text>
//                 </FlexWrapper>
//                 <Slider/>
//             </Container>
//         </StyledTestimony>
//     );
// };
//

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