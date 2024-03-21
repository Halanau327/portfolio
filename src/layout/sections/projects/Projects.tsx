import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import firstProjectImg from './../../../assets/images/project1.jpg'
import secondProjectImg from './../../../assets/images/project2.jpg'
import thirdProjectImg from './../../../assets/images/project3.jpg'
import fourthProjectImg from './../../../assets/images/project4.jpg'
import fifthProjectImg from './../../../assets/images/project5.jpg'
import sixthProjectImg from './../../../assets/images/project6.jpg'
import {Container} from "../../../components/Container";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";

const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "Spa",
        status: "spa"
    },
]

const projectsData = [
    {
        src: firstProjectImg,
        title: "Project Tile goes here",
        text: "his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "Tech stack : HTML , JavaScript, SASS, React",
        type: "spa"
    }, {
        src: secondProjectImg,
        title: "Project Tile goes here",
        text: "his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "Tech stack : HTML , JavaScript, SASS, React",
        type: "react"
    }, {
        src: thirdProjectImg,
        title: "Project Tile goes here",
        text: "his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "Tech stack : HTML , JavaScript, SASS, React",
        type: "landing"
    }, {
        src: fourthProjectImg,
        title: "Project Tile goes here",
        text: "his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "Tech stack : HTML , JavaScript, SASS, React",
        type: "spa"
    }, {
        src: fifthProjectImg,
        title: "Project Tile goes here",
        text: "his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "Tech stack : HTML , JavaScript, SASS, React",
        type: "react"
    }, {
        src: sixthProjectImg,
        title: "Project Tile goes here",
        text: "his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "Tech stack : HTML , JavaScript, SASS, React",
        type: "landing"
    }
]

export const Projects = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredProjects = projectsData

    if (currentFilterStatus === "landing") {
        filteredProjects = projectsData.filter(project => project.type === "landing")
    }

    if (currentFilterStatus === "react") {
        filteredProjects = projectsData.filter(project => project.type === "react")
    }

    if (currentFilterStatus === "spa") {
        filteredProjects = projectsData.filter(project => project.type === "spa")
    }

    function changeFilterStatus (value: "all" | "landing" | "react" | "spa") {
        setCurrentFilterStatus(value)
    }

    return (
        <StyledProjects id={"Projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper wrap="wrap" justify="space-around">
                    {filteredProjects.map((project) => {
                        return <Project src={project.src}
                                        title={project.title}
                                        text={project.text}
                                        techStack={project.techStack}/>
                    })}
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
}

const StyledProjects = styled.section`

`
