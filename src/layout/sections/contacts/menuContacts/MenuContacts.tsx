import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {items} from "../../../header/headerMenu/menu/Menu";
import {Link} from "react-scroll";

export const MenuContacts = () => {
    return (
        <StyledMenu>
            <ul>
                {items.map((item, index) => {
                    return <ListItem key={index}>
                        <MenuLink to={item.href}
                                  smooth={true}>
                            {item.title}</MenuLink>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        text-align: center;
        gap: 30px;
        font-size: 19px;
        font-weight: 400;
        line-height: 126.02%;
        text-transform: uppercase;
    }
`

const MenuLink = styled(Link)`
    &:visited {
        color: ${theme.colors.secondaryBg};
    }
    cursor: pointer;
`

const ListItem = styled.li`
    &:hover {
        transform: scale(120%);
        transition: transform 0.7s;
    }
`



