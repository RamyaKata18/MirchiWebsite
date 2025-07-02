import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="navbar">
      <h1>Palnadu Natural Spices 🌶️</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
