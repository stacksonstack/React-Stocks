import React, {useState} from "react";

const SearchBar = ({ sortStocks, filterByType }) => {
  let [checked, setChecked] = useState(" ");
  

  const sort = (e) => {
    if(checked === "Alphabetically" || checked === "Price") {setChecked(false);}
    setChecked(e.target.value);
    return sortStocks(e.checked, e.target.value);
    
  };

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={checked === "Alphabetically"}
          onChange={sort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={checked === "Price"}
          onChange={sort}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={filterByType}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
