import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { Product } from './Product';

export const Products = () => {
  const { products } = useContext(DataContext);

  return (
    <div className="products">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
