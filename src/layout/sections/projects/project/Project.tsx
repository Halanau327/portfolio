import React, {useState, useEffect} from 'react';
import styled, {css} from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";

type ProjectPropsType = {
    title?: string
    text?: string
    src?: string
    techStack?: string
    livePreview?: string
    viewCode?: string
}

export const Project = (props: ProjectPropsType) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <StyledProject>
            <FlexWrapper>
                <Image 
                    src={props.src} 
                    alt={props.title || "Project image"}
                    onClick={() => setIsModalOpen(true)}
                />
            </FlexWrapper>
            <ModalOverlay isOpen={isModalOpen} onClick={() => setIsModalOpen(false)}>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                    <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
                    <ModalImage src={props.src} alt={props.title || "Project image"}/>
                </ModalContent>
            </ModalOverlay>
            <FlexWrapper wrap="wrap">
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <TechStack>{props.techStack}</TechStack>
                <FlexWrapper>
                    {props.livePreview && (
                        <FlexWrapper>
                            <Icon iconId="live-preview" width="20px" height="20px"/>
                            <LivePreview as="a" href={props.livePreview} target="_blank" rel="noopener noreferrer" aria-label={`View live preview of ${props.title}`}>
                                live Preview
                            </LivePreview>
                        </FlexWrapper>
                    )}
                    {props.viewCode && (
                        <FlexWrapper margin="0 0 0 50px">
                            <Icon iconId="view-code" width="20px" height="20px"/>
                            <ViewCode href={props.viewCode} target="_blank" rel="noopener noreferrer" aria-label={`View source code of ${props.title}`}>
                                view code
                            </ViewCode>
                        </FlexWrapper>
                    )}
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
    object-fit: cover;
    object-position: left top;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.02);
    }
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
    background: none;
    border: none;
    padding: 0;

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

const ModalOverlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    pointer-events: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    `}
`

const ModalContent = styled.div`
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalImage = styled.img`
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
`

const CloseButton = styled.button`
    position: absolute;
    top: -40px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 48px;
    cursor: pointer;
    line-height: 1;
    padding: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.2);
    }
`