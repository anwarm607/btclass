import { useNavigate } from "react-router-dom"
const OrderSuccess= () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>Your order placed successfully!!</h1>
            <button onClick={() => goBack()}>Back to home</button>
        </div>
    )
}
export default OrderSuccess;