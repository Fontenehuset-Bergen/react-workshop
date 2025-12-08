import { StatusBadge } from "../badge/Status";

interface ProductCardProps {
  productName: string;
  price: number;
  description: string;
  imageUrl: string;
  inStock?: boolean;
  isOnSale?: boolean;
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
        <span style={{ display: "flex", justifyContent: "space-between" }}>
          <h4 style={{ fontWeight: "bold", fontSize: 18 }}>
            {product.productName}
          </h4>
          {!product.inStock && <StatusBadge label="Utsolgt" level="warning" />}
        </span>
        <span style={{ color: "GrayText" }}>{product.description}</span>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "auto",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: 28 }}>
            {product.price.toLocaleString("no-NO")} kr
          </span>
          <button style={{ height: "fit-content", backgroundColor: product.inStock ? "black": "#00000050" }}>
            {product.inStock ? "vis" : "utilgjengelig"} &gt;
          </button>
        </span>
      </div>
    </div>
  );
}
