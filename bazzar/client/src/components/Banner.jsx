import React, { useState, useEffect } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 5 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 5 ? 0 : (prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === 5 ? 0 : (prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const data = [
    "https://www.bookswagon.com/images/bannerimages/80_inr.jpg?v=1.6",
    "https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.6",
    "https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.8",
    "https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.8",
    "https://www.bookswagon.com/images/bannerimages/83_inr.jpg?v=1.8",
    "https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.8",
  ];
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div
        style={{
          paddingTop: "3px",
        }}
        className="h-auto w-screen relative"
      >
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover  "
            src={data[0]}
            alt="imgOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="ImageTwo"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="ImageThree"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="ImageFour"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[4]}
            alt="ImagefIVE"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[5]}
            alt="ImageSix"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-4">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-orange-800 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-orange-800 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
