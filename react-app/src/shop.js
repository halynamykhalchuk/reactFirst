import { Router, Route, Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import  Product  from "./Product";
function Shop() {
  return (
    <div className="container">
      <h1>Shop page</h1>
      <div className="assortment">
      <Product
        name="Product 1"
        price="1 usd"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></Product>
      <Product
        name="Product 2"
        price="1 usd"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></Product>
      <Product
        name="Product 3"
        price="1 usd"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></Product>
      <Product
        name="Product 4"
        price="1 usd"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></Product>
      <Product
        name="Product 5"
        price="1 usd"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></Product>
      <Product
        name="Product 6"
        price="1 usd"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></Product>
      </div>
    </div>
  );
}

export default Shop;
