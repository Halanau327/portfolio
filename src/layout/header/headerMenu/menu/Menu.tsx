import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";

export const Menu = (props: { menuItems: Array<string> }) => {
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
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href={`#${item}`}>{item}</Link>
                        </ListItem>
                    })}
                </ul>
            </BurgerMenuPopup>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`

`

const BurgerMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;    
    background-color: darkgray;
    opacity: 0.95;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
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
            `}
        }
    }

    
`





