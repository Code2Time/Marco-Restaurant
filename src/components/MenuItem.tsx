import { CategoriesProps } from "../types/Types";
import { TbHandClick } from "react-icons/tb";
import { Link } from "react-router-dom";

function MenuItem({ menuItems }: CategoriesProps) {
  return (
    <>
      {menuItems.map((item) => (
        <Link
          to="/a"
          key={item.id}
          className="menu-item-container bg-white flex justify-center items-center col-span-12 md:col-span-6 lg:col-span-4 gap-5 px-5 py-10 "
        >
          <div className="menu-img overflow-hidden rounded-md">
            <img
              src={item.img}
              alt="menu-item"
              className="menu-item w-32 h-auto rounded-md shadow-md cursor-pointer hover:scale-110"
            />
          </div>
          <div className="menu-details flex flex-col justify-center items-center gap-10 ">
            <div className="item1 flex justify-around  w-full">
              <h1 className="poppins-5 uppercase">{item.title}</h1>
              <h3 className="text-red1 poppins-7">
                $<span>{item.price}</span>
              </h3>
            </div>
            <div className="item2">
              <h2 className="text-gray-2 text-xs sm:text-[15px]  line-clamp-2">
                {item.description}
              </h2>
              <Link
                to="/"
                className="flex justify-center items-center gap-1 text-black mt-6 capitalize menu-item hover:text-red1 "
              >
                <span>click heare</span>
                <TbHandClick />
              </Link>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default MenuItem;
