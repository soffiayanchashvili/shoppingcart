import "./module.scss";
import Shoppingbag from "../img/shopping-cart.png";

function Shoppingcart() {
  return (
    <>
      <button className="cartButton">
        <img src={Shoppingbag} className="shoppingbag" />
        <div className="Productsquantity">3</div>
      </button>
      <div className="checkout">
 <button className="closingbutton">X</button>
       <header className="cartheader">
          <div className="checkshopcart">
            <img src={Shoppingbag} className="shoppingbag" />
            <div className="Productsquantity">3</div>
          </div>
          <p className="cart">Cart</p>
        </header>
        <div className="checkfooter">
          <p className="subtotal">SUBTOTAL</p>
          <div className="pricebox">
            <p className="price">0.00</p>
            <p className="halfprice">23</p>
          </div>
          <button className="addToCart_button">CHECKOUT</button>
        </div> 
      </div>
    </>
  );
}

export default Shoppingcart;
