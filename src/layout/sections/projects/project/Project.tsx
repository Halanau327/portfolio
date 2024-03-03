import React from 'react';
import styled from "styled-components";


type ProjectPropsType = {
    title?: string
    text?: string
    src?: string
    techStack?: string
    livePreview?: string
    viewCode?: string
}
export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <TechStack>{props.techStack}</TechStack>
            <LivePreview>{props.livePreview}</LivePreview>
            <ViewCode>{props.viewCode}</ViewCode>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    width: 33%;
`

const Image = styled.img`
    text-align: center;
`
const Title = styled.h3`
    text-align: center;
`

const Text = styled.p`
    text-align: center;
`
const TechStack = styled.p`
    text-align: center;
`

const LivePreview = styled.p`
    text-align: center;
`
const ViewCode = styled.p`
    text-align: center;
`