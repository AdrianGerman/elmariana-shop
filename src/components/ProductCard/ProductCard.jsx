import "./ProductCard.css"
import { useNavigate } from "react-router-dom"

const slugify = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
}

const ProductCard = ({ imageSrc, title, price, bgImage }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    const productSlug = slugify(title)
    navigate(`/products/${productSlug}`)
  }
  return (
    <li className="product-card" onClick={handleCardClick}>
      <div>
        <img className="bg-image" src={bgImage} alt="bg" />
        <img className="product-img" src={imageSrc} alt={title} />
      </div>
      <div className="card-information"></div>
      <b>{title}</b>
      <p>{price}</p>
    </li>
  )
}

export default ProductCard
