import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { Iusers } from "../types/Types";

function UserItem({ id, img, info, name }: Iusers) {
  return (
    <div
      key={id}
      className="w-full h-full text-center flex flex-col justify-center items-center gap-4 "
    >
     <div className="p-10 size-60">
         <img src={img} alt="" className="w-full h-full rounded-full " />
     </div>
      <div className="flex cursor-pointer">
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaRegStarHalfStroke color="yellow" />
      </div>
      <h1 className="uppercase poppins-7">{name}</h1>
      <p className="max-w-[400px] text-justify text-gray-2">{info}</p>
    </div>
  );
}

export default UserItem;
