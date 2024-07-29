import { CategoriesProps } from "../types/Types"

function MenuItem({menuItems}:CategoriesProps) {
  return (
   <>
      {menuItems.map((item) =>(
        <div key={item.id} className="menu-item-container flex justify-center items-center col-span-6 gap-5 border rounded-sm px-5 py-10">
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
                </div>
            </div>
        </div>
      ))}
   </>
  )
}

export default MenuItem
