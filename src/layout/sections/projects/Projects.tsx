import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import firstProjectImg from './../../../assets/images/project1.png'
import secondProjectImg from './../../../assets/images/project2.png'
import thirdProjectImg from './../../../assets/images/project3.png'
import fourthProjectImg from './../../../assets/images/project4.png'
import fifthProjectImg from './../../../assets/images/project5.png'
import sixthProjectImg from './../../../assets/images/project6.png'


const projectMenuItems = ["All", "Landing page", "React", "Spa"]


export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <Menu menuItems={projectMenuItems}/>
            <FlexWrapper wrap="wrap">
                <Project src={firstProjectImg} title="Project Tile goes here"
                         text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                         techStack="Tech stack : HTML , JavaScript, SASS, React" livePreview="Live Preview"
                         viewCode="View Code"/>
                <Project src={secondProjectImg} title="Project Tile goes here"
                         text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                         techStack="Tech stack : HTML , JavaScript, SASS, React" livePreview="Live Preview"
                         viewCode="View Code"/>
                <Project src={thirdProjectImg} title="Project Tile goes here"
                         text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                         techStack="Tech stack : HTML , JavaScript, SASS, React" livePreview="Live Preview"
                         viewCode="View Code"/>
                <Project src={fourthProjectImg} title="Project Tile goes here"
                         text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                         techStack="Tech stack : HTML , JavaScript, SASS, React" livePreview="Live Preview"
                         viewCode="View Code"/>
                <Project src={fifthProjectImg} title="Project Tile goes here"
                         text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                         techStack="Tech stack : HTML , JavaScript, SASS, React" livePreview="Live Preview"
                         viewCode="View Code"/>
                <Project src={sixthProjectImg} title="Project Tile goes here"
                         text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                         techStack="Tech stack : HTML , JavaScript, SASS, React" livePreview="Live Preview"
                         viewCode="View Code"/>
            </FlexWrapper>
        </StyledProjects>
    );
}

const StyledProjects = styled.section`
    
    max-width: 1194px;
    width: 100%;
    margin: 0 auto;
    //background-color: #C5C5C5; 
`

// const images = [firstProjectImg, secondProjectImg, thirdProjectImg, fourthProjectImg, fifthProjectImg, sixthProjectImg]
// const titles = ["Project Tile goes here"]
// const texts = ["This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"]
// const techStacks = ["Tech stack : HTML , JavaScript, SASS, React"]
// const livePreviews = ["Live Preview"]
// const viewCodes = ["View Code"]