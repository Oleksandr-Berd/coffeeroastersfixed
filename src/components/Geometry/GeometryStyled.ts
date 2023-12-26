import styled from "@emotion/styled";
import { GeometryType } from "../../utils/types/types";

export const GeometryCon = styled.div`
  position: relative;

  margin-bottom: 48px;

  @media (min-width: 1440px){
    margin-bottom: 67px;
  }
`;

export const CirclesCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Circle = styled.div<GeometryType>`
  width: 31px;
  height: 31px;

  z-index: ${props => props.page === "home" ? "2" : "0" };

  background-color: ${props => props.page ==="home" ? "#fefcf7" : "transparent"};
  border: 2px solid #0e8784;

  border-radius: 50%;

  &:not(:last-child) {
    margin-right: 202px;

    @media (min-width: 1440px){
        margin-right: 349px;
    }
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  transform: translateX(21px) translateY(17px);

  width: 467px;
  height: 2px;

  background-color: #fdd6ba;

  @media (min-width: 1440px){
    width: 760px;
  }
`;