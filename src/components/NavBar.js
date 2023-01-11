import { Link } from 'react-router-dom';
import '../Styles/Nav.scss';
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <div className="nav-section logo">

                        <h1 className="">React JS</h1>
                    </div>
                    <div className="nav-section">

                        <HashLink to='/#home'><p>Home</p></HashLink>
                        <Link to='/contact'><p>Contact</p></Link>

                        <HashLink to='/#about'><p>About</p></HashLink>
                        <HashLink to='/#brands'><p>Brand</p></HashLink>
                        <Link to='/services'><p>Services</p></Link>

                    </div>
                </ul>
            </nav>
        </>
    )
}


export default Navbar