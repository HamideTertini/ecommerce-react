import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { FaSearch, FaFilter, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || product.category.toLowerCase() === category.toLowerCase()) &&
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-800">Discover Your Next Favorite Product</h2>
      
      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-600 to-blue-300 p-6 rounded-lg shadow-lg mb-6 text-white">
        <div className="flex items-center gap-2 bg-white text-gray-700 px-3 py-2 rounded-lg shadow-md w-full md:w-1/3">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="outline-none w-full bg-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 bg-white text-gray-700 px-3 py-2 rounded-lg shadow-md w-full md:w-1/4">
          <FaFilter className="text-gray-500" />
          <select
            className="outline-none w-full bg-transparent"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {Array.from(new Set(products.map((p) => p.category))).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <span className="font-semibold text-white">Price:</span>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            className="w-36 cursor-pointer"
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          />
          <span className="font-semibold text-white">${priceRange[0]} - ${priceRange[1]}</span>
        </div>
      </div>
      
      {/* Pagination Buttons */}
      <div className="flex justify-between items-center mb-6">
        <button
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <FaArrowLeft /> Previous
        </button>
        <span className="text-lg font-bold text-gray-700">Page {currentPage}</span>
        <button
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={indexOfLastProduct >= filteredProducts.length}
        >
          Next <FaArrowRight />
        </button>
      </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {currentProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
