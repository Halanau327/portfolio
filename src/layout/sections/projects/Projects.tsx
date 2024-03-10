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
import {Container} from "../../../components/Container";
import {ProjectsMenu} from "./projectsMenu/ProjectsMenu";



const projectMenuItems = ["All", "Landing page", "React", "Spa"]


export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <ProjectsMenu menuItems={projectMenuItems}/>
                <FlexWrapper wrap="wrap" justify="center">
                    <Project src={firstProjectImg} title="Project Tile goes here"
                             text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                             techStack="Tech stack : HTML , JavaScript, SASS, React"/>
                    <Project src={secondProjectImg} title="Project Tile goes here"
                             text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                             techStack="Tech stack : HTML , JavaScript, SASS, React"/>
                    <Project src={thirdProjectImg} title="Project Tile goes here"
                             text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                             techStack="Tech stack : HTML , JavaScript, SASS, React"/>
                    <Project src={fourthProjectImg} title="Project Tile goes here"
                             text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                             techStack="Tech stack : HTML , JavaScript, SASS, React"/>
                    <Project src={fifthProjectImg} title="Project Tile goes here"
                             text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                             techStack="Tech stack : HTML , JavaScript, SASS, React"/>
                    <Project src={sixthProjectImg} title="Project Tile goes here"
                             text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                             techStack="Tech stack : HTML , JavaScript, SASS, React"/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
}

const StyledProjects = styled.section`

    //background-color: #C5C5C5; 
`

// const images = [firstProjectImg, secondProjectImg, thirdProjectImg, fourthProjectImg, fifthProjectImg, sixthProjectImg]
// const titles = ["Project Tile goes here"]
// const texts = ["This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"]
// const techStacks = ["Tech stack : HTML , JavaScript, SASS, React"]
// const livePreviews = ["Live Preview"]
// const viewCodes = ["View Code"]