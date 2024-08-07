import { BlogData } from "../data/BlogData";
import BlogItem from "./BlogItem";

function Blog() {
  return (
    <>
      <div className="blog-container grid grid-cols-12 w-full  h-auto  mt-52 gap-10 ">
        <div className="col-span-12 text-center">
          <h1 className="text-2xl poppins-7 ">Latest From Our Blog</h1>
          <p className="w-2/3 sm:text-center line-clamp-2  text-justify mx-auto  text-gray-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto h-auto grid grid-cols-12 mt-10">
        {BlogData.map((item) => (
          <BlogItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default Blog;
