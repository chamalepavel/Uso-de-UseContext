import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const Product = ({ product }) => {
  const { setSelectedProduct, setModalOpen, factor } = useContext(DataContext);

  const handleClick = () => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <div className="product" onClick={handleClick}>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>${(product.price * factor).toFixed(2)}</p>
    </div>
  );
};
