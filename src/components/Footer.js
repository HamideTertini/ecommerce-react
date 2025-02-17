const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white p-6">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold">ShopZone &copy; {new Date().getFullYear()}</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
          <div className="mt-3 space-x-3">
            <a href="#" className="text-xl hover:text-blue-500">🔵</a>
            <a href="#" className="text-xl hover:text-red-500">🔴</a>
            <a href="#" className="text-xl hover:text-blue-700">🔵</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  