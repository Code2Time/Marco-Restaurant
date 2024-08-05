import { Iblogs } from "../types/Types"


function BlogItem({date ,desc ,id , img ,title}:Iblogs) {
  return (
   <div key={id} className="blog-item col-span-6 sm:col-span-3 grid grid-cols-12 text-center border">
    <div className="col-span-12 rounded overflow-hidden ">
        <img src={img} alt="blog-item"  className="size-72 mx-auto"/>
    </div>
    <div className="col-span-12">
        <h1>{date}</h1>
    </div>
    <div className="col-span-12">
        {title}
    </div>
    <div className="col-span-12">
        <p>{desc}</p>
    </div>
    <div className="col-span-12 comments-likes-container">

    </div>
   </div>
  )
}

export default BlogItem
