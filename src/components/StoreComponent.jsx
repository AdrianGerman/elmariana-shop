import ProductCard from "./ProductCard"
import { products } from "./products"
import "./StoreComponent.css"

const StoreComponent = () => {
  return (
    <div className="products">
      <ul className="store-section">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            bgImage={product.bgImage}
            imageSrc={product.imageSrc}
            title={product.title}
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
