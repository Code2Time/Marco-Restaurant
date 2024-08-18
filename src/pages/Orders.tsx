import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import headerLogo from "../assets/order/order-bg.png";
import { FaMinus, FaTrash } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi";

function Orders() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <header>
            <div className="orders-header w-full h-52 sm:h-96 lg:h-[27rem]">
              <img src={headerLogo} alt="headerlogo" className="size-full" />
              <h1 className="orders-title text-center poppins-7 uppercase text-2xl sm:text-4xl lg:text-5xl p-2">
                your orders
              </h1>
            </div>
          </header>
          <section className="mt-14 sm:mt-20 lg:mt-32 w-10/12 mx-auto ">
            <div className="h-auto w-auto max-w-[900px] mx-auto my-4 rounded-sm flex flex-col justify-center items-center gap-4">
              <div className="order-itemContainer grid grid-cols-12 sm:flex justify-between items-center size-full overflow-x-auto">
                <FaTrash className="hidden sm:block " />
                <div className="col-span-12 mx-auto p-10 shadow-sm sm:col-end-5 sm:shadow-none">
                  <img
                    src="http://localhost:5173/src/assets/Menu/Taco%20Soup.jpg"
                    alt=""
                    className=" size-96 sm:size-40 rounded-sm z-10"
                  />
                </div>
                <div className="col-span-12 text-center ">
                  <h1 className="poppins-6 capitalize my-5">title</h1>
                  <p className="poppins-3 text-gray-800">
                    These chili cheese dogs are perfect for a quick and
                    satisfying Lunch.
                  </p>
                  <div className="flex flex-col justify-center items-center mt-5 gap-7">
                    <div className="flex justify-center items-center mt-5 gap-7">
                      <button className="border p-3 text-my-white bg-red1 rounded cursor-pointer">
                        <FaMinus />
                      </button>
                      <h1 className="poppins-7 text-4xl">54</h1>
                      <button className="border p-3 text-my-white bg-red1 rounded cursor-pointer">
                        <HiOutlinePlus />
                      </button>
                    </div>
                    <button className="border w-full py-3 bg-red1 text-my-white rounded-md overflow-hidden cursor-pointer sm:hidden">
                      <FaTrash className="mx-auto size-7  " />
                    </button>
                  </div>
                </div>
                <div className="col-span-12  flex justify-between mt-4 sm:flex-col items-center  ">
                  <h1 className="poppins-7">$23423</h1>
                  <p className="text-xs">item subtotal : $56</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Orders;
