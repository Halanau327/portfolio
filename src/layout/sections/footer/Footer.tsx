import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper>
                <Icon iconId="facebook" height="20px" width="50px"></Icon>
                <Icon iconId="twitter" height="20px" width="50px"></Icon>
                <Icon iconId="linken" height="20px" width="50px"></Icon>
                <Icon iconId="instagram" height="20px" width="50px"></Icon>
            </FlexWrapper>
                <TextFooter>2024 Relume. All right reserved.</TextFooter>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #131212;
    height: 150px;
    margin: 0 auto;
`
const TextFooter = styled.footer`
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0%;
    color: #8C8C8C
`
