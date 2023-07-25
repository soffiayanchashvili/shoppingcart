import "./module.scss";
import React from "react";
import { useEffect, useState } from "react";
import SizeButtons from "./SizeButtons";

import image1 from "../img/image1.webp";
import image2 from "../img/image2.webp";
import image3 from "../img/image3.webp";
import image4 from "../img/image4.webp";
import image5 from "../img/image5.webp";
import image6 from "../img/image6.webp";
import image7 from "../img/image7.webp";
import image8 from "../img/image8.webp";
import image9 from "../img/image9.webp";
import image10 from "../img/image10.webp";
import image11 from "../img/image11.webp";
import image12 from "../img/image12.webp";
import image13 from "../img/image13.webp";
import image14 from "../img/image14.webp";
import image15 from "../img/image15.webp";
import image16 from "../img/16.webp";
import background1 from "../img/background1.webp";
import background2 from "../img/background2.webp";
import background3 from "../img/background3.webp";
import background4 from "../img/background4.webp";
import background5 from "../img/background5.webp";
import background6 from "../img/background6.webp";
import background7 from "../img/background7.webp";
import background8 from "../img/background8.webp";
import background9 from "../img/background9.webp";
import background10 from "../img/background10.webp";
import background11 from "../img/background11.webp";
import background12 from "../img/background12.webp";
import background13 from "../img/background13.webp";
import background14 from "../img/background14.webp";
import background15 from "../img/background15.webp";
import background16 from "../img/background16.webp";

function Products(props) {
  const cartItems = [
    {
      id: 1,
      image: image1,
      background: background1,
      title: "Cropped Stay Groovy off white",
      dolar: 10,
      pount: ".90",
      priceOff: "9 x",
    },
    {
      id: 2,
      image: image2,
      background: background2,
      title: "Basic Cactus White T-shirt",
      dolar: 13,
      pount: ".25",
      priceOff: "3 x",
    },
    {
      id: 3,
      image: image3,
      background: background3,
      title: "Skater Black Sweatshirt",
      dolar: 25,
      pount: ".45",
      priceOff: "5 x",
    },
    {
      id: 4,
      image: image4,
      background: background4,
      title: "Black Tule Oversized",
      dolar: 29,
      pount: ".90",
      priceOff: "5 x",
    },
    {
      id: 5,
      image: image5,
      background: background5,
      title: "Black Batman T-shirt",
      dolar: 10,
      pount: ".90",
      priceOff: "9 x",
    },
    {
      id: 6,
      image: image6,
      background: background6,
      title: "Blue T-Shirt",
      dolar: 9,
      pount: ".00",
      priceOff: "3 x",
    },
    {
      id: 7,
      image: image7,
      background: background7,
      title: "Loose Black T-shirt",
      dolar: 14,
      pount: ".90",
      priceOff: "5 x",
    },
    {
      id: 8,
      image: image8,
      background: background8,
      title: "Ringer Hall Pass",
      dolar: 9,
      pount: ".90",
      priceOff: "9 x",
    },
    {
      id: 9,
      image: image9,
      background: background9,
      title: "Grey T-shirt",
      dolar: 14,
      pount: ".90",
      priceOff: "7 x",
    },
    {
      id: 10,
      image: image10,
      background: background10,
      title: "Black T-shirt with white stripes",
      dolar: 14,
      pount: ".90",
      priceOff: "9 x",
    },
    {
      id: 11,
      image: image11,
      background: background11,
      title: "Turtles Ninja T-shirt",
      dolar: 10,
      pount: ".90",
      priceOff: "9 x",
    },
    {
      id: 12,
      image: image12,
      background: background12,
      title: "Slim black T-shirt",
      dolar: 49,
      pount: ".90",
      priceOff: "4 x",
    },
    {
      id: 13,
      image: image13,
      background: background13,
      title: "Blue Sweatshirt",
      dolar: 22,
      pount: ".50",
      priceOff: "4 x",
    },
    {
      id: 14,
      image: image14,
      background: background14,
      title: "White T-shirt Gucci",
      dolar: 18,
      pount: ".70",
      priceOff: "5 x",
    },
    {
      id: 15,
      image: image15,
      background: background15,
      title: "Tropical Wine T-shirt",
      dolar: 134,
      pount: ".90",
      priceOff: "5 x",
    },
    {
      id: 16,
      image: image16,
      background: background16,
      title: "Marine Blue T-shirt",
      dolar: 49,
      pount: ".00",
      priceOff: "9 x",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="main">
      <p className="product_length">{cartItems.length} Product(s) found</p>
      <div className="prodacts">
        {cartItems.map((cartItems) => (
          <div className="product" onMouseEnter={() => setIsHovered(!isHovered)}onMouseLeave={() => setIsHovered(!isHovered)}>
            <img src={isHovered ? cartItems.image : cartItems.background} />
            <p className="product_name">{cartItems.title}</p>
            <div className="price_p">
              <p>$</p>
              <h4>{cartItems.dolar}</h4>
              <p>{cartItems.pount}</p>
            </div>
            <div className="gray_price_p">
              <p>or {cartItems.priceOff}</p>
              <h5>$1.12</h5>
            </div>
            <button className="addToCart_button">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
