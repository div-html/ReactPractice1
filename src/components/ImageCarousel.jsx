import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
    "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d",
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex justify-center items-center ">
      <img
        src={images[currentIndex]}
        alt="carousel"
        className="h-150 w-full object-cover shadow-lg transition-opacity duration-500"
      />
    </div>
  );
};

export default ImageCarousel;
