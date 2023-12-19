import {products} from '../../db/products'
import CollectionItem from './CollectionItem';

const CollectionList:React.FC = () => {



    return ( <ul>

        {products.map(({id, name, img, description})=> 
        <CollectionItem id={id} name={name} img={img} description={description} key={id}/>
        )}
    </ul> );
}
 
export default CollectionList;