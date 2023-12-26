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

  @media (min-width: 768px) {
    width: calc(100% + 1px);

    transform: translateX(-40px);

    padding-top: 97px;
    padding-bottom: 70px;
    padding-left: 40px;
    padding-right: 39px;

    margin-bottom: 144px;

    text-align: left;

    & > ul {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
  }

  @media (min-width: 1440px) {
    width: auto;

    transform: translateX(0);

    padding-top: 100px;
    padding-bottom: 99px;
    padding-left: 85px;
    padding-right: 150px;

    margin-bottom: 168px;

    & > ul {
      justify-content: flex-start;
    }
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 56px;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }

    @media (min-width: 1440px) {
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

  @media (min-width: 1440px) {
    margin-bottom: 38px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 24px;

  font-family: "Frau";
  font-size: 28px;
  line-height: 1.14;

  color: #fefcf7;

  @media (min-width: 768px) {
    width: 160px;

    margin-bottom: 38px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 42px;

    font-size: 32px;
    line-height: 1.13;
  }
`;

export const Body = styled.p`
  width: 300px;

  margin-left: auto;
  margin-right: auto;

  font-family: "Bar";
  font-size: 15px;
  line-height: 1.67;

  color: #fefcf7;

  @media (min-width: 768px) {
    width: 210px;

    margin: 0;
  }

  @media (min-width: 1440px) {
    width: 285px;

    font-size: 16px;
    line-height: 1.63;
  }
`;
