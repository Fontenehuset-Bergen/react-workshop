import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../assets/styles/example.css'
import data from '../data/products.json'
import { Product } from "../components/Product"

function App() {

  return (
    <>
    <Header />
    <main>
      <h1>Produkter</h1>
      {data.map( product => {
        return (
          <Product
            productName={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            description={product.description}
            inStock={product.inStock} />
        )
      })}
      
      </main>
    <Footer />
    </>
  )
}

export default App
