import React from 'react';
import styled from "styled-components";
import Image from "../../../assets/images/icon.png";
import {theme} from "../../../styles/Theme";


export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
                <Link href="/">
                    <HeaderLogo src={Image} alt="Logo"/>
                </Link>
                <HeaderSpan/>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 5vw;
`

const Link = styled.a`

`

const HeaderSpan = styled.span`
    display: inline-block;
    position: relative;
    width: 27px;
    height: 3px;
    background-color: ${theme.colors.secondaryBg};
    
    &::before,
    ::after {
        content: "";
        position: absolute;
        width: 27px;
        height: 3px;
        background-color: ${theme.colors.secondaryBg};
    }

    &::before {
        bottom: -8px;
    }

    &::after {
        top: 16px;
    }
`

const HeaderLogo = styled.img`
    width: 100px;
    height: 70px;
`


// export const HeaderMenu = (props: { menuItems: Array<string> }) => {
//     return (
//         <StyledHeaderMenu>
//             <ul>
//                 {props.menuItems.map((item, index) => {
//                     return <ListItem key={index}>
//                         <Link href="">{item}</Link>
//                     </ListItem>
//                 })}
//             </ul>
//         </StyledHeaderMenu>
//     );
// };
//
// const StyledHeaderMenu = styled.nav`
//     ul {
//         display: flex;
//         gap: 32px;
//         justify-content: center;
//         text-transform: uppercase;
//         font-size: 18px;
//         font-weight: 400;
//         line-height: 126.02%;
//     }
// `
// const ListItem = styled.li`
//     display: none;
//
//     &:hover {
//         transform: scale(120%);
//         transition: transform 1.5s;
//     }
// `
//
// const Link = styled.a`
//     font-size: 16px;
//     font-weight: 400;
//     line-height: 150%;
// `
