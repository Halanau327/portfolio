import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href={`#${item}`}>{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
        justify-content: center;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 400;
        line-height: 126.02%;
    }
`

const Link = styled.a`
    &:visited {
        color: ${theme.colors.secondaryBg};
    }
`

const ListItem = styled.li`
    &:hover {
        transform: scale(120%);
        transition: transform 1s;
    }
`



