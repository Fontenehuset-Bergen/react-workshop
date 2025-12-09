import { type Product } from "./Product";
import { DisplayProduct } from "./Product";

interface ProductList 
{
    products : Product[],
    cssClass : string


}


export function ProductList({products, cssClass } : ProductList )
{

    return(
        <>  
            <div className={cssClass}>
                {
                    products.map((currentProduct) =>
                    {
                       return <DisplayProduct key={currentProduct.id} id={currentProduct.id} productName={currentProduct.productName} price={currentProduct.price} description={currentProduct.description} 
                                inStock={currentProduct.inStock} imageUrl={currentProduct.imageUrl} />;
                    }) 
                }
            </div>
            
        
        </>
    
    );
}