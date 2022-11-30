import { Routes, Route,Navigate } from 'react-router-dom';
import './App.css';
import {  Navbar } from './components';
import { Cart, Error404, Products } from './pages';



function App() {
  return (
    <main className="App">
      <Navbar />
      <section className='h-[90vh]'>
        <Routes>
          <Route path='/' element={<Navigate to="/products"/>} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
