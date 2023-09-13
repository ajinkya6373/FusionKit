import "./cardContent.css"
function CardContent() {
  return (
    <div className="card-content">
      <div className="product-image">
        <img src="/Image/Product.jpg" alt="product" />
      </div>
      <h3 className="product-name">Arden Grange Adult Large Breed Dog Food</h3>
      <div className="product-details">
        <p className="product-price">$ 10</p>
        <p className="product-discount"> 5 % off</p>
      </div>
      <div className="action-buttons">
        <button className="add-to-cart-button" >
          <i className="fas fa-shopping-bag"></i> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CardContent;
