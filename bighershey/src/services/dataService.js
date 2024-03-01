import axios from "axios";
let catalog = [
  {
    title: "Bag",
    Catagory: "backpack",
    price: 250.55,
    image: "backpack.PNG",
    _id: "1",
  },
  {
    title: "MotorCycle",
    Catagory: "SportsBike",
    price: 2000.0,
    image: "bike.PNG",
    _id: "2",
  },
  {
    title: "Clothing",
    Catagory: "Polo",
    price: 85.55,
    image: "collar shirt.PNG",
    _id: "3",
  },
  {
    title: "HeadGear",
    Catagory: "truckerHat",
    price: 35.55,
    image: "Hat.PNG",
    _id: "4",
  },
  {
    title: "Footwear",
    Catagory: "Sneaker",
    price: 215.55,
    image: "lowtop.PNG",
    _id: "5",
  },
  {
    title: "Vehicle",
    Catagory: "SUV",
    price: 100.0,
    image: "SUV.PNG",
    _id: "6",
  },
];

class DataService {
  async getProducts() {
    // return catalog;
    let response = await axios.get("http://127.0.0.1:5000/api/products");
    return response.data;
  }
  addToCart(prod) {
    // add a product to local storage
    // local storage support string,json
    let cart = this.readCart();
    cart.push(prod);

    const jsonCart = JSON.stringify(cart);
    localStorage.setItem("cart", jsonCart);
  }
  readCart() {
    //  reads the cart from local storage
    const jsonCart = localStorage.getItem("cart");
    if (jsonCart) {
      return JSON.parse(jsonCart);
    } else {
      return []; // empty cart
    }
  }
}

export default DataService;
