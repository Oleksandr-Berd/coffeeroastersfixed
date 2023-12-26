import styled from "@emotion/styled";

export const SummaryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-top: 35px;

  background: rgba(0, 0, 0, 0.8);

  @media (min-width: 768px) {
    height: 90%;

    padding-top: 214px;
    padding-right: 114px;
  }

  @media (min-width: 1440px){
    height: 100%;
  }
`;

export const OrderSummaryCon = styled.div`
  width: 327px;

  border-radius: 8px;

  @media (min-width: 768px) {
    width: 540px;
  }
`;

export const TitleCon = styled.div`
  padding-top: 28px;
  padding-bottom: 28px;
  padding-left: 24px;

  @media (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 40px;
    padding-left: 56px;
  }

  & > h2 {
    font-family: "Frau";
    font-size: 28px;
    line-height: 1.14;

    @media (min-width: 768px) {
      font-size: 40px;
      line-height: 1.2;
    }
  }

  background-color: #333d4b;
  color: #fefcf7;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  border: none;
`;

export const BodyCon = styled.div`
  padding-top: 40px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #fefcf7;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  @media (min-width: 768px) {
    padding-top: 57px;
    padding-bottom: 56px;
    padding-left: 56px;
    padding-right: 56px;
  }
`;

export const Order = styled.p`
  font-family: "Frau";
  font-size: 24px;
  line-height: 1.67;

  color: #83888f;

  & > span {
    color: #0e8784;
  }

  @media (min-width: 768px) {
    margin-bottom: 7px;
  }
`;

export const VerifyBody = styled.p`
  margin-bottom: 24px;

  font-family: "Bar";
  font-size: 15px;
  line-height: 1.67;

  color: #333d4b;

  @media (min-width: 768px) {
    margin-bottom: 47px;

    font-size: 16px;
    line-height: 1.63;
  }
`;

export const CheckoutBtn = styled.button`
  width: 100%;

  padding-top: 15px;
  padding-bottom: 16px;
  padding-left: 33px;
  padding-right: 32px;

  font-family: "Frau";
  font-size: 18px;
  line-height: 1.39;

  background-color: #0e8784;
  color: #fefcf7;

  border-radius: 6px;
  border: none;
`;

export const CheckoutCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > p {
    margin-right: 13px;

    font-family: "Frau";
    font-size: 32px;
    line-height: 1.13;

    color: #333d4b;
  }
`;
