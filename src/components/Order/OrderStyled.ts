import styled from "@emotion/styled";

type StyleProps = {
  isOptions: boolean;
};

type ActiveProps = {
  status?: any;
  isDisabled?: any;
};

export const CommonList = styled.ul`
  margin-bottom: 120px;

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const Item = styled.li<StyleProps>`
  &:not(:last-child) {
    margin-bottom: 110px;

    @media (min-width: 768px) {
      margin-bottom: 100px;
    }

    @media (min-width: 1440px) {
      margin-bottom: 88px;
    }
  }

  & img {
    transform: ${(props) => (props.isOptions ? "rotate(180deg)" : 0)};
  }

  @media (min-width: 768px) {
    & > ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const TitleCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;

  @media (min-width: 1440px) {
    width: 730px;

    margin-bottom: 56px;
  }
`;

export const ToggleBtn = styled.button`
  background-color: transparent;

  border: none;
`;

export const Title = styled.h2<ActiveProps>`
  width: 200px;

  font-family: "Frau";
  font-size: 24px;
  line-height: 1.17;

  color: ${(props) => (props.status === "disabled" ? "#f4f1eb" : "#83888f")};

  @media (min-width: 768px) {
    width: auto;

    font-size: 32px;
    line-height: 1.5;
  }

  @media (min-width: 1440px) {
    font-size: 40px;
    line-height: 1.2;
  }
`;

export const OptionsItem = styled.li<ActiveProps>`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 25px;
  padding-right: 25px;

  background-color: ${(props) =>
    props.status === "active" ? "#0e8784" : "#f4f1eb"};
  color: ${(props) => (props.status === "active" ? "#f4f1eb" : "#333d4b")};

  border-radius: 8px;

  @media (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 84px;
    padding-left: 25px;
    padding-right: 26px;
  }

  @media (min-width: 1440px) {
    transition: all 0.3s linear;

    &:hover,
    &:focus,
    &:active {
      background-color: #fdd6ba;
      color: #333d4b;
      cursor: pointer;
      transition: all 0.3s linear;
    }
  }

  &:not(:last-child) {
    margin-bottom: 16px;

    @media (min-width: 768px) {
      margin-bottom: 0;

      margin-right: 10px;
    }

    @media (min-width: 1440px){
        margin-right: 23px;
    }
  }
`;

export const OptionsItemTitle = styled.h3`
  margin-bottom: 8px;

  font-family: "Frau";
  font-size: 24px;
  line-height: 1.33;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const OptionsItemBody = styled.p`
  width: 240px;

  font-family: "Bar";
  font-size: 16px;
  line-height: 1.63;

  @media (min-width: 768px) {
    width: auto;
  }
`;

//Desk

export const CommonCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  padding-left: calc(165px - 80px);
  padding-right: calc(165px - 80px);

  margin-bottom: 88px;
`;

export const NavList = styled.ul`
  margin-right: 125px;
`;

export const NavItemStyled = styled.li<ActiveProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: 24px;

  &:not(:last-child) {
    width: 255px;

    padding-bottom: 24px;

    border-bottom: 1px solid #83888f;
  }

  &:first-of-type {
    padding-top: 0;
  }

  & > p {
    font-family: "Frau";
    font-size: 24px;
    line-height: 1.33;

    color: ${(props) =>
      props.status && props.isDisabled !== "disabled"
        ? "#333d4b"
        : props.isDisabled === "disabled"
        ? "#f4f1eb"
        : "#83888f"};
  }

  & > p:first-of-type {
    margin-right: 29px;
  }
`;
