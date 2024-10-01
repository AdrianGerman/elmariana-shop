import "./ProductCard.css"
import { useNavigate } from "react-router-dom"

const ProductCard = ({
  imageSrc,
  frontImageSrc,
  title,
  price,
  bgImage,
  id
}) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/products/${id}`)
  }

  return (
    <li className="product-card" onClick={handleCardClick}>
      <div className="image-container">
        <img className="bg-image" src={bgImage} alt="bg" />
        <img className="product-img back-image" src={imageSrc} alt={title} />
        <img
          className="product-img front-image"
          src={frontImageSrc}
          alt={title}
        />
      </div>
      <div className="card-information"></div>
      <b>{title}</b>
      <p>{price}</p>
    </li>
  )
}

export default ProductCard
