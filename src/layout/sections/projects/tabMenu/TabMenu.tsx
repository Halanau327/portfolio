import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";

export type TabsStatusType = "all" | "landing" | "react" | "spa"

type TabMenuPropsType = {
    tabsItems: Array<{ status: TabsStatusType, title: string }>
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledProjectsMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link active={props.currentFilterStatus === item.status} as={"button"} onClick={() => {
                            props.changeFilterStatus(item.status)}}>{item.title}</Link>
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
        margin: 30px 0 30px;
    }

`

const ListItem = styled.li`

`

const Link = styled.a<{ active: boolean }>`
    font-size: calc((100vw - 375px) / (1920 - 375) * (19 - 17) + 17px);
    font-weight: 400;
    line-height: 126.02%;
    text-transform: uppercase;
    cursor: pointer;

    &:visited {
        color: ${theme.colors.secondaryBg};
    }
    
    &:hover {
        transform: scale(120%);
        transition: transform 0.7s;
    }
    
    ${props => props.active && css<{active:boolean}>`
        transform: scale(120%);
        transition: transform 0.7s;
    `}
`