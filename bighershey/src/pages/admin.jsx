import "./admin.css";
import { useState } from "react";

// create the componet
function Admin() {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    image: "",
  });

  function handleInputChange(e) {
    const val = e.target.value;
    const name = e.target.name;

    // create the copy, modify it back
    let copy = { ...product };
    copy[name] = val;
    setProduct(copy);
  }

  function saveProduct() {
    console.log(product);
    // save to server
    clearForm();
  }
  function clearForm() {
    setProduct({
      title: "",
      category: "",
      price: "",
      image: "",
    });
  }
  return (
    <div className="admin page">
      <h1>Store Managment</h1>
      <div className="parent-container">
        <h3>Register products</h3>
      </div>

      <div>
        <label>Title</label>
        <input
          value={product.title}
          onChange={handleInputChange}
          name="title"
          type="text"
          className="form-control"
        />
      </div>

      <div>
        <label>Category</label>
        <input
          value={product.category}
          onChange={handleInputChange}
          name="category"
          type="text"
          className="form-control"
        />
      </div>

      <div>
        <label>Price</label>
        <input
          value={product.price}
          onChange={handleInputChange}
          name="price"
          type="text"
          className="form-control"
        />
      </div>

      <div>
        <label>Image</label>
        <input
          value={product.label}
          onChange={handleInputChange}
          name="image"
          type="text"
          className="form-control"
        />
      </div>

      <div>
        <button onClick={saveProduct} className="btn btn-dark">
          {" "}
          Saveproduct
        </button>
      </div>
    </div>
  );
}

export default Admin;
