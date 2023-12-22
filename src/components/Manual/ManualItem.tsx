type Props = {
    id:number,
    name: string,
    body: string,
}

const ManualItem:React.FC<Props> = ({id, name, body}) => {

    const count = id < 10 ? "0" + id : id;

    return ( <li>
        <h2>{count}</h2>
        <h3>{name}</h3>
        <p>{body}</p>
    </li> );
}
 
export default ManualItem;