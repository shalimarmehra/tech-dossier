import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function HomeSlider() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className="w-3/4 max-sm:w-full m-auto">
      <div className="mt-10">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-gray-300 h-[450px] text-black rounded-xl shadow-2xl dark:bg-blue-100"
            >
              <div className="h-56 bg-blue-700 flex justify-center items-center rounded-t-xl">
                <img
                  src="https://img.freepik.com/free-photo/mountains-with-snow-trees_1048-2411.jpg?size=626&ext=jpg&ga=GA1.1.1705952227.1713857647&semt=ais"
                  alt=""
                  className="h-full w-full"
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-center mt-10">{d.review}</p>
                <button className="bg-blue-700 hover:bg-blue-100 text-white hover:text-blue-700 text-lg px-8 py-2 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10 duration-300">
                  Read Article
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: `/students/John_Morgan.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Ellie Anderson`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Nia Adebayo`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Rigo Louie`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Mia Williams`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export default HomeSlider;
