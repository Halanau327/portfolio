import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu isOpen={true}>
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

const StyledMenu = styled.nav<{isOpen: boolean}>`
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: bisque;
    opacity: 0.5;
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
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



