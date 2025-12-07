import { LinkButton } from "./LinkButton"
import { Paragraph } from "./Paragraph"
import { Badge } from "./Badge"
import { TextButton } from "./TextButton"

interface ProductProps {
    productName: string,
    price: Number,
    description: string,
    inStock: boolean,
    imageUrl: string,
}

function productLink(inStock: ProductProps['inStock']) {
    if(inStock) {
        return (
            <>
            <Badge label={"Utsolgt"} level={"warning"} />
            <LinkButton label="Utilgjengelig" disabled={true} />
            </>
        )
    }
    return (
        <LinkButton label="Vis" href="#" />
    )
}


export function Product({productName, price, description, inStock, imageUrl}: ProductProps) {
    return (
        <div className="product">
            <img src={imageUrl} />
            <div className="productInfo">
                <Paragraph textSize={20} text={productName} />
                <Paragraph textSize={12} text={description} />
                <Paragraph textSize={24} text={`${price} kr`} />
            </div>
            <div className="productLink">
                { productLink(inStock) }
            </div>

        </div>
    )

}