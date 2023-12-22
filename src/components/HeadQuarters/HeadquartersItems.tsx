import * as SC from './HeadquartersStyled'

type Props = {
    name: string,
    img: string,
    address: string,
    tel:string
}

const HeadquartersItems:React.FC<Props> = ({name, img, address, tel}) => {
    return ( <SC.Item img={img}>
        <h3>{name}</h3>
        <address>{address}</address>
        <address>{tel}</address>
    </SC.Item> );
}
 
export default HeadquartersItems;