import styled from "@emotion/styled";

type StyleProps = {
  bg: string;
};

export const CommonCon = styled.div<StyleProps>`
  padding-top: 101px;
  padding-bottom: 136px;
  padding-left: 24px;
  padding-right: 24px;

  margin-bottom: 120px;

  text-align: center;

  background: url(${(props) => props.bg});
  background-size: cover;
  color: #fefcf7;

  border-radius: 10px;

  @media (min-width: 768px) {
    padding-top: 127px;
    padding-bottom: 126px;
    padding-left: 58px;
    padding-right: 259px;

    margin-bottom: 144px;

    text-align: left;
  }
`;

export const Title = styled.h2`
  margin-bottom: 22px;

  font-family: "Frau";
  font-size: 40px;

  @media (min-width: 768px) {
    margin-bottom: 24px;

    font-size: 48px;
  }
`;

export const Body = styled.p`
  font-family: "Bar";
  font-size: 15px;
  line-height: 1.67;
`;
