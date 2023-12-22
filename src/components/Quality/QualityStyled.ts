import styled from "@emotion/styled";

export const CommonCon = styled.div`
  position: relative;

  padding-top: 142px;
  padding-bottom: 61px;
  padding-left: 24px;
  padding-right: 24px;

  margin-bottom: 120px;

  text-align: center;

  background-color: #2c343e;

  border-radius: 10px;

  & > img {
    position: absolute;

top: 0;
right: 0;

transform: translateX(-24px) translateY(-78px);

    width: 279px;
    height: 156px;

    border-radius: 10px;
  }
`;

export const Title = styled.h2`
margin-bottom: 24px;

font-family: "Frau";
font-size: 28px;
color: #fefcf7;
`

export const Body = styled.p`
width: 269px;

margin-left: auto;
margin-right: auto;

font-family: "Bar";
font-size: 15px;
line-height: 1.67;
color: #fefcf7;

`
