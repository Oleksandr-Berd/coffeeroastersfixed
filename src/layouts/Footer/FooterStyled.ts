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

@media (min-width: 1440px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-top: 47px;
    padding-bottom: 47px;
    padding-left: 85px;
    padding-right: 85px;

    & > *:first-of-type{
        margin-bottom: 0;
    }

    & > *:nth-of-type(2){
        margin-bottom: 0;
    }
}
`