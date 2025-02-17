import React from 'react'

function ContactUs() {
  return (
    <section className="bg-gray-100 py-16 px-6" >
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Përshkrimi */}
    <div>
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
        Get in <span className="text-blue-500">Touch</span>
      </h2>
      <p className="text-gray-600 mb-6">
        Have any questions or need assistance? Feel free to reach out to us. 
        We’re here to help you with anything you need.
      </p>
      <div className="flex items-center space-x-4">
        <div className="text-blue-500 text-2xl">
          📍
        </div>
        <p className="text-gray-700">123 Main Street, City, Country</p>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <div className="text-blue-500 text-2xl">
          📞
        </div>
        <p className="text-gray-700">+123 456 789</p>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <div className="text-blue-500 text-2xl">
          ✉️
        </div>
        <p className="text-gray-700">info@yourshop.com</p>
      </div>
    </div>

    {/* Forma "Send Message" */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Send us a message</h3>
      <form className="space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea 
          rows="4" 
          placeholder="Your Message" 
          className="w-full p-3 border border-gray-300 rounded"
        ></textarea>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    </div>
  </div>
<section className="bg-blue-500 text-white py-6 px-6 text-center mt-8">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
    <p className="text-lg mb-4">Subscribe to our newsletter and never miss our latest deals.</p>
    <div className="flex justify-center">
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="p-3 rounded-l-lg w-64 text-gray-900 outline-none"
      />
      <button className="bg-gray-900 px-6 py-3 rounded-r-lg hover:bg-gray-800 transition">
        Subscribe
      </button>
    </div>
  </div>
</section>


</section>

  )
}

export default ContactUs
