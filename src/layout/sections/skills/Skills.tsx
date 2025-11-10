import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";


export const Skills = () => {
  return (
    <StyledSkills id={"Skills"}>
      <Container>
        <SectionTitle>skills</SectionTitle>
        <FlexWrapper wrap="wrap" justify="space-around">
          <Skill iconId="javascript"
                 title="javascript"
                 description="Proficient in JavaScript, adept at building dynamic web applications. Experienced in DOM manipulation, event handling, and utilizing popular libraries/frameworks for enhanced functionality. Strong understanding of JavaScript's core concepts"/>
          <Skill iconId="typescript"
                 title="typescript"
                 description="Experienced in TypeScript for robust and type-safe coding. Proficient with static typing, interfaces, and advanced language features. Skilled in leveraging TypeScript for scalable and maintainable applications."/>
          <Skill iconId="react"
                 title="react"
                 description="Skilled in React framework, adept at building dynamic and interactive user interfaces. Proficient in component-based development, state management, and integrating APIs. Experienced in React hooks and popular libraries for enhanced functionality."/>
          <Skill iconId="nextjs"
                 title="nextjs"
                 description="Proficient with Next.js for production-grade React applications. Experienced in SSR, SSG, ISR, file-based routing (App Router), Server Components, and built‑in data fetching/caching. Skilled at optimizing performance and UX via Image/Font optimization, metadata/SEO"/>
          <Skill iconId="vue"
                 title="vue"
                 description="Skilled in Vue for building reactive, maintainable UIs. Proficient with Single File Components, Composition API, Vue Router, and state management with Pinia. Experienced in reusable component patterns, scoped styles, transitions, and integrating REST/GraphQL APIs."/>
          <Skill iconId="tailwindcss"
                 title="tailwind css"
                 description="Proficient with Tailwind CSS for fast, utility‑first styling. Experienced in responsive design, dark mode, theming via tailwind.config, JIT mode, and the plugin ecosystem. Skilled at producing consistent, accessible UI with lean bundles via content scanning and composable class patterns."/>

        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`

`