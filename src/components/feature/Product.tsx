import React from "react";
import { Badge } from "./badges/Badge";
import { LinkButton } from "./buttons/LinkButton";
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
               <img className="productImg" src={imageUrl} alt="product image"/>
               <div className="productInfoWrapper flex">
                 <h3 className="productName">{productName}</h3>
                 <p className="productDescription">{description}</p>
                 <p className="productPrice">{price}</p>
               </div>
               <div className="buttonStatusWrapper">
                 {inStock &&
                    <Badge label="Utsolgt" warning="warning"/>
                    
                 }
                 {inStock ? 
                    <LinkButton text="Show" href="" cssClass="linkInStock"/> :
                    <LinkButton text="Unavailable" href="" cssClass="linkUnavailable"/>
                 }
                </div>
            </article>
        </>
    );
}