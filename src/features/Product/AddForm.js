import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "./actions";

// Create an AddForm component in the Product folder
const AddForm = () => { // Accept an addProduct property, which is a function used to add a new product
    const [name, setName] = useState("");
    const [imageURL, setImageURL] = useState(""); //their initial states should be set to empty string
    const [type, setType] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (event) => { 
        event.preventDefault();
        dispatch(addProduct({ name, imageURL, type })); 
        //When the form is submitted, prevent the default behavior and call the addProduct function 
        // with an object containing name, type, and imageURL
        navigate('/');
    }

    return (
        <>
            <h1>Add Product</h1>
            <form id="create-form" onSubmit={onSubmit}> 
                <div className="input-group" >
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)} 
                        //Each input field, set a value property and bind an onChange event
                    />
                </div>

                <div className=" input-group" >
                    <label htmlFor="imageURL">Image URL</label>
                    <input
                        name="imageURL"
                        type="text"
                        id="imageURL"
                        value={imageURL}
                        onChange={(event) => setImageURL(event.target.value)}
                    />
                </div>

                <div className=" input-group">
                    <label htmlFor="type">Type</label>
                    <input
                        name="type"
                        type="text"
                        id="type"
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                    />
                </div>

                <button type="submit">Add product</button>
            </form>
        </>
    )
}

export default AddForm;