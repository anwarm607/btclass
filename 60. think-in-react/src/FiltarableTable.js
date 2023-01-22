import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableComponent = (props) => {
  return (
    <>
      <SearchBar
        setFilterText={props.setFilterText}
        filterText={props.filterText}
        setInStockOnly={props.setInStockOnly}
        inStockOnly={props.inStockOnly}
      />
      <ProductTable
        electronicsArr={props.electronicsArr}
        sportingGoodArr={props.sportingGoodArr}
      />
    </>
  );
};

export default FilterableComponent;
