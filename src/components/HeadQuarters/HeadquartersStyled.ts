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

  &::before {
    display: inline-block;
    content: url(${(props) => props.img});

    margin-bottom: 48px;

    @media (min-width: 768px) {
      height: 50px;
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
      margin: 0;
    }
  }
`;
