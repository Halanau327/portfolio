import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction="column" align="center">
                <Icon iconId={props.iconId} width="120px" height="120px" viewBox="0 0 120 120"/>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    max-width: 370px;
    width: 100%;
    padding: 10px 20px 50px;
`

const SkillTitle = styled.h3`
    margin: 50px 0 15px;
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    
`

const SkillText = styled.p`
    text-align: center;
    font-size: 19px;
    font-weight: 300;
    line-height: 126.02%;
    box-shadow: 0 -5px 20px 0 rgba(0, 0, 0, 0.5);
    height: 260px;
    padding:20px;
`
