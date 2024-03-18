import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    background?: string
    width?: string
    height?: string
    margin?: string
    vertical?: string
    padding?: string
    gap?: string
    cursor?: string
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    background-color: ${props => props.background};
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    vertical-align: ${props => props.vertical};
    padding: ${props => props.padding};
    gap: ${props => props.gap};
    cursor: ${props => props.cursor};
`