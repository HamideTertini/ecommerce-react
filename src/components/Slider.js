import { useState, useEffect } from "react";

const images = [
  "https://iqq6kf0xmf.gjirafa.net/images/786fc182-d25c-4880-a71f-dcfdf8a866cf/786fc182-d25c-4880-a71f-dcfdf8a866cf.jpeg?w=1046",
  "https://iqq6kf0xmf.gjirafa.net/images/d74dc955-846d-40d3-94f2-4eb312a0db36/d74dc955-846d-40d3-94f2-4eb312a0db36.jpeg?w=1046",
  "https://iqq6kf0xmf.gjirafa.net/images/b26c14ca-3d4e-4bf9-9162-e1cf48182f95/b26c14ca-3d4e-4bf9-9162-e1cf48182f95.jpeg?w=1046",
  "https://iqq6kf0xmf.gjirafa.net/images/0e9e10d3-8158-4973-aec4-e5a672592754/0e9e10d3-8158-4973-aec4-e5a672592754.jpeg?w=1046"
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Ndryshon imazhin çdo 3 sekonda

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Imazhet */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Butonat e navigimit */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ▶
      </button>

      {/* Pikat për treguesin e slide-it */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
