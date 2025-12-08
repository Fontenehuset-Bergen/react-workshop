import React from "react";
import { Badge } from "./badges/Badge";
import { InStockButton, LinkButton } from "./buttons/LinkButton";
import { TextButton } from "./buttons/TextButton";

interface Product {
    productName : string,
    price : string,
    description : string,
    inStock : boolean,
    imageUrl : string
};

export function DisplayProduct({productName, price, description, inStock, imageUrl} : Product)
{
    return(
        <>
            <article className="productCardDiv flex">
              <div className="productImageTextWrapper flex">
                 <img className="productImg" src={imageUrl} alt="product image"/>
               <div className="productInfoWrapper flex">
                 <h3 className="productName">{productName}</h3>
                 <p className="productDescription">{description}</p>
                 <p className="productPrice">{price}</p>
               </div>
              </div>
               <div className="buttonStatusWrapper grid">
                 {inStock === false &&
                    <Badge label="Utsolgt" warning="none" cssClass="outOfStockBadge"/>
                    
                 }
                 {inStock ? 
                    <InStockButton text="Vis" href="" cssClass="linkInStock"/> :
                    <InStockButton text="Utilgjengelig" href="" cssClass="linkUnavailable"/>
                 }
                </div>
            </article>
        </>
    );
}