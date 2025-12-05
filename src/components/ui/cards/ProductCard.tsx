interface ProductCardProps {
  productName: string;
  price: number;
  description: string;
  imageUrl: string;
  inStock: boolean;
  isOnSale: boolean;
}

export function ProductCard(product: ProductCardProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        display: "flex",
        border: "1px solid grey",
        padding: "0.5rem",
        borderRadius: "0.5rem",
        background: "white",
      }}
    >
      <img
        src={product.imageUrl}
        alt={`An picture of ${product.productName}`}
        style={{ height: "100%", aspectRatio: "1/1", objectFit: "cover" }}
      />
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          color: "black",
        }}
      >
        <h4>{product.productName}</h4>
        <span>{product.description}</span>
        <span style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{product.price} kr</p>
          <button>{product.inStock ? "vis" : "utilgjengelig"} &gt;</button>
        </span>
      </div>
    </div>
  );
}
