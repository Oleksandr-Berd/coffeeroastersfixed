import styled from "@emotion/styled";

export const CommonCon = styled.div`
margin-bottom: 120px;

text-align: center;
`

export const SummaryCon = styled.div`
padding-top: 32px;
padding-bottom: 32px;
padding-left: 25px;
padding-right: 24px;

margin-bottom: 56px;

text-align: left;

background-color: #2c343e;
`

export const Title = styled.h2`
margin-bottom: 8px;

text-transform: uppercase;

font-family: "Bar";
font-size: 16px;
line-height: 1.63;

color: #83888f;
`

export const Body = styled.p`
font-family: "Frau";
font-size: 24px;
line-height: 1.67;
color: #fefcf7;

& > span{
    color:#0e8784;
}
`

export const SubmitOrderBtn = styled.button`
display: inline-block;

padding-top: 15px;
padding-bottom: 16px;
padding-left: 36px;
padding-right: 36px;

font-family: "Frau";
font-size: 18px;
line-height: 1.39;

background-color: #0e8784;
color: #fefcf7;

border: none;
border-radius: 6px;

`