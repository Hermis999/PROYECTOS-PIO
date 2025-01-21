import React from 'react';
import '../assets/css/Products.css';

const ProductCard = ({ product, onView }) => (
  <div className="card">
    <p className="card-number">{product.id}</p>
    <img src={product.image} className="card-img-top" alt={product.name} />
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">Experiencia base: {product.base_experience}</p>
      <button className="btn btn-primary" onClick={onView}>
        Ver
      </button>
    </div>
  </div>
);

export default ProductCard;
