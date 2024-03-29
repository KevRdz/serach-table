


const SearchBar = ({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) => {
  return (
    <div>
      <form>
        <input 
          type="text" 
          value={filterText} 
          placeholder="Search..."
          onChange={(e) => onFilterTextChange(e.target.value)}/>
        <label>
          <input 
            type="checkbox" 
            checked={inStockOnly} 
            onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
          {' '}
          Only show products in Stock
        </label>
      </form>
    </div>
  );
}

export default SearchBar;