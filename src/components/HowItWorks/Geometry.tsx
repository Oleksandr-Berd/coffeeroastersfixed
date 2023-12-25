import * as SC from "./HowItWorksStyled";

const Geometry: React.FC = () => {
  return (
    <SC.GeometryCon>
      <SC.CirclesCon>
        <SC.Circle></SC.Circle>
        <SC.Circle></SC.Circle>
        <SC.Circle></SC.Circle>
      </SC.CirclesCon>
      <SC.Line></SC.Line>
    </SC.GeometryCon>
  );
};

export default Geometry;
