import { CategoriesProps } from "../types/Types"

function MenuItem({menuItems}:CategoriesProps) {
  return (
   <>
      {menuItems.map((item) =>(
        <div key={item.id} className="menu-item-container bg-white flex justify-center items-center col-span-12 sm:col-span-6 lg:col-span-4 gap-5 px-5 py-10">
            <div className="menu-img">
                <img src={item.img} alt="menu-item" className="size-40 rounded-md shadow-md" />
            </div>
            <div className="menu-details flex flex-col justify-center items-center gap-10 ">
                <div className="item1 flex justify-around  w-full">
                    <h1>{item.title}</h1>
                    <h3 className="text-red1">{item.price}$</h3>
                </div>
                <div className="item2">
                    <h2>{item.description}</h2>
                    <button className=" py-2 px-3 bg-red1 outline-none uppercase poppins-3 transition-all btn text-my-white rounded-sm">Add this item...</button>
                </div>
            </div>
        </div>
      ))}
   </>
  )
}

export default MenuItem
