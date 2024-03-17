import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper gap="50px">
                <Link href="https://www.facebook.com">
                    <Icon iconId="facebook" height="25px" width="25px"></Icon>
                </Link>
                <Link href="https://www.twitter.com">
                    <Icon iconId="twitter" height="25px" width="25px"></Icon>
                </Link>
                <Link href="https://www.linkenid.com">
                    <Icon iconId="linken" height="25px" width="25px"></Icon>
                </Link>
                <Link href="https://www.instagram.com/halanau">
                    <Icon iconId="instagram" height="25px" width="25px"></Icon>
                </Link>
            </FlexWrapper>
            <TextFooter>2024 Resume. All right reserved.</TextFooter>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme.colors.secondaryBg};
    height: 150px;
    margin: 0 auto;

`
const TextFooter = styled.small`
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: ${theme.colors.primaryBg};
`
const Link = styled.a`
    cursor: pointer;
    max-height: 25px;
    max-width: 25px;
    &:hover {
        transform: scale(120%);
        transition: transform 1s;
    }
`