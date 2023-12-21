import styled from "@emotion/styled";

type StyleProps = {
    isMenu: string;
}

export const SharedLayoutStyled = styled.main<StyleProps>` 
height: ${props => props.isMenu === "true"? "100vh" : "fit-content"};

padding-top: 32px;
padding-bottom:${props => props.isMenu === "false"? "72px" : "0"};
padding-left: 24px;
padding-right: 24px;

background-color: #FEFCF7;

overflow: hidden;
`

