import * as SC from "./OrderStyled";

type Props = {
  id: number;
  title: string;
isOpen:number[],
status:any,
};

const NavItem: React.FC<Props> = ({ id, title, isOpen, status }) => {

const countMorph = (id:number):string | number =>{

const count = id < 10 ? "0" + id : id

return count 

}

  return (
    <SC.NavItemStyled status={isOpen.includes(id)} isDisabled={status === "disabled" && id === 4 ? "disabled" : null}>
      <p>{countMorph(id)}</p>
      <p>{title}</p>
    </SC.NavItemStyled>
  );
};

export default NavItem;
