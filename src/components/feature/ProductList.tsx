import { type Product } from "./Product";
import { DisplayProduct } from "./Product";

export function ProductList({products} : { products : Product[]})
{

    return(
        <>  
            <div className="productSection flex">
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