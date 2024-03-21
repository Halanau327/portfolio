import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Link} from "react-scroll";

const items = [
    {
        title: "Home",
        href: "Home"
    },
    {
        title: "Skills",
        href: "Skills"
    },
    {
        title: "Projects",
        href: "Projects"
    },
    {
        title: "Testimony",
        href: "Testimony"
    },
    {
        title: "Contacts",
        href: "Contacts"
    }
]

export const Menu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <StyledMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
            <BurgerMenuPopup isOpen={menuIsOpen} onClick={() => {
                setMenuIsOpen(false)
            }}>
                <ul>
                    {items.map((item, index) => {
                        return <ListItem key={index}>
                            <MenuLink
                                to={item.href}
                                smooth={true} onClick={() => {
                                setMenuIsOpen(false)
                            }}>
                                {item.title}</MenuLink>
                        </ListItem>
                    })}
                </ul>
            </BurgerMenuPopup>
        </StyledMenu>
    );
};

const StyledMenu = styled.div`

`

const BurgerMenuPopup = styled.nav<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999;
    background-color: white;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        font-size: 19px;
        font-weight: 400;
        line-height: 126.02%;
        justify-content: center;
        text-transform: uppercase;
    }
`

const MenuLink = styled(Link)`
    text-align: center;
    cursor: pointer;

    &:visited {
        color: ${theme.colors.secondaryBg};
    }
`

const ListItem = styled.li`
    &:hover {
        transform: scale(120%);
        transition: transform 0.7s;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -120px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999;
    cursor: pointer;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.secondaryBg};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.secondaryBg};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.secondaryBg};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `
            }
        }
    }
`





