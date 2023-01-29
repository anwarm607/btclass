import { Link, useNavigate } from 'react-router-dom'

const Home= () => {
    const navigate = useNavigate();
    const processOrderSuccess = () => {
        navigate('/order-success', {replace: true});
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => processOrderSuccess()}>Place Order</button>
        </div>
    )
}
export default Home;