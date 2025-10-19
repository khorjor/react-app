import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';
import AddForm from './features/Product/AddForm';
import UpdateForm from './features/Product/UpdateForm';
import { useEffect } from 'react';
import { useState } from 'react';

// let currentProductId = 9;

function App() {
  const [products, setProducts] = useState([]); // Create a new state called products and set the imported data as its initial value

  useEffect(() => {
         async function getProducts() {
             const products = await axios.get(
                 'https://68e9f957f1eeb3f856e5956b.mockapi.io/data/product/product'
             );
             setProducts(products.data);
         }
         getProducts();
     }, []); // Put the empty array to make sure that the hook is executed only once

    // function addProduct(product) {
    //     const newProduct = { id: ++currentProductId, ...product };
    //     setProducts([...products, newProduct]);
    // }


  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        {products.length > 0 ? (
          <Routes>
            <Route path="/create-product" element={<AddForm />} />
            <Route path="/update-product/:id" element={<UpdateForm />} />
            <Route path="/" element={<Home products={products} />} />
          </Routes>
        ) : (
          <div>Loading products....</div>
        )}
      </Container>
    </>
  );
}

export default App;