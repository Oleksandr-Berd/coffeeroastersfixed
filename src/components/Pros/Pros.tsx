import ProsList from "./ProsList";
import * as SC from "./ProsStyled";

const Pros = () => {
  return (
    <SC.CommonCon>
      <SC.ContentWrapper>
        <SC.TitleCon>
          <SC.Title>Why choose us?</SC.Title>
          <SC.Body>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </SC.Body>
        </SC.TitleCon>
        <ProsList/>
      </SC.ContentWrapper>
    </SC.CommonCon>
  );
};

export default Pros;
