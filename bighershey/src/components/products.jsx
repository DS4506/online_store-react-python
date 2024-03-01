import "./products.css";
import QuanityPicker from "../quanityPicker";
import { useEffect } from "react";
import { useState } from "react";
import DataService from "../services/dataService";

function Products(props) {
  const [quantity, setQuantity] = useState(1);

  useEffect(function () {
    console.log("Hello im a product");
  }, []);

  function onQuantityChange(qty) {
    setQuantity(qty);
  }

  function getTotal() {
    const total = props.data.price * quantity;
    // DO MAGIC
    return total.toFixed(2);
  }

  function add() {
    const prod4Cart = {
      ...props.data,
      quantity: quantity,
    };
    console.log("adding", prod4Cart);

    let service = new DataService();
    service.addToCart(prod4Cart);
  }
  return (
    <div className="products">
      <img src={"/images/" + props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>

      <div className="prices">
        <label className="price">${props.data.price.toFixed(2)}</label>
        <label className="total">${getTotal()}</label>
      </div>

      <div className="controls">
        <QuanityPicker onQuantityChange={onQuantityChange}></QuanityPicker>
        <button onClick={add} type="button" className="btn btn-sm btn-primary">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Products;

/**
 *
 * create an add function
 * when the user clicks on the button, call the function
 * the function will console log a message
 */
