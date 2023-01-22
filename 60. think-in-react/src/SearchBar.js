const SearchBar = (props) => {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={props.filterText}
          onChange={(ev) => props.setFilterText(ev.target.value)}
        />
      </div>
      <div>
        <input
          type="checkbox"
          value={props.inStockOnly}
          onChange={(ev) => props.setInStockOnly(ev.target.checked)}
        />
        <label>Only show products in stock</label>
      </div>
    </>
  );
};

export default SearchBar;
