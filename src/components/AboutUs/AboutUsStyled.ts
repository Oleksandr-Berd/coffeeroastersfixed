import styled from "@emotion/styled";

type StyledProps = {
  bg: string;
};

export const CommonCon = styled.div<StyledProps>`
  padding-top: 111px;
  padding-bottom: 87px;
  padding-left: 24px;
  padding-right: 24px;

  margin-bottom: 120px;

  text-align: center;

  background: url(${(props) => props.bg});
  background-size: cover;

  border-radius: 10px;

  @media (min-width: 768px) {
    padding-top: 118px;
    padding-bottom: 118px;
    padding-left: 58px;

    margin-bottom: 144px;

    text-align: left;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;

  font-family: "Frau";
  font-size: 28px;
  color: #fefcf7;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 1.25;
  }
`;

export const Body = styled.p`
  width: 259px;

  margin-left: auto;
  margin-right: auto;

  font-family: "Bar";
  font-size: 15px;
  line-height: 1.67;
  color: #fefcf7;

  @media (min-width: 768px) {
    width: 380px;

    margin: 0;
  }
`;
