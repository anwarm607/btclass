import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useEffect } from "react";

const FilterableComponent = (props) => {
  useEffect(() => {
    return () => {
      console.log('Called on Unmount')
    }
  }, [])
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
