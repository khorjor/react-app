// import data from '../app/data.js'; // Import the data from the app/data.js
import Product from './Product';
import { useState } from 'react';
import AddForm from './Product/AddForm';
import axios from 'axios';
import styled from 'styled-components';
import { useEffect } from 'react';

// let currentProductId = 9;
// Create a currentProductId variable outside of the functional component and set it to 9

function Home({ className, products }) {
    return (
        <div className={className}>
            <h1>New Products</h1>
            <ul className="Home__products">
                {products.map((product) => (
                    <Product key={product.id} item={product} />
                ))}
            </ul>
        </div>
    )
    
    // function addProduct(product) {
    //     const newProduct = { id: ++currentProductId, ...product };
    //     setProducts([...products, newProduct]);
    // }

    return (
        <div className={className}>
            <h1>New Products</h1>
            {
                products.length > 0 ? (
                    <ul className="Home__products">
                        {products.map((product) => (
                            <Product key={product.id} item={product} />
                        ))}
                    </ul>
                ) : (
                    <div>Loading products....</div>
                )
            }
            {/* <AddForm addProduct={addProduct} /> */}
        </div>
    );
}

export default styled(Home)`
  .Home__products {
    display: flex;
    flex-wrap: wrap;

    list-style-type: none;
    padding: 0;
    margin: 0 -12px;
  }
`;