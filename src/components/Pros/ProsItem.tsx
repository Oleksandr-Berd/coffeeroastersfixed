import * as SC from './ProsStyled'

type Props = {
  // id: number,
  name: string;
  img: string;
  body: string;
};

const ProsItem: React.FC<Props> = ({ name, img, body }) => {
  return (
    <SC.ProsItem>
      <SC.ProsItemImg src={img} alt={name} />
      <div>
      <SC.ProsItemTitle>{name}</SC.ProsItemTitle>
      <SC.ProsItemBody>{body}</SC.ProsItemBody>
      </div>
    </SC.ProsItem>
  );
};

export default ProsItem;
