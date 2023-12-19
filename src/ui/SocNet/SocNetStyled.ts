import styled from "@emotion/styled";

export const SocNetBar = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

& > li:not(:last-child){
    margin-right: 24px;
}
`