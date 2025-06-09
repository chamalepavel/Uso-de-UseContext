import { DataProvider } from './context/DataContext';
import { Factor } from './components/Factor';
import { Products } from './components/Products';
import { ModalProduct } from './components/ModalProduct';
import './App.css';

function App() {
  return (
    <DataProvider>
      <h1>Tienda React Context</h1>
      <Factor />
      <Products />
      <ModalProduct />
    </DataProvider>
  );
}

export default App;
