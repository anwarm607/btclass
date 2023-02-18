import { useEffect, useState } from "react";
import axios from "axios";
import { CardWrapper, HomeContainer } from "../../styles/container";
import Card from "../../components/card";
import { ProductsHeading } from "./style";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <HomeContainer>
      <ProductsHeading>Products Lists</ProductsHeading>
      <CardWrapper>
        {loading ? (
          <h1 style={{height: '100%', width: '100%', textAlign: 'center'}}>Loading......</h1>
        ) : (
          data.map((it) => {
            return <Card data={it} />;
          })
        )}
      </CardWrapper>
    </HomeContainer>
  );
};

export default Home;
