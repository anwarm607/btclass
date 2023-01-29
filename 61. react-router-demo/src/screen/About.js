import { Link, Outlet } from "react-router-dom";

const About= () => {
    return (
        <div>
            <h1>About Page</h1>
            <ul className='tab'>
                <li><Link to='first-tab'>First Tab</Link></li>
                <li><Link to='second-tab'>Second Tab</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}
export default About;