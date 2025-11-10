import React, { useState, useMemo } from 'react';
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import socialNetwork from './../../../assets/images/incta.png'
import admin from './../../../assets/images/admin.png'
import thirdProjectImg from './../../../assets/images/project3.jpg'
import portfolio from './../../../assets/images/portfolio.png'
import englishApp from './../../../assets/images/english-app.png'
import { Container } from "../../../components/Container";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";

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
    id: "social-network",
    src: socialNetwork,
    title: "Social Network",
    text: "Modern social network application inspired by Instagram. Features include user authentication with Google OAuth, profile management, post creation and sharing, messaging, search functionality, statistics tracking, favorites/bookmarks, and real-time notifications. Built with Next.js App Router and modern React patterns.",
    techStack: "Next.js, React, TypeScript, Redux Toolkit, Radix UI, SASS, React Hook Form, Zod, Jest, Storybook",
    type: "spa",
    livePreview: "",
    viewCode: "https://github.com/Halanau327/admin-socialNetwork"
  }, {
    id: "admin-panel",
    src: admin,
    title: "Admin panel",
    text: "Admin panel for Social network. Comprehensive management system for users, payments, posts, and statistics. Features user profiles, follow relations, payment tracking, and content moderation capabilities.",
    techStack: "Next.js, React, TypeScript, GraphQL, Apollo Client, CSS Modules, React Hook Form, Zod, Radix UI",
    type: "spa",
    livePreview: "",
    viewCode: "https://github.com/Halanau327/admin-socialNetwork"
  }, {
    id: "music-platform",
    src: thirdProjectImg,
    title: "Music-lover platform",
    text: "A modern music application for managing playlists and tracks. Features include playlist creation and editing, track browsing with infinite scroll, search functionality with debouncing, pagination, user authentication, and profile management. Built as a single-page application with real-time data fetching and state management.",
    techStack: "Tech stack: React, TypeScript, Vite, Redux Toolkit, React Router, React Hook Form, CSS Modules, React Toastify",
    type: "spa",
    livePreview: "",
    viewCode: "https://github.com/Halanau327/music-lover"
  }, {
    id: "portfolio",
    src: portfolio,
    title: "Portfolio Website",
    text: "Modern portfolio website showcasing projects, skills, testimonials, and contact information. Features include responsive design, smooth scrolling navigation, project filtering by type (All, Landing page, React, SPA), interactive sliders, and a modern UI built with styled-components.",
    techStack: "Tech stack : React, TypeScript, Styled Components, React Scroll, Swiper, Typewriter Effect",
    type: "spa",
    livePreview: "",
    viewCode: "https://github.com/Halanau327/portfolio"
  }, {
    id: "english-platform",
    src: englishApp,
    title: "English Learning Platform",
    text: "Interactive platform for learning English with gamification elements. Includes games for learning phrasal verbs, idioms, irregular verbs, double words, and songs. Features learning modes: DINO challenge, Valley of Trials, and Sandbox. The platform includes authentication system, subscriptions, admin panel for content management, and a questionnaire for determining user level.",
    techStack: "Tech stack : Next.js, React, TypeScript, SASS, RTK Query, React Hook Form, Zod, Firebase, Next Auth, Axios, Radix UI",
    type: "spa",
    livePreview: "",
    viewCode: "https://github.com/Halanau327/eng-web"
  }
]

export const Projects = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState<TabsStatusType>("all")

  const filteredProjects = useMemo(() => {
    if (currentFilterStatus === "all") {
      return projectsData
    }
    return projectsData.filter(project => project.type === currentFilterStatus)
  }, [currentFilterStatus])

  function changeFilterStatus(value: TabsStatusType) {
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
            return <Project key={project.id}
                            src={project.src}
                            title={project.title}
                            text={project.text}
                            techStack={project.techStack}
                            livePreview={project.livePreview}
                            viewCode={project.viewCode}/>
          })}
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
}

const StyledProjects = styled.section`

`
