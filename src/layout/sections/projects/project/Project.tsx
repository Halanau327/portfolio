import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";

type ProjectPropsType = {
    title?: string
    text?: string
    src?: string
    techStack?: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper>
                <Image src={props.src} alt="projectImage"/>
            </FlexWrapper>
            <FlexWrapper wrap="wrap">
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <TechStack>{props.techStack}</TechStack>
                <FlexWrapper>
                    <FlexWrapper>
                        <Icon iconId="live-preview" width="20px" height="20px"/>
                        <LivePreview>live Preview</LivePreview>
                    </FlexWrapper>
                    <FlexWrapper margin="0 0 0 50px">
                        <Icon iconId="view-code" width="20px" height="20px"/>
                        <ViewCode>view code</ViewCode>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 330px;
    width: 100%;
    margin: 20px 20px;
`

const Image = styled.img`
    width: 330px;
    height: 260px;
`

const Title = styled.h3`
    margin: 20px 0;
    font-size: 24px;
    font-weight: 600;
    line-height: 126.02%;
`

const Text = styled.p`
    max-width: 314px;
    width: 100%;
    font-size: 19px;
    font-weight: 300;
    line-height: 126.02%;
`

const TechStack = styled.p`
    margin: 20px 0;
    font-size: 14px;
    font-weight: 300;
    line-height: 126.02%;
`

const LivePreview = styled.button`
    font-size: 14px;
    font-weight: 300;
    line-height: 126.02%;
    text-transform: capitalize;
    margin-left: 10px;
    text-decoration: underline;
    cursor: pointer;
    color: ${theme.colors.accent};

    &:hover {
        transform: scale(110%);
        transition: transform 1s;
    }
`

const ViewCode = styled.a`
    font-size: 14px;
    font-weight: 300;
    line-height: 126.02%;
    text-transform: capitalize;
    margin-left: 10px;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
        transform: scale(110%);
        transition: transform 1s;
    }
`