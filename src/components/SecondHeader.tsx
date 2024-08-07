import logo from "../assets/logo/logo.png.webp";
import Navbar from "./Navbar";

function SecondHeader() {
  return (
    <>
      <div className="header-container w-full h-[500px] flex  items-center flex-col gap-4">
        <div className="marco-icon w-full h-auto absolute top-4">
          <img
            className="w-24 mx-auto cursor-pointer"
            src={logo}
            alt="marco-logo"
          />
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default SecondHeader;
