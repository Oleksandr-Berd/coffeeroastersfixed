import { GeometryType } from "../../utils/types/types";
import * as SC from "./GeometryStyled";

const Geometry: React.FC<GeometryType> = ({page}) => {
  return (
    <SC.GeometryCon>
      <SC.CirclesCon>
        <SC.Circle page={page}></SC.Circle>
        <SC.Circle page={page}></SC.Circle>
        <SC.Circle page={page}></SC.Circle>
      </SC.CirclesCon>
      <SC.Line></SC.Line>
    </SC.GeometryCon>
  );
};

export default Geometry;
