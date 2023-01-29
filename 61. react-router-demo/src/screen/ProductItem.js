import { useParams } from "react-router-dom";

const ProductItem = () => {
    const param = useParams();
    console.log(param)
    return (
        <h1>Product ID: {param.id}</h1>
    )
}

export default ProductItem;