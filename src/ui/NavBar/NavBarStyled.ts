import styled from "@emotion/styled";
import { LayoutType } from "../../utils/types/types";

export const NavBarStyled = styled.nav<LayoutType>`
  & > li {
    text-transform: ${(props) => props.location === "footer" && "uppercase"};

    &:not(:last-child) {
      margin-bottom: ${(props) =>
        props.location === "footer" ? "24px" : "32px"};
    }
  }

  & a {
    font-family: ${(props) => (props.location === "footer" ? "Bar" : "Frau")};
    font-weight: ${(props) => props.location === "footer" && "bold"};
    font-size: ${(props) => (props.location === "footer" ? "15px" : "24px")};
    line-height: ${(props) => (props.location === "footer" ? "1.25" : "1.33")};

    color: ${(props) => (props.location === "footer" ? "#83888f" : "#333d4b")};
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > li:not(:last-child) {
      margin-bottom: 0;
      margin-right: 33px;
    }

    & a {
      text-transform: uppercase;

      font-family: "Bar";
      font-size: 15px;
      line-height: 1.25;
      letter-spacing: 1px;
      color:#83888f;
    }
  }

  @media (min-width: 1440px) {
    & a {
      font-size: 12px;

      transition: color 0.3s linear;

      &:hover,
      &:focus,
      &:active {
        color: ${(props) =>
          props.location === "header" ? "#333d4b" : "#fefcf7"};

        transition: color 0.3s linear;
      }
    }
  }
`;
