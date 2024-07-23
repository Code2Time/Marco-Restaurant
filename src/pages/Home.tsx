// import { useState } from "react";

import Container from "../components/Container";
import Navbar from "../components/Navbar";

function Home() {
  
  
  // !change style when scrolling

  // ! const [style, setStyle] = useState<boolean>(false);

  // ! const Changestyle = (): void => {
  // !  if (window.scrollY >= 10) {
  //  !   setStyle(true);
  //  ! } else {
  //  !   setStyle(false);
  //  ! }
  // !}; 
  //! window.addEventListener("scroll", Changestyle);

  return (
    <div className="w-full h-auto  text-center mt-52 poppins-5">
      <Navbar />

    </div>
  );
}

export default Home;
