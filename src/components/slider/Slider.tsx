import React from 'react';
import styled from "styled-components";
import SliderImg from './../../assets/images/testimony.jpg'
import {FlexWrapper} from "../FlexWrapper";
import {Icon} from "../icon/Icon";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <FlexWrapper justify="space-around">
                        <Icon iconId={"leftArr"} width={"27px"} height={"127px"}/>
                        <Text>“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis
                            nec
                            dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”</Text>
                        <Icon iconId={"rightArr"} width={"27px"} height={"127px"}/>
                    </FlexWrapper>
                    <Image src={SliderImg}></Image>
                    <Name>Lukas Wolfer</Name>
                    <Job>ceo - raisins</Job>
                </Slide>

            </FlexWrapper>

        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    text-align: center;
    border: 1px solid red;
`
const Slide = styled.div`

`

const Text = styled.p`
    font-family: Epilogue;
    font-size: 29px;
    font-weight: 400;
    line-height: 150%;
    max-width: 916px;
`
const Image = styled.img`
    width: 66px;
    height: 66px;
`
const Name = styled.p`
    text-transform: capitalize;
`
const Job = styled.p`
    text-transform: uppercase;
`

