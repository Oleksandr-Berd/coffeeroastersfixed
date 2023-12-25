import { useMediaQuery } from 'usehooks-ts';
import * as SC from './CollectionStyled'

type Props = {
  id: number;
  img: string;
  name: string;
  description: string;
};

const CollectionItem: React.FC<Props> = ({ id, img, name, description }) => {

const isTablet = useMediaQuery("(min-width:768px)")

  return (
    <SC.Item key={id}>
      <SC.Image src={img} alt={name} style={isTablet ? {width:"256px", height:"193px"} : {width:"200px", height:"151px"}}/>
      <div>
      <SC.SubTitle>{name}</SC.SubTitle>
      <SC.Body>{description}</SC.Body>
      </div>
    </SC.Item>
  );
};

export default CollectionItem;
