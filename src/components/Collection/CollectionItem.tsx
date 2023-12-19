import * as SC from './CollectionStyled'

type Props = {
  id: number;
  img: string;
  name: string;
  description: string;
};

const CollectionItem: React.FC<Props> = ({ id, img, name, description }) => {
  return (
    <SC.Item key={id}>
      <SC.Image src={img} alt={name} />
      <SC.SubTitle>{name}</SC.SubTitle>
      <SC.Body>{description}</SC.Body>
    </SC.Item>
  );
};

export default CollectionItem;
