import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
padding-top: 54px;
padding-bottom: 54px;

text-align: center;

background-color: #2c343e;

& > *:not(:last-child){
    margin-bottom: 48px;
}

@media (min-width: 768px){
    & > *:first-of-type{
        margin-bottom: 34px;
    }

    & > *:nth-child(2){
        margin-bottom: 65px;
    }
}
`