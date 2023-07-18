import "./module.scss";
import React from "react";

function Products(props) {
    return (
        <div className="product">
            <img src={props.image}/>
            <p className="product_name">{props.text}</p>
            <div className="price_p">
                <p>$ </p>
                <h4>{props.dolar}</h4>
                <p>{props.pount}</p>
            </div>
            <div className="gray_price_p">
                <p>or {props.priceOff}</p>
                <h5>$1.12</h5>
            </div>
            <button className="addToCart_button">Add to cart</button>


        </div>
    )
}

export default Products;