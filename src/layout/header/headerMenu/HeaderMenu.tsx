import React from 'react';
import styled from "styled-components";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
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
const ListItem = styled.li`
    display: none;

    &:hover {
        transform: scale(120%);
        transition: transform 1.5s;
    }
`

const Link = styled.a`
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`
