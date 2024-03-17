import React from 'react';
import styled from "styled-components";
import SliderImg from './../../assets/images/testimony.jpg'
import {FlexWrapper} from "../FlexWrapper";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                    <Icon iconId="leftArr"/>

                <Text>“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis
                    nec
                    dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”</Text>

                    <Icon iconId="rightArr"/>

            </FlexWrapper>
            <FlexWrapper direction="column" align="center" margin="40px 0 0 0">
                <Image src={SliderImg}></Image>
                <FlexWrapper direction="column">
                    <Name>Lukas Wolfer</Name>
                    <Job>ceo - raisins</Job>
                </FlexWrapper>
            </FlexWrapper>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
`

const Text = styled.p`
    font-size: 29px;
    font-weight: 400;
    line-height: 150%;
    color: ${theme.colors.primaryBg}
`
const Image = styled.img`
    width: 66px;
    height: 66px;
    border-radius: 50%;
    margin-bottom: 10px;
    object-fit: cover;
`
const Name = styled.span`
    text-transform: capitalize;
    color: ${theme.colors.primaryBg};
    margin-bottom: 5px;
`
const Job = styled.span`
    color: ${theme.colors.primaryBg}
`

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100px;
    height: 100px;
`

