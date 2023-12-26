import styled from "@emotion/styled";

type StyleProps = {
    status:boolean,
}

export const CommonCon = styled.div`
  margin-bottom: 120px;

  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 144px;
  }

  @media (min-width: 1440px) {
    padding-right: calc(165px - 80px);

    margin-bottom: 168px;

    text-align: right;
  }
`;

export const SummaryCon = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 25px;
  padding-right: 24px;

  margin-bottom: 56px;

  text-align: left;

  background-color: #2c343e;

  border-radius: 10px;

  @media (min-width: 768px) {
    padding-top: 27px;
    padding-bottom: 27px;
    padding-left: 44px;
    padding-right: 43px;

    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    width: 730px;

    padding-left: 64px;
    padding-right: 64px;

    margin-left: auto;
  }
`;

export const Title = styled.h2`
  margin-bottom: 8px;

  text-transform: uppercase;

  font-family: "Bar";
  font-size: 16px;
  line-height: 1.63;

  color: #83888f;
`;

export const Body = styled.p`
  font-family: "Frau";
  font-size: 24px;
  line-height: 1.67;

  color: #fefcf7;

  & > span {
    color: #0e8784;
  }

`;

export const SubmitOrderBtn = styled.button<StyleProps>`
  display: inline-block;

  padding-top: 15px;
  padding-bottom: 16px;
  padding-left: 36px;
  padding-right: 36px;

  font-family: "Frau";
  font-size: 18px;
  line-height: 1.39;

  background-color:${props => props.status ? "#e2dedb" : " #0e8784"};
  color: #fefcf7;

  border: none;
  border-radius: 6px;
`;
