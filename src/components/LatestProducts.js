import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const LatestProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products.slice(0, 8))) // Merr vetëm 8 produkte
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <section className="container mx-auto py-12">
     <h2 className="text-4xl font-extrabold text-left mb-8 text-gray-900 border-l-4 border-blue-500 pl-4">
  Latest <span className="text-blue-500">Products</span>
</h2>

      <div className="grid grid-cols-4 gap-6 justify-center">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
