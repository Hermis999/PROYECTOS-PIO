import React from 'react';

const Modal = ({ show, onClose, title, image, id, height, exp, types, abilities}) => {
  if (!show) return null;  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <h6 className="modal-number">#{id}</h6>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body text-center">
            <img src={image} alt={title} className="img-fluid" />
            <p>Tamaño: {height}</p>
            <p>Experiencia base: {exp}</p>
            <p>Tipo: {types.join(', ')}</p>
            <p>Habilidades: {abilities.join(', ')}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
