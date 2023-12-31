import styled from "@emotion/styled";

export const CommonCon = styled.div`
  margin-bottom: 120px;

  text-align: center;

  & > ul {
    margin-bottom: 79px;
  }

  @media (min-width: 768px) {
    margin-bottom: 144px;

    text-align: left;

    & > ul {
      display: flex;
      flex-direction: row;
      align-items: flex-start;

      margin-bottom: 44px;
    }
  }

  @media (min-width: 1440px){
    padding-left: calc(165px - 80px);
    padding-right: calc(230px - 80px);

    margin-bottom: 200px;

    & > ul{
        margin-bottom: 64px;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 80px;

  font-family: "Frau";
  font-size: 24px;
  line-height: 1.33;

  color: #83888f;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1440px){
    margin-bottom: 80px;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 56px;
  }

  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }

  @media (min-width: 1440px){
    &:not(:last-child){
        margin-right: 95px;
    }
  }
`;

export const Count = styled.h2`
  margin-bottom: 24px;

  font-family: "Frau";
  font-size: 72px;

  color: #fdd6ba;

  @media (min-width: 768px) {
    margin-bottom: 42px;
  }

  @media (min-width: 1440px){
    margin-bottom: 38px;
  }
`;

export const ItemTitle = styled.h3`
  margin-bottom: 24px;

  font-family: "Frau";
  font-size: 32px;
  line-height: 1.33;

  color: #333d4b;

  @media (min-width: 768px) {
    width: 160px;

    margin-bottom: 38px;

    font-size: 28px;
    line-height: 1.14;
  }

  @media (min-width: 1440px){
    margin-bottom: 42px;

    font-size: 32px;
    line-height: 1.13;
  }
`;

export const Body = styled.p`
  font-family: "Bar";
  font-size: 15px;
  line-height: 1.67;

  color: #333d4b;

  @media (min-width: 1440px){
width: 270px;

    font-size: 16px;
    line-height: 1.63;
  }
`;

