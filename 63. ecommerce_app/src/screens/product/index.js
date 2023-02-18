import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Product = () => {
  const param = useParams();
  const [productData, setProductData] = useState({});
  console.log(param);

  useEffect(() => {
    if (param.id) {
      axios(`https://fakestoreapi.com/products/${param.id}`).then((res) => {
        setProductData(res.data);
      });
    }
  }, [param]);

  return (
    <h1 style={{ paddingTop: "100px", display: "flex" }}>
      <img style={{ width: "380px", padding: "10px", marginRight: "30px" }} src={productData.image} />
      <div style={{display: "flex", flexDirection: 'column', justifyContent: 'center'}}>
        <h1 style={{fontSize: "28px"}}>{productData.title}</h1>
        <h3 style={{fontSize: "24px"}}>{productData.price}</h3>
        <p style={{fontSize: "16px"}}>{productData.description}</p>
      </div>
    </h1>
  );
};
export default Product;
