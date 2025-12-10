/* In this assignment you will create a component that can receive props, you will also write the interface yourself and provide styling so that it meets the following requirements

The component should receive the following data: productName, price, description, inStockand imageUrl.
Each card should resemble how it looks in this picture
Use conditional rendering to control styles if inStockthey are false.
Use the component to create two different products (you can find images in public/productsthe folder)

- productName
- price
- description
- inStock
- imageURL

*/

import "../data/products.json";

interface ProductProps {
    name: string,
    price: number,
    description: string,
    inStock: boolean,
    imgUrl: string,
}

export function ProductListing ( { name, price, description, inStock, imgUrl }: ProductProps ) {
    return(
        <>
            <img src={imgUrl} alt="Product image" />
            <h2>{name}</h2>
            <h3>{price}</h3> - <h4>{inStock}</h4>
            <p>{description}</p>
        </>
    )
}