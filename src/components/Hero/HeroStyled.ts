import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

type StyleProp = {
    bg: string;
}

export const HeroCon = styled.div<StyleProp>`
padding-top: 100px;
padding-bottom: 100px;
padding-left: 24px;
padding-right: 24px;

margin-bottom: 120px;

text-align: center;

background-image: url(${props => props.bg});
background-size: cover;

border-radius: 10px;
`

export const Title = styled.h1`
margin-bottom: 24px;

font-family: "Frau";
font-size: 40px;
color: #fefcf7;
`

export const Body = styled.p`
margin-bottom:39px;

font-family: "Bar";
font-size: 15px;
line-height: 1.67;

color: rgba(254, 252, 247, 80%);
`

export const LinkButton = styled(NavLink)`
padding-top: 15px;
padding-bottom: 16px;
padding-left: 31px;
padding-right: 31px;

font-family: "Frau";
font-size: 18px;
line-height: 1.67;

color: #fefcf7;
background-color: #0e8784;

border-radius: 6px;
`