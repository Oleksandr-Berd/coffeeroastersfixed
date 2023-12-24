import styled from "@emotion/styled";

export const SummaryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90%;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-top: 35px;

  background: rgba(0, 0, 0, 0.8);
`;

export const OrderSummaryCon = styled.div`
  width: 327px;

  border-radius: 8px;
`;

export const TitleCon = styled.div`

  padding-top: 28px;
  padding-bottom: 28px;
  padding-left: 24px;


  & > h2{
    font-family: "Frau";
  font-size: 28px;
  line-height: 1.14;
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
`

export const Order = styled.p`
font-family: "Frau";
    font-size: 24px;
    line-height: 1.67;

    color: #83888f;

    & > span{
    color:#0e8784
}
`

export const VerifyBody = styled.p`

margin-bottom: 24px;

font-family: "Bar";
font-size: 15px;
line-height: 1.67;

color:#333d4b;
`

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
color:#fefcf7;

border-radius: 6px;
border: none;
`