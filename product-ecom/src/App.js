import { useContext, useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';


import { ProductsContext } from './context/ProductsContext';
import { getProducts } from './services/ProductsServices'; 

import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetail from './components/ProductDetail';

function App() {

      //set the data below we have in useEffect hook
      const { setProductsData } = useContext(ProductsContext);


      //Here we will get the data using useEffect hook once component is mounted
      useEffect(() => {
          getProducts().then(data => data && setProductsData(data));
      }, [setProductsData]);


  return (
    <div>
        <BrowserRouter>
          <Header />
          <Container className='my-5'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/:productId' element={<ProductDetail />} />
          </Routes>
          </Container>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
