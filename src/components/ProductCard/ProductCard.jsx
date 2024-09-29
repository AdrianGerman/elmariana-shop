import "./ProductCard.css"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ imageSrc, title, price, bgImage, id }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/products/${id}`)
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
