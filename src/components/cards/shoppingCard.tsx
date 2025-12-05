
import "../../assets/styles/cards.css"

interface ShoppingCardProps {
    productName: string
    price: number
    description: string
    inStock: "inStock" | "soldOut"
    imageUrl: string
}


export default function ShoppingCard({ productName, price, description, inStock, imageUrl }: ShoppingCardProps) {

    let buttonColor = "black"
    let stockText = ""

    switch (true) {
        case inStock == "inStock":
            buttonColor = "black";
            stockText = "Vis >";
            break;
        case inStock == "soldOut":
            buttonColor = "gray";
            stockText = "Utsolgt";
            break;
        default:
            break;
    }

    return (
        <div className="shoppingcard">
            <img src={imageUrl} className="shopping-img"></img>

            <div className="content-container">
                <div className="text-container">
                    <p className="title"> {productName} </p>
                    <p className="description"> {description} </p>
                    <p className="price"> {price} kr </p>
                </div>
                <button className={buttonColor + "instock-button"}>{stockText}</button>
            </div>
        </div>
    )
}