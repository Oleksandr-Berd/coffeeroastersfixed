import styled from "@emotion/styled";

export const CommonCon = styled.div`
  margin-bottom: 198px;

  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 304px;

    text-align: left;
  }

  & > img {
    width: 327px;
    height: 400px;

    margin-bottom: 48px;

    border-radius: 10px;

    @media (min-width: 768px){
        width: 281px;
        height: 470px;

        margin-bottom: 0;
        margin-right: 69px;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 30px;

  font-family: "Frau";
  font-size: 32px;
  line-height: 1.5;
  color: #333d4b;
`;

export const Body = styled.p`
  width: 310px;

  margin-left: auto;
  margin-right: auto;

  font-family: "Bar";
  font-size: 15px;
  line-height: 1.67;
  color: #333d4b;

`;
