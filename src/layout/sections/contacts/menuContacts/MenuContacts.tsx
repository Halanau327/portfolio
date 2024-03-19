import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";


export const MenuContacts = (props: { menuItems: Array<string> }) => {
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
        flex-direction: column;
        gap: 30px;
        font-size: 19px;
        font-weight: 400;
        line-height: 126.02%;
        justify-content: center;
        text-transform: uppercase;
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



