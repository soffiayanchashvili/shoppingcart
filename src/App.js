import "./App.css";
import SizeButtons from "./components/SizeButtons";
import Products from "./components/Product";
import Shoppingcart from "./components/Shoppingcart";

function App() {
  return (
    <div className="App">
      <SizeButtons />
      <div className="prodacts">
        <Products text="Cropped Stay Groovy off white" dolar="10" pount=".90" priceOff="9 x" image="https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644-1-product.b6128dd1df3de552cf1b.webp"/>
        <Products text="Basic Cactus White T-shirt" dolar="13" pount=".25" priceOff="3 x" image="https://react-shopping-cart-67954.firebaseapp.com/static/media/39876704341265610-1-product.1f07d5fa94ed8584c756.webp"/>
        <Products text="Skater Black Sweatshirt" dolar="25" pount=".90" priceOff="12 x" image="https://react-shopping-cart-67954.firebaseapp.com/static/media/9197907543445676-1-product.25f42b6c504af11cc71c.webp"/>
        <Products text="Black Tule Oversized" dolar="29" pount=".45" priceOff="5 x" image="https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370-1-product.e53dc0babb7b44f7e40e.webp"/>
        <Products text="Black Batman T-shirt" dolar="10"  pount=".90" priceOff="9 x" image="https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392-1-product.85191f0d6e809687fe4a.webp"/>
        <Products text="Blue T-Shirt" dolar="9"  pount=".90" priceOff="3 x"  image="https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304-1-product.00bf8ca2603352e0cfad.webp"/>
        <Products text="Loose Black T-shirt"  dolar="14" pount=".00"priceOff="5 x"  image="https://react-shopping-cart-67954.firebaseapp.com/static/media/11033926921508488-1-product.e80b2a0ba8e1d1c30095.webp"/>
        <Products text="Ringer Hall Pass"  dolar="9" pount=".90" priceOff="9 x"  image="https://react-shopping-cart-67954.firebaseapp.com/static/media/18644119330491310-1-product.3ab8c5301302c1f8add4.webp"/>
        <Products text="Grey T-shirt"  dolar="14" pount=".90" priceOff="7 x"  image="https://react-shopping-cart-67954.firebaseapp.com/static/media/11854078013954528-1-product.e540be53e59461e648c8.webp"/>
        <Products text="Black T-shirt with white stripes"  dolar="14"  pount=".90" priceOff="9 x"  image="https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077-1-product.8c566b01d48c7b6964f0.webp"/>
        <Products text="Turtles Ninja T-shirt"  dolar="10" pount=".90"   image="https://react-shopping-cart-67954.firebaseapp.com/static/media/10547961582846888-1-product.76c02f8ee37e439fad3b.webp"/>
        <Products text="Slim black T-shirt"  dolar="49" pount=".90" priceOff="4 x" image="https://react-shopping-cart-67954.firebaseapp.com/static/media/6090484789343891-1-product.71fc50c019740fbf7e8e.webp"/>
        <Products text="Blue Sweatshirt"  dolar="22"  pount=".50"  priceOff="4 x"  image="https://react-shopping-cart-67954.firebaseapp.com/static/media/18532669286405344-1-product.7cde472a672f1f3412aa.webp"/>
        <Products text="White T-shirt Gucci"  dolar="18" pount=".70" priceOff="5 x"  image="https://react-shopping-cart-67954.firebaseapp.com/static/media/5619496040738316-1-product.f8e172dd538635d22ef8.webp"/>
        <Products text="Tropical Wine T-shirt"  dolar="134" pount=".90" priceOff="5 x"  image="https://react-shopping-cart-67954.firebaseapp.com/static/media/11600983276356164-1-product.e4dadda2c10e5e458cce.webp"/>
        <Products text="Marine Blue T-shirt"  dolar="49" pount=".00" priceOff="9x"  image="https://react-shopping-cart-67954.firebaseapp.com/static/media/27250082398145996-1-product.1dd6d87d61bfdb92f787.webp"/>
      </div>
      <Shoppingcart/>
    </div>
  );
}

export default App;
