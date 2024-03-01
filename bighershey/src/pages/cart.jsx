import "./cart.css";
import React, { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Cart() {
  const [cartList, setCartList] = useState([]);
  useEffect(function () {
    loadCart();
  }, []);

  function loadCart() {
    let service = new DataService();
    let cart = service.readCart();

    console.log(cart);
    setCartList(cart);
  }
  function getTotal(prod) {
    const total = prod.price * prod.quantity;
    return total.toFixed(2);
  }

  function getOrderTotal() {
    let total = 0;
    for (let i = 0; i < cartList.length; i++) {
      let prod = cartList[i];
      total += prod.price * prod.quantity;
    }
    return total.toFixed(2);
  }
  return (
    <div className="cart">
      <h1>You've Arrived at Checkout</h1>

      <div className="parent">
        <div className="list">
          {cartList.map((prod) => (
            <div className="cart-prod">
              <img src={"/images/" + prod.image} alt=""></img>
              <div className="info">
                <h5>{prod.title}</h5>
                <p>{prod.category}</p>
              </div>
              <label>{prod.price}</label>
              <label>{prod.quantity}</label>
              <label>${getTotal(prod)}</label>
              <button className="btn btn-sm btn-danger">Remove</button>
            </div>
          ))}
        </div>
        <div className="aside">
          <h4>Your total</h4>
          <label>${getOrderTotal()}</label>
        </div>
      </div>
    </div>
  );
}
export default Cart;
