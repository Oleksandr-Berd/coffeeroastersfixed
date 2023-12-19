import * as SC from "./CollectionStyled";

import CollectionList from "./CollectionList";

const Collection: React.FC = () => {
  return (
    <SC.CommonCon>
        <SC.Title>our collection</SC.Title>
      <CollectionList />
    </SC.CommonCon>
  );
};

export default Collection;
