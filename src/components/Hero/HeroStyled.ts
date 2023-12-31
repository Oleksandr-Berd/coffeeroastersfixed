import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

type StyleProp = {
  bg: string;
};

export const HeroCon = styled.div<StyleProp>`
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 24px;
  padding-right: 24px;

  margin-bottom: 120px;

  text-align: center;

  background-image: url(${(props) => props.bg});
  background-size: cover;

  border-radius: 10px;

  @media (min-width: 768px) {
    padding-top: 104px;
    padding-bottom: 104px;
    padding-left: 58px;

    margin-bottom: 203px;

    text-align: left;
  }

  @media (min-width: 1440px) {
    padding-top: 117px;
    padding-bottom: 116px;
    padding-left: 85px;

    margin-bottom: 262px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 24px;

  font-family: "Frau";
  font-size: 40px;
  color: #fefcf7;

  @media (min-width: 768px) {
    width: 300px;

    font-size: 48px;
  }

  @media (min-width: 1440px) {
    width: 490px;

    margin-bottom: 32px;

    font-size: 72px;
  }
`;

export const Body = styled.p`
  margin-bottom: 39px;

  font-family: "Bar";
  font-size: 15px;
  line-height: 1.67;

  color: rgba(254, 252, 247, 80%);

  @media (min-width: 768px) {
    width: 360px;

    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    width: 400px;

    margin-bottom: 56px;

    font-size: 16px;
    line-height: 1.63;
  }
`;

export const LinkButton = styled(NavLink)`
  padding-top: 15px;
  padding-bottom: 16px;
  padding-left: 31px;
  padding-right: 31px;

  font-family: "Frau";
  font-size: 18px;
  line-height: 1.67;

  color: #fefcf7;
  background-color: #0e8784;

  border-radius: 6px;
`;
