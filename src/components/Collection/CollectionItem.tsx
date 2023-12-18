type Props = {
    id:number,
    img:string,
    name: string,
    description:string,
}

const CollectionItem:React.FC<Props> = ({id, img, name, description}) => {
    return ( <li key={id}>
        <img src={img} alt={name} />
        <h4>{name}</h4>
        <p>{description}</p>
    </li> );
}
 
export default CollectionItem;