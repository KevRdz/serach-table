import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";


const FilterableProductTable = ({products}) => {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <div>
      <SearchBar />
      <ProductTable products={products}/>
    </div>
  );
}

export default FilterableProductTable;