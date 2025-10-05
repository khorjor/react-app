import data from '../app/data.js'; // Import the data from the app/data.js
import Product from './Product';
import { useState } from 'react';
import AddForm from './Product/AddForm';

let currentProductId = 9;
// Create a currentProductId variable outside of the functional component and set it to 9

function Home() {
    const [products, setProducts] = useState(data); // Create a new state called products and set the imported data as its initial value
    
    function addProduct(product) {
        const newProduct = { id: ++currentProductId, ...product };
        setProducts([...products, newProduct]);
    }

    return (
        <div>
            <h1>New Products</h1>
            <ul className="Home__products">
                {products.map((product) => (
                    <Product key={product.id} item={product} />
                ))}
            </ul>
            <AddForm addProduct={addProduct} /> 
        </div>
    );
}

export default Home;