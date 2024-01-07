

const SearchBar = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search..." />
        <label>
          <input type="checkbox" />
          {' '}
          Only show products in Stock
        </label>
      </form>
    </div>
  );
}

export default SearchBar;