import { UseOrdersContext } from "../context/OrderContext";
import { ImenuItems, Iorders } from "../types/Types";
import { FaMinus, FaTrash } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi";
import { useEffect, useState } from "react";
import { MenuData } from "../data/MenuData";

function CartItem({ id, qty }: Iorders) {
// Use a State For Selected Item
  const [SelectedOrders, setSelectedOrders] = useState<ImenuItems>();

// Set Selected Item 
  useEffect(() => {
    const selected: any = MenuData.find((item) => item.id == id);
    setSelectedOrders(selected);
  }, []);

//  Get Items From Context
  const { HandleDecreasOrder, HandleIncreasOrder, HandleRemoveOrder } =
    UseOrdersContext();

//Set Subtotal  
  const subtotal: any = SelectedOrders?.price;

  return (
    <div className="order-itemContainer grid grid-cols-12 sm:flex justify-between items-center size-full overflow-x-auto border-b-2 border-dashed px-2">
      <button
        onClick={() => HandleRemoveOrder(id)}
        className="hidden sm:block sm:size-5 cursor-pointer hover:text-red1 "
      >
        {" "}
        <FaTrash />
      </button>
      <div className="col-span-12 mx-auto p-10 shadow-sm sm:col-end-5 sm:shadow-none">
        <img
          src={SelectedOrders?.img}
          alt=""
          className=" size-96 sm:size-40 rounded-sm z-10"
        />
      </div>
      <div className="col-span-12 text-center ">
        <h1 className="poppins-6 capitalize my-5">{SelectedOrders?.title}</h1>
        <p className="poppins-3 text-gray-800">{SelectedOrders?.description}</p>
        <div className="flex flex-col justify-center items-center mt-5 gap-7">
          <div className="flex justify-center items-center mt-5 gap-7">
            <button
              onClick={() => HandleDecreasOrder(id)}
              className="border p-3 text-my-white bg-red1 rounded cursor-pointer hover:shadow-lg shadow-red1"
            >
              <FaMinus />
            </button>
            <h1 className="poppins-7 text-4xl">{qty}</h1>
            <button
              onClick={() => HandleIncreasOrder(id)}
              className="border p-3 text-my-white bg-red1 rounded cursor-pointer hover:shadow-lg shadow-red1"
            >
              <HiOutlinePlus />
            </button>
          </div>
          <button
            onClick={() => HandleRemoveOrder(id)}
            className="border w-full py-3 bg-red1 text-my-white rounded-md overflow-hidden cursor-pointer sm:hidden"
          >
            <FaTrash className="mx-auto size-7  " />
          </button>
        </div>
      </div>
      <div className="col-span-12  flex justify-between mt-4 sm:flex-col items-center  gap-28 ">
        <h1 className="poppins-7 text-red1">${SelectedOrders?.price}</h1>
        <p className="text-xs poppins-7">subtotal:${subtotal * qty}</p>
      </div>
    </div>
  );
}

export default CartItem;
