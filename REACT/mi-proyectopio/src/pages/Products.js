import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import Modal from '../components/Modal';

const Products = () => {
  const [morty, setMorty] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el personaje seleccionado
  const [showModal, setShowModal] = useState(false); // Estado para el modal

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const uri = 'https://rickandmortyapi.com/api/character/';
      const response = await axios.get(uri);
      setMorty(response.data.results);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  // Maneja la apertura del modal
  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Maneja el cierre del modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="row">
      {morty.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <ProductCard product={product} onView={() => handleShowModal(product)} />
        </div>
      ))}

      {/* Modal para mostrar los detalles */}
      {selectedProduct && (
        <Modal
          show={showModal}
          onClose={handleCloseModal}
          title={selectedProduct.name}
          image={selectedProduct.image}
        />
      )}
    </div>
  );
};

export default Products;
