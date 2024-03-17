import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>skills</SectionTitle>
                <FlexWrapper wrap="wrap" justify="space-around">
                    <Skill iconId="html5"
                           title="HTML5"
                           description="Experienced in HTML, proficient in creating well-structured and semantic web pages. Knowledgeable in HTML5 features, including forms, multimedia, and responsive design. Strong understanding of tags, attributes, and document structure."/>
                    <Skill iconId="css3"
                           title="css3"
                           description="Proficient in CSS with expertise in creating stylish and responsive web layouts. Skilled in CSS3 features, including animations and transitions. Strong understanding of selectors, box model, and flexbox/grid layout"/>
                    <Skill iconId="react"
                           title="react"
                           description="Skilled in React framework, adept at building dynamic and interactive user interfaces. Proficient in component-based development, state management, and integrating APIs. Experienced in React hooks and popular libraries for enhanced functionality."/>
                    <Skill iconId="typescript"
                           title="typescript"
                           description="Experienced in TypeScript for robust and type-safe coding. Proficient with static typing, interfaces, and advanced language features. Skilled in leveraging TypeScript for scalable and maintainable applications."/>
                    <Skill iconId="javascript"
                           title="javascript"
                           description="Proficient in JavaScript, adept at building dynamic web applications. Experienced in DOM manipulation, event handling, and utilizing popular libraries/frameworks for enhanced functionality. Strong understanding of JavaScript's core concepts"/>
                    <Skill iconId="git"
                           title="git"
                           description="Experienced in GitHub for version control and collaborative development. Proficient in managing repositories, branches, and pull requests. Skilled in leveraging GitHub's features for efficient project collaboration and seamless code management."/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    
`