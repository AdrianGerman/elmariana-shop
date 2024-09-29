import ProductCard from "../ProductCard/ProductCard"
import { products } from "./products"
import "./StoreComponent.css"

const StoreComponent = () => {
  return (
    <div className="products">
      <ul className="store-section">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            title={product.title}
            bgImage={product.bgImage}
            imageSrc={product.imageSrc}
            price={product.price}
          />
        ))}
      </ul>
      <div className="bg-down">
        <img src="./ABAJO_WEB.webp" alt="image to bg" />
      </div>
    </div>
  )
}

export default StoreComponent
