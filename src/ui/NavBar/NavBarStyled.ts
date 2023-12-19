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
`;
