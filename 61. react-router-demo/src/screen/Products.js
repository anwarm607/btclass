import { useEffect, useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

const productListStyles = {
  cursor: "pointer",
};

let productJson = [
    {
      name: "Product 1",
      isStock: true,
      id: 1
    },
    {
      name: "Product 2",
      isStock: false,
      id: 2
    },
    {
      name: "Product 3",
      isStock: true,
      id: 3
    },
    {
      name: "Product 4",
      isStock: false,
      id: 4
    },
    {
      name: "Product 5",
      isStock: false,
      id: 5
    },
  ];



const Products = () => {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();
  const [ data, setData ] = useState(productJson);
  const [checked, setChecked] = useState(false)

  const showOnlyStock = searchParam.get('filter')

  const onClickProduct = (id) => {
    navigate(`${id}`);
  };


  const handleChange = (ev) => {
    console.log(ev.target.checked)
    if (ev.target.checked) {
        setSearchParam({filter: 'stock'})
        setChecked(true);
    } else {
        setSearchParam({filter: ''})
        setChecked(false);
    }
  }
  useEffect(() => {
    console.log(showOnlyStock, "showOnlyStock")
    if (showOnlyStock) {
        const filteredProductJson = productJson.filter(product => product.isStock === true)
        setData(filteredProductJson)
        setChecked(true);
    } else {
        setData(productJson)
        setChecked(false);
    }
  }, [showOnlyStock]);

  return (
    <>
    <div>
        <input type='checkbox' checked={checked}  onChange={handleChange} style={{marginRight: '10px'}} />
        <label>Filter stock only products</label>
    </div>
      {data.map((product) => {
        return (
          <h1 onClick={() => onClickProduct(product.id)} style={productListStyles}>
            {product.name}
          </h1>
        );
      })}
      <button onClick={() => navigate("home")}>Home</button>
      <Outlet />
    </>
  );
};

export default Products;
