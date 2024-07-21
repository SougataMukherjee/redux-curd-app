import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="shadow">
        <NavLink to='/' className="nav-link">Home</NavLink>
        <NavLink to='/blog' className="nav-link">Blog</NavLink>
        <NavLink to='/add' className="nav-link">Add Book</NavLink>
        <NavLink to='/contact' className="nav-link">Contact</NavLink>
    </nav>
  )
}

export default Navbar