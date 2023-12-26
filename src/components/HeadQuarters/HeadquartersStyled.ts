import styled from "@emotion/styled";

type StyledProps = {
  img: string;
};

export const CommonCon = styled.div`
  margin-bottom: 120px;

  text-align: center;

  @media (min-width: 768px) {
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
    padding-left: calc(165px - 80px);

    margin-bottom: 168px;

    & > ul {
      justify-content: flex-start;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 72px;

  font-family: "Frau";
  font-size: 24px;
  line-height: 1.33;
  color: #83888f;
`;

export const Item = styled.li<StyledProps>`
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 80px;
  }

  @media (min-width: 768px) {
    text-align: left;

    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 21px;
    }
  }

  @media (min-width: 1440px){
    &:not(:last-child){
        margin-right: 231px;
    }
  }

  &::before {
    display: inline-block;
    content: url(${(props) => props.img});

    margin-bottom: 48px;

    @media (min-width: 768px) {
      height: 50px;
    }

    @media (min-width: 1440px){
        margin-bottom: 46px;
    }
  }

  & > h3 {
    margin-bottom: 22px;

    font-family: "Frau";
    font-size: 28px;
    line-height: 1.3;
    color: #333d4b;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 1.5;
    }

    @media (min-width: 1440px){
        margin-bottom: 24px;

        font-size: 32px;
        line-height: 1.13;
    }
  }

  & > address {
    width: 160px;

    margin-left: auto;
    margin-right: auto;

    font-family: "Bar";
    font-style: normal;
    font-size: 16px;
    line-height: 1.75;
    color: #333d4b;

    @media (min-width: 768px) {
width: 120px;

      margin: 0;
    }
  }
`;
