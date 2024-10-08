import { UseOrdersContext } from "../context/OrderContext";
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useParams } from "react-router-dom";
import orderbg from "../assets/order/order.png";
import logo from "../assets/logo/logo.png.webp";
import "react-toastify/dist/ReactToastify.css";
import { MenuData } from "../data/MenuData";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Order() {
  const param = useParams<{ id: any }>().id;
  let selected = MenuData.filter((item) => item.id == param);

  const { HandleIncreasOrder} = UseOrdersContext();

  /* notify message */
  const notify = () =>
    toast.success("Successfully added  ", {
      position: "top-center",
      autoClose: 600,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const {pathname} = useLocation()
    console.log(pathname)

  return (
    <>
      <section className="order-bg w-full h-auto bg-red1">
        <div className=" flex flex-col justify-around items-center">
          <div className="marco-icon w-full h-auto absolute top-4">
            <img
              className="w-24 mx-auto cursor-pointer"
              src={logo}
              alt="marco-logo"
            />
          </div>
          <Navbar />
          <div className=" flex justify-around items-center">
            <h1 className="poppins-4 uppercase text-my-white border-b-2 sm:text-xl md:text-4xl ">
              you can get food now!
            </h1>
            <img
              src={orderbg}
              alt="order-bg"
              className="size-48 sm:size-72 md:size-96"
            />
          </div>
        </div>
      </section>
      <section>
        {selected.map((item) => (
          <div
            key={item.id}
            className="order-item w-10/12 mx-auto my-20 h-auto  grid grid-cols-12 p-3 gap-4"
          >
            <div className="food-details col-span-12 sm:col-span-7 md:col-span-8   flex flex-col justify-center items-start gap-4 px-3">
              <h1 className="uppercase poppins-7 my-2 border-l-2 border-red-600 px-2">
                {item.title}
              </h1>
              <p className="text-sm text-justify capitalize p-2 sm:text-base md:text-lg lg:w-2/3">
                {item.description}
              </p>
              <hr />
              <p className="text-sm text-justify capitalize p-2 sm:text-base md:text-lg lg:w-2/3">
                {item.details}
              </p>
              <h3 className="text-red1 poppins-7 mt-4">
                ${item.price}
              </h3>
              <div className="w-2/3">
                <button
                  onClick={() => {
                    notify(), HandleIncreasOrder(parseInt(param));
                  }}
                  className=" w-full mt-4 py-2 px-3 text-sm bg-red1 outline-none uppercase poppins-5 transition-all btn text-my-white rounded-sm"
                >
                  add item
                </button>
                <ToastContainer
                  position="top-center"
                  autoClose={1000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
            </div>
            <div className="food-img col-span-12 sm:col-span-5 md:col-span-4 my-10">
              <img
                src={item.img}
                alt="order-item"
                className="size-72 sm:size-96 mx-auto rounded  shadow-md cursor-pointer transition-all hover:scale-105"
              />
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}

export default Order;
