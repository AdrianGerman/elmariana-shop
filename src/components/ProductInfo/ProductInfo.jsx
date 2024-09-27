import "./ProductInfo.css"
import { useParams } from "react-router-dom"
import { products } from "../Store/products"

const deslugify = (slug) => {
  return slug.replace(/-/g, " ").toLowerCase()
}

const ProductInfo = () => {
  const { id } = useParams()
  const product = products.find(
    (prod) => prod.title.toLowerCase() === deslugify(id)
  )

  if (!product) {
    return <div>Producto no encontrado</div>
  }
  return (
    <>
      <div className="info-product">
        <h1>{product.title}</h1>
        <img src={product.imageSrc} alt={product.title} />
        <p>Precio: ${product.price}</p>
        <p>Mas info del producto aquí...</p>
        {/* todo: agregar todos los detalles y galería del producto */}
      </div>
    </>
  )
}

export default ProductInfo
