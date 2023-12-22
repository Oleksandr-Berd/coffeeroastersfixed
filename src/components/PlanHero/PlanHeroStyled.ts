import styled from "@emotion/styled";

type StyleProps = {
    bg:string;
}

export const CommonCon = styled.div<StyleProps>`
padding-top: 101px;
padding-bottom: 136px;
padding-left: 24px;
padding-right: 24px;

margin-bottom: 120px;

text-align: center;

background: url(${props => props.bg});
background-size: cover;
color: #fefcf7;

border-radius: 10px;
`

export const Title = styled.h2`
margin-bottom: 22px;

font-family: "Frau";
font-size: 40px;
`

export const Body = styled.p`
font-family: "Bar";
font-size: 15px;
line-height: 1.67;
`