import products from '../../data/products.json';
import { ProductListItem } from './ProductListItem';

export function ProductList() {
    const items = products.map((item, index) => (
        <ProductListItem {...item} id={index}></ProductListItem>
    ));

    return (
        <>
            <ul className="products">{...items}</ul>
        </>
    );
}
