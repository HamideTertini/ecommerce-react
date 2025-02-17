import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-center">{product.title}</h3>
        
      <p className="text-2xl font-semibold text-blue-600">${product.price}</p>
  {product.discountPercentage > 0 && (
    <p className="text-sm text-red-500 font-semibold">
      {product.discountPercentage}% Off!
    </p>
  )}

      <Link to={`/product/${product.id}`}>
      <button 
        className="mt-4  bg-gradient-to-r from-blue-600 to-blue-300 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Details
      </button>
      </Link>
    </div>
  );
};

export default Card;
