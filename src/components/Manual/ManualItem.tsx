import * as SC from './ManualStyled'

type Props = {
    id:number,
    name: string,
    body: string,
}

const ManualItem:React.FC<Props> = ({id, name, body}) => {

    const count = id < 10 ? "0" + id : id;

    return ( <SC.Item>
        <SC.Count>{count}</SC.Count>
        <SC.Title>{name}</SC.Title>
        <SC.Body>{body}</SC.Body>
    </SC.Item> );
}
 
export default ManualItem;