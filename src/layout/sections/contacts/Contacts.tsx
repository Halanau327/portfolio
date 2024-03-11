import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Menu} from "../../../components/menu/Menu";
import {Container} from "../../../components/Container";
import contactsIcon from "./../../../assets/images/icon.png"
import {theme} from "../../../styles/Theme";

const itemsContacts = ["Skills", "Projects", "Testimony", "Contacts"]


export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper wrap="wrap" justify="space-around">
                    <FlexWrapper direction="column">
                        <Logo src={contactsIcon}/>
                        <TextContactsLeft>Subscribe to newsletter to get some updates related with branding, designs and
                            more.</TextContactsLeft>
                        <InputContacts placeholder="write your email address"/>
                        <SubscribeButton type={"submit"}>subscribe it</SubscribeButton>
                    </FlexWrapper>
                    <FlexWrapper align="center">
                        <Menu menuItems={itemsContacts}/>
                    </FlexWrapper>
                    <FlexWrapper direction="column" justify="center">
                        <TextContactsRight>Just feel free to contact if you wanna collaborate with me, or simply have a
                            conversation.</TextContactsRight>
                        <Email>a.halanau@gmail.com</Email>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    nav {
        ul {
            flex-direction: column;
        }
    }
`

const TextContactsLeft = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 225.02%;
    max-width: 300px;
`

const TextContactsRight = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 225.02%;
    max-width: 340px;
`

const InputContacts = styled.input`
    font-size: 17px;
    font-weight: 400;
    line-height: 23px;
    text-transform: capitalize;
    height: 50px;
    width: 300px;
    padding-left: 25px;
    margin-bottom: 15px;
    color: ${theme.colors.secondaryBg};
    background-color: ${theme.colors.font};
    border: none;
 
    &::placeholder {
        color: ${theme.colors.secondaryBg};
    }
`

const SubscribeButton = styled.button`
    font-size: 17px;
    font-weight: 600;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
    height: 50px;
    width: 300px;
    background-color: ${theme.colors.secondaryBg};
    color: ${theme.colors.primaryBg};
    border: none;
`

const Email = styled.a`
    font-size: 30px;
    font-weight: 300;
    line-height: 183.02%;
    text-decoration: underline;
    text-decoration-color: ${theme.colors.secondaryBg};
 
`

const Logo = styled.img`
    width: 100px;
    height: 70px;
`