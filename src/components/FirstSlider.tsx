import test1 from "../assets/Menu/American Pancakes.jpg";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { FaStar } from "react-icons/fa";
import { UserData } from "../data/UserData";
import UserItem from "./UserItem";

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
       {
        UserData.map((item)=>(
            <UserItem key={item.id} {...item} />
        ))
       }
      </Carousel>
    </div>
  );
}

export default FirstSlider;
