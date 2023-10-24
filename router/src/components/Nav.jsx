import { Link } from "react-router-dom"

const Nav = () => {
    return <div className="Navbar">
        <Link to="/componentA"> Component A </Link>
        <Link to="/componentB"> Component B </Link>
        <Link to="/"> Home </Link>
    </div>
}

export default Nav