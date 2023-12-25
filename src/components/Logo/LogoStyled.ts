import styled from "@emotion/styled";
import { LayoutType } from "../../utils/types/types";

export const LogoCon = styled.div<LayoutType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.location === "footer" && "center"};

  

  & > p {
    margin-left: 6px;

    font-family: "Frau";
    font-size: ${(props) => (props.location === "header" ? "17px" : "22px")};

    color: ${(props) => (props.location === "header" ? "#333d4b" : "#fefcf7")};

    @media (min-width: 768px) {
      margin-left: 8px;

      font-size: 24px;
    }
  }
`;
