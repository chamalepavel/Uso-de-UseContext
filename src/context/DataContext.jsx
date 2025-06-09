import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [factor, setFactor] = useState(1);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <DataContext.Provider
      value={{
        products,
        selectedProduct,
        setSelectedProduct,
        modalOpen,
        setModalOpen,
        factor,
        setFactor
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
