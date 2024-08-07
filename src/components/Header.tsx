import logo from "../assets/logo/logo.png.webp";
import Navbar from "./Navbar";

function Header() {
  // change style when scrolling

  //  const [style, setStyle] = useState<boolean>(false);

  //  const Changestyle = (): void => {
  //   if (window.scrollY >= 33) {
  //     setStyle(true);
  //   } else {
  //     setStyle(false);
  //   }
  // };
  // window.addEventListener("scroll", Changestyle);

  return (
    <div className="header-container w-full h-screen flex  items-center flex-col gap-4">
      <div className="marco-icon w-full h-auto absolute top-4">
        <img
          className="w-24 mx-auto cursor-pointer"
          src={logo}
          alt="marco-logo"
        />
      </div>
      <Navbar />
      <div className="headr-title w-9/12 mt-48 text-my-white">
        <h2 className="text-sm sm:text-base text-left mx-2 text-red1 hidden md:block">
          WIDE OPTIONS OF CHOICE
        </h2>
        <h1 className="text-2xl md:text-5xl poppins-7 my-4 mx-2">
          Delicious Recipes
        </h1>
        <p className="w-10/12 sm:w-6/12 md:w-4/12 mx-2 text-justify">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quidem fugit repellendus ipsam fuga doloribus
          placeat nemo expedita consequuntur quis quas.
        </p>
        <button className="my-8 mx-2 py-2 px-3 bg-red1 outline-none uppercase poppins-6 transition-all hover:bg-gray-2">
          chek our menu
        </button>
      </div>
    </div>
  );
}

export default Header;
