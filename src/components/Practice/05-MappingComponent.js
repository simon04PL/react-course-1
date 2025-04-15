import productData from './../Data/productData';
import Product from './../SubComponents/Product';

function MappingComponents () {
    const products = productData.map( product => <Product key={product.id} name={product.name} />);

    return (
        <div>{products}</div>
        
    );
}

export default MappingComponents;