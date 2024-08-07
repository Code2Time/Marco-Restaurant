import { Link } from "react-router-dom";
import hamburger from "../assets/image/about.webp";
function AboutOurStory() {
  return (
    <div className="grid grid-cols-12 gap-4 p-10 mt-2 sm:mt-10">
      <div className="About-our-story my-20 flex flex-col justify-center items-start col-span-12 md:col-span-6">
        <h1 className="poppins-7 text-2xl text-left text-black-0">
          AboutOurStory section
        </h1>
        <p className=" text-justify my-10 ">
          Who are in extremely love with eco friendly system. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <Link
          className="py-2 px-3 bg-red1 outline-none uppercase poppins-5 transition-all btn text-my-white rounded-sm "
          to="/"
        >
          view full menu
        </Link>
      </div>
      <div className="col-span-12 md:col-span-6 flex justify-center items-center md:p-8 lg:p-16 ">
        <img
          src={hamburger}
          alt="hamburger"
          className="w-full h-auto cursor-pointer "
        />
      </div>
    </div>
  );
}

export default AboutOurStory;
