import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useLocalStorage("user", null);
  const [cart] = useLocalStorage("cart", []);
  const [favorites] = useLocalStorage("favorites", []); // Lista e produkteve të preferuara
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser(null);
    navigate("/");
  };

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-wide text-white uppercase">
  Shop<span className="text-blue-300">Zone</span>
</Link>


        {/* Navigation */}
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/shop" className="hover:text-gray-400">Shop</Link>
          <Link to="/favorites" className="hover:text-gray-400">❤️ Favorites </Link>

          <Link to="/cart" className="hover:text-gray-400">🛒 Cart</Link>

          {!loggedInUser ? (
            <>
              <Link to="/login" className="hover:text-gray-400">Login</Link>
              <Link to="/register" className="hover:text-gray-400">Register</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
              
              <button 
                onClick={handleLogout} 
                className="hover:text-gray-400"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
