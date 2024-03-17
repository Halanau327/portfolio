import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

export const ProjectsMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledProjectsMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledProjectsMenu>
    );
};

const StyledProjectsMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
        justify-content: center;
        text-transform: uppercase;
        font-size: calc((100vw - 375px)/(1920 - 375) * (19 - 17) + 17px);
        font-weight: 400;
        line-height: 126.02%;
        margin: 30px 0 30px;
    }
`
const ListItem = styled.li`
    &:hover {
        transform: scale(120%);
        transition: transform 1s;
    }
`

const Link = styled.a`
    &:visited {
        color: ${theme.colors.secondaryBg};
    }
`
