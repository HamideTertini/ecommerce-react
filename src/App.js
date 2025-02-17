import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profil from "./pages/Profil";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Error404 from "./pages/Error404";
import Products from "./pages/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SupportHelpCenter from "./pages/SupportHelpCenter";
import Statistics from "./pages/Statistics";
import Favorites from "./pages/Favorites";




function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/favorites" element={<Favorites />} />
     
      
        <Route path="/support" element={<SupportHelpCenter />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="*" element={<Error404 />} />

    </Routes>
    <Footer />
    </BrowserRouter>

  );
}

export default App;
