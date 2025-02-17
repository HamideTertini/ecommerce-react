import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [favorites, setFavorites] = useState([]);
 

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));

    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, [id]);




  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.qty += quantity;
    } else {
      cart.push({ 
        id: product.id, 
        title: product.title, 
        price: product.price,  
        qty: quantity 
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  const toggleFavorite = () => {
    let updatedFavorites = [...favorites];
    const exists = favorites.some((fav) => fav.id === product.id);

    if (exists) {
      updatedFavorites = updatedFavorites.filter((fav) => fav.id !== product.id);
    } else {
      updatedFavorites.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
      });
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (!product) return <p className="text-center text-gray-500">Loading...</p>;


 
  return (
    <div className="container mx-auto p-6">
      {/* Linku për kthim te Shop */}
      <div className="mb-4">
        <Link to="/shop" className="text-blue-600 hover:underline flex items-center">
          ← Back to Shop
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 bg-white shadow-lg rounded-lg overflow-hidden p-6">
        {/* Fotoja e produktit */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <img src={product.thumbnail} alt={product.title} className="w-full max-w-md rounded-lg shadow-md" />

          {/* Butoni për favoritet */}
          <button 
            onClick={toggleFavorite} 
            className={`absolute top-4 right-4 p-3 rounded-full text-white shadow-md transition ${
              favorites.some((fav) => fav.id === product.id) ? "bg-red-500" : "bg-gray-300"
            }`}
          >
            <FaHeart size={20} />
          </button>
        </div>

        {/* Detajet e produktit */}
       {/* Detajet e produktit */}
<div className="w-full md:w-1/2 flex flex-col justify-between p-6">
  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>

  {/* Rating */}
  <div className="flex items-center gap-2 text-yellow-500 text-lg">
    {"★".repeat(Math.floor(product.rating))}
    {"☆".repeat(5 - Math.floor(product.rating))}
    <span className="text-gray-600 text-sm ml-2">({product.rating})</span>
  </div>

  <p className="text-gray-700 text-lg my-4">{product.description}</p>

  {/* Brand dhe Category */}
  <p className="text-md text-gray-600"><strong>Brand:</strong> {product.brand}</p>
  <p className="text-md text-gray-600 mb-4"><strong>Category:</strong> {product.category}</p>

  {/* Çmimi dhe Zbritja */}
  <p className="text-2xl font-semibold text-blue-600">${product.price}</p>
  {product.discountPercentage > 0 && (
    <p className="text-sm text-red-500 font-semibold">
      {product.discountPercentage}% Off!
    </p>
  )}



  {/* Stock Status */}
  <p className={`text-md font-semibold ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
    {product.stock > 0 ? `In Stock (${product.stock} left)` : "Out of Stock"}
  </p>

  {/* Sasia dhe Butonat */}
  <div className="flex items-center gap-6 mt-6">
    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-100">
      <button 
        className="px-3 text-lg text-gray-700 hover:bg-gray-300 rounded-md" 
        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
        -
      </button>
      <span className="mx-4 text-lg font-medium">{quantity}</span>
      <button 
        className="px-3 text-lg text-gray-700 hover:bg-gray-300 rounded-md" 
        onClick={() => setQuantity(quantity + 1)}>
        +
      </button>
    </div>

    <button 
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 shadow-md transition-all"
      onClick={addToCart}>
      Add to Cart
    </button>

  
  </div>

  {/* Share Product */}
  <button 
    className="text-blue-500 hover:underline mt-4"
    onClick={() => {
      navigator.clipboard.writeText(window.location.href);
      alert("Product link copied!");
    }}>
    Share this product
  </button>

  
</div>

</div>
</div>
     
    
  );
};

export default Product;
