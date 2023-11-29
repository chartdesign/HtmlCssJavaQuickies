import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const categories = [
  { id: 0, name: "Business" },
  { id: 1, name: "Technology" },
  { id: 2, name: "Current Events" },
  { id: 3, name: "Personal Interest" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Clear timer on component unmount
  }, [currentIndex]); // Dependency array

  return (
    <div className='relative bg-midGreen overflow-hidden h-[400px] w-full text-center'>
      <p className='p-4 text-white'> Topics of interest</p>

      {categories.map((category, index) => (
        <div
          key={category.id}
          className={`transition-opacity duration-500 ease-in-out flex justify-center ${
            index === currentIndex ? "opacity-75" : "opacity-0"
          }`}
        >
          <div className='absolute top-1/3  text-white p-4 z-10'>
            <h2 className='text-center text-4xl'>{category.name}</h2>
          </div>
        </div>
      ))}
      <div
        className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer'
        onClick={prevSlide}
      >
        <FiChevronLeft size={32} />
      </div>
      <div
        className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer'
        onClick={nextSlide}
      >
        <FiChevronRight size={32} />
      </div>
    </div>
  );
};

export default Carousel;
