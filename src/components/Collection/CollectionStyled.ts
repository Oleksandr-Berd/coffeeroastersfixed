import styled from "@emotion/styled";

export const CommonCon = styled.div`
  margin-bottom: 120px;

  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 13px;

  font-family: "Frau";
  font-size: 40px;
  line-height: 1.8;

  background: -webkit-linear-gradient(#83888f 50%, #fefcf7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Item = styled.li`
  padding-left: calc(46px - 20px);
  padding-right: calc(46px - 20px);

  &:not(:last-child) {
    margin-bottom: 48px;
  }
`;

export const Image = styled.img`
  margin-bottom: 24px;
`;

export const SubTitle = styled.h4`
  margin-bottom: 16px;

  font-family: "Frau";
  font-size: 24px;
  line-height: 1.33;

  color: #333d4b;
`;

export const Body = styled.p`
  font-family: "Bar";
  font-size: 15px;
  line-height: 1.67;

  color: #333d4b;
`;
