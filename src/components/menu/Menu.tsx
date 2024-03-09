import React from 'react';
import styled from "styled-components";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <a href="">{item}</a>
                    </li>
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
        letter-spacing: 24%; 
    }
`



