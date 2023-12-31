import styled from "@emotion/styled";

export const CommonCon = styled.div`
  margin-bottom: 120px;

  text-align: center;

  @media (min-width: 768px) {
    position: relative;

    margin-bottom: 144px;

    text-align: left;
  }

  @media (min-width: 1440px) {

    margin-bottom: 200px;

    & > ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      padding-left: calc(165px - 80px);
      padding-right: calc(165px - 80px);
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 13px;

  font-family: "Frau";
  font-size: 40px;
  line-height: 1.8;

  background: -webkit-linear-gradient(#83888f 50%, #fefcf7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;

    transform: translateY(-50%);

    font-size: 116px;
    line-height: 1.33;

    background: -webkit-linear-gradient(#83888f 30%, #fefcf7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (min-width: 1440px) {

    transform: translateX(80px) translateY(-52%);

    font-size: 190px;
    line-height: 2.08;
  }
`;

export const Item = styled.li`
  padding-left: calc(46px - 20px);
  padding-right: calc(46px - 20px);

  &:not(:last-child) {
    margin-bottom: 48px;
  }

  @media (min-width: 768px) {
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: calc(97px - 39px);
    padding-right: calc(98px - 40px);

    &:not(:last-child) {
      margin-bottom: 32px;
    }

    & > div {
      width: 260px;
    }
  }

  @media (min-width: 1440px) {
    display: block;

    text-align: center;

    padding: 0;

    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 30px;
    }
  }
`;

export const Image = styled.img`
  margin-bottom: 24px;

  @media (min-width: 768x) {
    width: 256px;
    height: 193px;

    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    margin-bottom: 72px;
  }
`;

export const SubTitle = styled.h4`
  margin-bottom: 16px;

  font-family: "Frau";
  font-size: 24px;
  line-height: 1.33;

  color: #333d4b;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const Body = styled.p`
  font-family: "Bar";
  font-size: 15px;
  line-height: 1.67;

  color: #333d4b;

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.63;
  }
`;
