import * as SC from './SocNetStyled'

import { socNetLinks } from "../../db/socNetLinks";
import SocNetItem from "./SocNetItem";

const SocNet: React.FC = () => {
  return (
    <SC.SocNetBar>
      {socNetLinks.map(({ icon, id, path }) => (
        <SocNetItem key={id} icon={icon} path={path} />
      ))}
    </SC.SocNetBar>
  );
};

export default SocNet;
