import * as SC from "./ProsStyled";

import { pros } from "../../db/pros";
import ProsItem from "./ProsItem";

const ProsList: React.FC = () => {
  return (
    <SC.ProsList>
      {pros.map(({ id, img, name, body }) => (
        <ProsItem key={id} img={img} name={name} body={body} />
      ))}
    </SC.ProsList>
  );
};

export default ProsList;
