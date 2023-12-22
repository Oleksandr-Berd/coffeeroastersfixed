import styled from "@emotion/styled";

type StyledProps = {
    bg: string;
}

export const CommonCon = styled.div<StyledProps>`
padding-top: 111px;
padding-bottom: 87px;
padding-left: 24px;
padding-right: 24px;

margin-bottom: 120px;

text-align: center;

background: url(${props => props.bg});
background-size: cover;

border-radius: 10px;
`

export const Title = styled.h2`
margin-bottom: 24px;

font-family: "Frau";
font-size: 28px;
color: #fefcf7;
`

export const Body = styled.p`
width: 259px;

font-family: "Bar";
font-size: 15px;
line-height: 1.67;
color: #fefcf7;
`