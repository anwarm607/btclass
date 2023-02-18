import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import {
  CardBtn,
  CardContainer,
  CardImage,
  CardImageWrapper,
  CardPrice,
  CardTitle,
} from "./style";

const Card = (props) => {
  let { data } = props;

  let { userId } = useContext(AuthContext);

  const addToCart = () => {
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        date: new Date().toISOString(),
        products: [{ productId: data.id, quantity: 1 }],
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  const navigate = useNavigate();
  return (
    <CardContainer>
      <CardImageWrapper>
        <CardImage src={data.image} />
      </CardImageWrapper>
      <CardTitle>{data.title}</CardTitle>
      <CardPrice>${data.price}</CardPrice>
      <CardBtn onClick={() => addToCart()}>Add to Cart</CardBtn>
      <CardBtn btnColor="white" textColor="#fb641b" borderColor="#fb641b" onClick={() => navigate(`/product/${data.id}`)}>
        View
      </CardBtn>
    </CardContainer>
  );
};

export default Card;
