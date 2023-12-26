import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const PlanLinkStyled = styled(NavLink)`
display: inline-block;

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

@media (min-width: 1440px){
    transition: background-color 0.3s linear;

    &:hover, &:focus, &:active{

        background-color: #66d2cf;
        transition: background-color 0.3s linear;
    }
}
`