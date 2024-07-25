import Navbar from "./Navbar"
import logo from "../assets/logo/logo.png.webp";


function Header() {
  return (
    <div className="header-container w-full h-screen flex  items-center flex-col">
         <div className="marco-icon w-full h-auto absolute top-4 ">
        <img className="w-24 mx-auto" src={logo} alt="marco-logo" />
      </div>
      <Navbar />
    </div>
  )
}

export default Header
