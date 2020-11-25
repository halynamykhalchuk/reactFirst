import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom';


function Product(props) {
  return (
    <div className="product">
        <h3>{props.name}</h3>
        <img src=""></img>
        <p>{props.description}</p>
        <h3>{props.price}</h3>
        <button className="btn btn-primary">Buy</button>
    </div>
  );
}

export default Product;
