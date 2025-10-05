import React from "react";

function Product({ item }) {
    const productImage = require(`../../assets/${item.imageURL}`); // we use require to dynamically load the image based on the imageURL property of the item object
    return (
        <li className="Products">
            <a href={`/update-product/${item.id}`}>
                <img className="Products__image" src={productImage} alt={item.name} />
                <div className="Products__name">{item.name}</div>
                <small className="Products__type">{item.type}</small>
            </a>
        </li>
    );
}

export default Product;
