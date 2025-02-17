import React from "react";
import { FaRecycle, FaClock, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        <Link to="/" className="text-3xl font-extrabold tracking-wide text-black uppercase">
  Why Choose <span className="text-blue-500">ShopZone?</span>
</Link>


        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          We make it easy for you to give, sell, and find second-hand products effortlessly.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaRecycle className="text-green-500 text-5xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Eco-Friendly</h3>
            <p className="text-gray-600 mt-2 text-sm">Reduce waste by giving products a second life.</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaClock className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Quick & Easy</h3>
            <p className="text-gray-600 mt-2 text-sm">Post or find items in just a few clicks.</p>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaCheckCircle className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">100% Free</h3>
            <p className="text-gray-600 mt-2 text-sm">No hidden fees. Just list and connect.</p>
          </motion.div>
        </div>
         
        <Link to="/shop">
  <motion.button
    className="mt-8 bg-gradient-to-r from-blue-600 to-blue-300 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
    whileHover={{ scale: 1.1 }}
  >
    Explore Now
  </motion.button>
</Link>

      </div>
    </section>
  );
};

export default WhyChooseUs;
