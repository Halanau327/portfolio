import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    font-family: Jost;
    text-align: center;
    font-size: calc((100vw - 375px)/(1920 - 375) * (120 - 70) + 70px);
    font-weight: 300;
    line-height: 150.02%;
    text-transform: uppercase;
    color: ${theme.colors.accent}
`