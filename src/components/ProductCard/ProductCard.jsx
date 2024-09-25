import "./ProductCard.css"

const ProductCard = ({ imageSrc, title, price, bgImage }) => {
  return (
    <li className="product-card">
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
