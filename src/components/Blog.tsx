import { BlogData } from "../data/BlogData";
import BlogItem from "./BlogItem";

function Blog() {
  return (
    <>
      <div className="w-11/12 mx-auto h-auto grid grid-cols-12 mt-10">
        {BlogData.map((item) => (
          <BlogItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default Blog;
