import styled from "@emotion/styled";

export const CommonCon = styled.div`
width: calc(100% + 24px * 2);

transform: translateX(-24px);

padding-top: 80px;
padding-bottom: 79px;

margin-bottom: 120px;

text-align: center;

background-color: #2c343e;
color: #fefcf7;

border-radius: 10px;
`

export const Item = styled.li`
&:not(:last-child){
    margin-bottom: 56px;
}
`

export const Count = styled.h2`
margin-bottom: 24px;

font-family: "Frau";
font-size: 72px;
color: #fdd6ba;
`

export const Title = styled.h3`
margin-bottom: 24px;

font-family: "Frau";
font-size: 28px;
line-height: 1.14;

color: #fefcf7;
`

export const Body = styled.p`
width: 300px;

margin-left: auto;
margin-right: auto;

font-family: "Bar";
font-size: 15px;
line-height: 1.67;

color: #fefcf7;
`