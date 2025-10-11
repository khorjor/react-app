// import data from '../app/data.js'; // Import the data from the app/data.js
import Product from './Product';
import { useState } from 'react';
import AddForm from './Product/AddForm';
import axios from 'axios';

let currentProductId = 9;
// Create a currentProductId variable outside of the functional component and set it to 9

function Home() {
    const [products, setProducts] = useState([]); // Create a new state called products and set the imported data as its initial value

    async function getProducts() {
        const products = await axios.get(
            'https://68e9f957f1eeb3f856e5956b.mockapi.io/data/product/product'
        );
        setProducts(products.data);
    }

    getProducts();

    function addProduct(product) {
        const newProduct = { id: ++currentProductId, ...product };
        setProducts([...products, newProduct]);
    }

    return (
        <>
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
            <AddForm addProduct={addProduct} />
        </>
    );
}

export default Home;