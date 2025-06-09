import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const ModalProduct = () => {
  const { modalOpen, setModalOpen, selectedProduct, factor } = useContext(DataContext);

  if (!modalOpen || !selectedProduct) return null;

  return (
    <div className="modal-overlay" onClick={() => setModalOpen(false)}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <img src={selectedProduct.image} alt={selectedProduct.title} />
        <h2>{selectedProduct.title}</h2>
        <p>{selectedProduct.description}</p>
        <p><strong>Precio: ${(selectedProduct.price * factor).toFixed(2)}</strong></p>
        <button onClick={() => setModalOpen(false)}>Cerrar</button>
      </div>
    </div>
  );
};
