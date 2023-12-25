import styled from "@emotion/styled";

export const CommonCon = styled.div`
  margin-bottom: 717px;

  text-align: center;

  color: #fefcf7;

  @media (min-width: 768px) {
    margin-bottom: 434px;
  }
`;

export const ContentWrapper = styled.div`
  height: 902px;

  background-color: #2c343e;

  border-radius: 10px;

  @media (min-width: 768px) {
    height: 573px;
  }
`;

export const TitleCon = styled.div`
  padding-top: 64px;
  padding-left: 24px;
  padding-right: 24px;

  margin-bottom: 32px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (min-width: 768px) {
    padding-top: 56px;
    padding-left: 74px;
    padding-right: 74px;

    margin-bottom: 70px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;

  font-family: "Frau";
  font-size: 28px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 1.5;
  }
`;

export const Body = styled.p`
  font-family: "Bar";
  font-size: 15px;
  line-height: 1.67;

  @media (min-width: 768px) {
    width: 470px;

    margin-left: auto;
    margin-right: auto;
  }
`;

export const ProsList = styled.ul`
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 768px) {
    padding-left: 57px;
    padding-right: 58px;
  }
`;

export const ProsItem = styled.li`
  max-width: 279px;

  padding-top: 72px;
  padding-bottom: 51px;
  padding-left: 34px;
  padding-right: 34px;

  background-color: #0e8784;

  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    max-width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding-top: 41px;
    padding-bottom: 41px;
    padding-left: 70px;
    padding-right: 48px;

    text-align: left;
  }
`;

export const ProsItemImg = styled.img`
  margin-bottom: 56px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 55px;
  }
`;

export const ProsItemTitle = styled.h3`
  margin-bottom: 24px;

  font-family: "Frau";
  font-size: 24px;
  line-height: 1.33;

  @media (min-width: 768px){
    margin-bottom: 16px;
  }
`;

export const ProsItemBody = styled.p`
  max-width: 212px;

  font-family: "Bar";
  font-size: 15px;
  line-height: 1.67;

  @media (min-width: 768px){
    max-width: 100%;
  }
`;
