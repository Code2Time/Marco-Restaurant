import { useState } from "react";
import { MenuData } from "../data/MenuData";
import Categories from "./Categories";
import MenuItem from "./MenuItem";
import { ImenuItems } from "../types/Types";


const Allcategories = ["all" , ...new Set(MenuData.map((item)=> item.category))]

function Menu() {

  const [menuItems , setMenuItems]= useState<ImenuItems[]>(MenuData)

const [categories , setCategories] = useState<typeof Allcategories>(Allcategories)


const filterItems = (category : string)=>{

  if(category == "all"){
     setMenuItems(MenuData)
  }else{
    const NewItems = MenuData.filter((item)=>item.category == category)
    setMenuItems(NewItems)
  }


}

  return (
    <>
      <main>
        <section>
          <div className="className='Menu-container w-full h-auto  bg-gray-3 text-center ">
            <h1 className="poppins-6 p-4 sm:text-2xl md:text-4xl my-5">
              What kind of Foods we serve for you
            </h1>
            <p className="text-sm sm:text-base mt-8">
              Who are in extremely love with eco friendly system.
            </p>
            <div className="w-full h-auto flex flex-col sm:flex-row justify-center items-center  mt-10 sm:p-5">
             <Categories filterItems={filterItems} categories={categories}   />
          
            </div>
            <div className=" h-auto grid grid-cols-12 gap-4 w-10/12 mx-auto mt-10 sm:mt-14 ">
              <MenuItem  menuItems={menuItems} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Menu;
