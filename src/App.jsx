import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import CarritoProvider from './components/CarritoContext';
import Carrito from './components/Carrito';
import ProductoDetailContainer from './components/ProductoDetailContainer';
import { Toaster } from 'react-hot-toast';



const App = () => {

  return (
    <CarritoProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categorias/:id" element={<ItemListContainer/>} />
        <Route path="/Carrito" element={<Carrito/>}/>
        <Route path="/producto/:id" element={<ProductoDetailContainer />} />
      </Routes>
      <Toaster/>
      <Footer/>
    </CarritoProvider>
  );
}

export default App
