import type { ReactNode } from 'react';
import products from '../../data/products.json';
import { ProductListItem } from './ProductListItem';

type ProductListProps = {
    itemCount: number;
};

export function ProductList(props: ProductListProps) {
    const itemCount = props.itemCount;

    const items: ReactNode[] = [];

    for (let i = 0; i < itemCount; i++) {
        if (i >= products.length) break;

        const product = products[i];
        const listItem = <ProductListItem {...product}></ProductListItem>;
        items.push(listItem);
    }

    return (
        <>
            <ul className="products">{...items}</ul>
        </>
    );
}
