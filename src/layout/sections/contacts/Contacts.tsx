import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Menu} from "../../../components/menu/Menu";
import {Container} from "../../../components/Container";
import contactsIcon from "./../../../assets/images/icon.png"

const itemsContacts = ["Skills", "Projects", "Testimony", "Contacts"]


export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper wrap="wrap">
                    <FlexWrapper direction="column">
                        <Logo src={contactsIcon}/>
                        <TextContactsLeft>Subscribe to newsletter to get some updates related with branding, designs and
                            more.</TextContactsLeft>
                        <InputContacts placeholder="write your email address"/>
                        <SubscribeButton type={"submit"}>subscribe it</SubscribeButton>
                    </FlexWrapper>

                    <Menu menuItems={itemsContacts}/>

                    <FlexWrapper direction="column">
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
    min-height: 500px;
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
    letter-spacing: 2%;
    max-width: 304px;
`

const TextContactsRight = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 225.02%;
    letter-spacing: 2%;
    max-width: 442px;
`

const InputContacts = styled.input`
    font-size: 17px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 2%;
    text-transform: capitalize;
    height: 50px;
    width: 304px;
`

const SubscribeButton = styled.button`
    font-size: 17px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 10%;
    text-align: center;
    text-transform: uppercase;
    height: 50px;
    width: 304px;
    background-color: #131212;
    color: white;
    border: none;
`

const Email = styled.a`
    font-size: 30px;
    font-weight: 300;
    line-height: 183.02%;
    letter-spacing: 1%;
`

const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Logo = styled.img`
    width: 100px;
    height: 70px;
`