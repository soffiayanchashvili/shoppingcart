import "./App.css";
import SizeButtons from "./components/SizeButtons";
import Products from "./components/Product";
import Shoppingcart from "./components/Shoppingcart";

function App() {
  return (
    <div className="App">
      <SizeButtons />
      <div className="prodacts">
        < Products />
      </div>
      {/* <Shoppingcart/> */}
    </div>
  );
}

export default App;
