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

  transform: translateY(90px);

  background: linear-gradient(rgb(254, 252, 247), 80%, rgb(254, 252, 247, 0.5));

`

export const OrderSummaryCon = styled.div`
  position: absolute;

  padding-top: 40px;

  text-align: center;
  `