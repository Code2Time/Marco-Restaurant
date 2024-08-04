import test1 from "../assets/Menu/American Pancakes.jpg";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { FaStar } from "react-icons/fa";

function FirstSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 520 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[600px] my-6 slider-container">
      <Carousel responsive={responsive} className="w-full h-full  ">
        <div className="w-full h-full text-center flex flex-col justify-center items-center gap-4 ">
            <img src={test1} alt="" className="size-32 rounded-full" />
            <div className="flex cursor-pointer">
            <FaStar color="yellow" /><FaStar color="yellow" /><FaStar color="yellow" /><FaStar color="yellow" /><FaRegStarHalfStroke color="yellow" />
            </div>
            <h1 className="uppercase poppins-7">name</h1>
            <p className="max-w-[400px] text-justify text-gray-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat libero repellat sint sapiente! Quaerat nobis alias voluptas, natus facilis fugiat, dolorem pariatur, tempore ratione iusto distinctio maiores totam. Velit.</p>
        </div>
      </Carousel>
    </div>
  );
}

export default FirstSlider;
