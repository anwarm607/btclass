import FilterableComponent from "./FiltarableTable";
import {useState, useEffect} from 'react';

let jsonData = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7",
  },
]

function App() {
  const [filterText, setFilterText ] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [data, setData] = useState(jsonData)
  const [someState, setSomeState] = useState(false);
  const [anotherState, setAnotherState] = useState(false);

  let sportingGoodArr = data.filter((it) => it.category === "Sporting Goods");
  let electronicsArr = data.filter((it) => it.category === "Electronics");

  if (inStockOnly) {
    sportingGoodArr =  data.filter((it) => it.category === "Sporting Goods" && it.stocked);
    electronicsArr = data.filter((it) => it.category === "Electronics" && it.stocked);
  }

  const handleChaneText = (text) => {
    setFilterText(text);
    let currentData = [...data];
    if (text) {
      currentData = currentData.filter(it => it.name.includes(text))
    } else {
      currentData = jsonData
    }
    setData(currentData);
  }

  useEffect(() => {
    console.log("Called on mount")
  }, [someState])

  return (
    <div className="App">
      {/* <FilterableComponent
        setFilterText={(text) => handleChaneText(text)}
        filterText={filterText}
        setInStockOnly={setInStockOnly}
        inStockOnly={inStockOnly}
        sportingGoodArr={sportingGoodArr}
        electronicsArr={electronicsArr}
      /> */}
      {/* UseEffect example */}
      <button onClick={() => setSomeState(!someState)}>Click me</button>
      <button onClick={() => setAnotherState(!anotherState)}>Click me for another state update</button>
    </div>
  );
}

export default App;
