import styled from "@emotion/styled";

type StyleProps = {
  isMenu: string;
};

export const SharedLayoutStyled = styled.main<StyleProps>`
  height: ${(props) => props.isMenu === "true" && "100vh"};

  padding-top: 32px;
  padding-bottom: ${(props) => (props.isMenu === "false" ? "72px" : "0")};
  padding-left: 24px;
  padding-right: 24px;

  background-color: #fefcf7;

  overflow: hidden;

  @media (min-width: 768px) {
height: ${(props) => props.isMenu === "true" && "110vh"};

    padding-top: 40px;
    padding-left: 39px;
    padding-right: 40px;
  }
`;
