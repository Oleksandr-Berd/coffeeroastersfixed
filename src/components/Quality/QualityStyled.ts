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

  @media (min-width: 768px) {
    padding-top: 224px;
    padding-bottom: 67px;
    padding-left: 74px;
    padding-right: 74px;
  }

  & > img {
    position: absolute;

    top: 0;
    right: 0;

    transform: translateX(-24px) translateY(-78px);

    width: 279px;
    height: 156px;

    border-radius: 10px;

    @media (min-width: 768px){
transform: translateX(-57px) translateY(-160px);

        width: 573px;
        height: 320px;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;

  font-family: "Frau";
  font-size: 28px;
  color: #fefcf7;

  @media (min-width: 768px){
    font-size: 32px;
    line-height: 1.5;
  }
`;

export const Body = styled.p`
  width: 269px;

  margin-left: auto;
  margin-right: auto;

  font-family: "Bar";
  font-size: 15px;
  line-height: 1.67;
  color: #fefcf7;

  @media (min-width: 768px){
    width: auto;
    margin: 0;
  }
`;
