import { Link } from "react-router-dom";
import { Iblogs } from "../types/Types";

function BlogItem({ date, desc, id, img, title }: Iblogs) {
  return (
    <Link to='/blogs' key={id} className="blog-item col-span-12 sm:col-span-6 md:col-span-3 flex justify-start items-center sm:flex-col sm:justify-center sm:items-center mt-10  px-4 py-2 gap-5 cursor-pointer shadow-md">
        <img src={img} alt="blog-item" className="item-1 size-40 rounded-md shadow-sm sm:size-72  " />
      <div className="blog-item2">
        <h1 className="open-sans text-xs ">{title}</h1>
        <p className="poppins-3 text-justify my-4">{desc}</p>
        <h1 className="text-my-white bg-gray1 max-w-[130px] text-center">{date}</h1>
        <div className=" comments-likes-container"></div>
      </div>
    </Link>
  );
}

export default BlogItem;
