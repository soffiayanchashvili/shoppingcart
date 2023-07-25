import { useState } from "react";
import "./module.scss";
import Products from "./Product";

function SizeButtons() {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const sizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
  const [filtredProducts, setFiltredProducts] = useState (Products.cartItems)
  const chooseSize = (size) => {
    let filterSizes = selectedSizes;
    if (filterSizes.includes(size)) {
      filterSizes = [...filterSizes.filter((s) => s !== size)];
      setSelectedSizes(filterSizes);
    } else {
      filterSizes = [...filterSizes, size];
      setSelectedSizes(filterSizes);
    }
  };
  return (
    <div className="size_buttons">
      <>
        <h4>Sizes:</h4>
      </>
      {sizes.map((size) => (
        <button onClick={() => chooseSize(size)}>{size}</button>
      ))}
    </div>
  );
}

export default SizeButtons;
