import React from 'react';
const ProductCard = ({ product, onView }) => (
  <div className="card">
    <img src={product.image} className="card-img-top" alt={product.name} />
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">Estado: {product.status}</p>
      <button className="btn btn-primary" onClick={onView}>
        Ver
      </button>
    </div>
  </div>
);
export default ProductCard;
