import * as SC from './HowItWorksStyled'

type Props = {
    id:number,
    name: string,
    body:string,
}

const HowItWorksItem:React.FC<Props>  = ({id, name, body}) => {

const count = id < 10 ? "0" + id : id

    return ( <SC.Item>
        <SC.Count>{count}</SC.Count>
        <SC.ItemTitle>{name}</SC.ItemTitle> 
        <SC.Body>{body}</SC.Body>
    </SC.Item> );
}
 
export default HowItWorksItem;