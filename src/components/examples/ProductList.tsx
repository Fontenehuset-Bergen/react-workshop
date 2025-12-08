import products from "../../data/products.json";
import { ProductCard } from "../ui/cards/ProductCard";

export function ProductList() {
  return (
    <div
      id="example-products"
      style={{ display: "flex", flexFlow: "column nowrap", gap: "0.5rem" }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.name}
          productName={product.name}
          description={product.description}
          imageUrl={product.imageUrl}
          price={product.price}
          inStock={product.inStock}
          isOnSale={product.isOnSale}
        />
      ))}
    </div>
  );
}
