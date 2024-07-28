// import React, { useState } from "react";
// import { MenuData } from "../data/MenuData";
import Categories from './Categories'



function Menu() {
  //   const all = ["all" , ...new Set(MenuData.map((item) => item.category))]
  // const [categories , setCategories] = useState<any>(all)
  // console.log(categories)

  return (
    <>
      <main>
        <section> 
          <div className="className='Menu-container w-full h-auto  bg-gray-3 text-center ">
            <h1 className="poppins-6 p-4 sm:text-2xl md:text-4xl my-2">What kind of Foods we serve for you</h1>
            <p className="text-sm sm:text-base mt-8">Who are in extremely love with eco friendly system.</p>
          <Categories />
          <div className='w-full h-12'>

          </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Menu;
