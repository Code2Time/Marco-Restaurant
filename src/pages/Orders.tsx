import { UseOrdersContext } from "../context/OrderContext";
import headerLogo from "../assets/order/order-bg.png";
import { MdRestaurantMenu } from "react-icons/md";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";


function Orders() {

// set Loading 

  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

// Get Data From Context

const {AllOrders , orders} = UseOrdersContext()


  return (
    <>
      {isLoading ? (
        <Loading />
      ) : 
        <div>
          <header>
            <div className="orders-header w-full h-52 sm:h-96 lg:h-[27rem]">
              <img src={headerLogo} alt="headerlogo" className="size-full" />
              <h1 className="orders-title text-center poppins-7 uppercase text-2xl sm:text-4xl lg:text-5xl p-2">
              {AllOrders == 0 ? 'your cart is empty' : 'your order'}
              </h1>
              <div className="text-center poppins-5 uppercase mt-5">{AllOrders == 0 ? (<Link to='/' className="flex justify-center items-center cursor-pointer transition-all hover:text-red1">see menu <span><MdRestaurantMenu /></span></Link>) : ('')} </div>
            </div>
          </header>
          <section className="mt-14 sm:mt-20 lg:mt-32 w-10/12 mx-auto ">
            <div className="h-auto w-auto max-w-[1000px] mx-auto my-4 rounded-sm flex flex-col justify-center items-center gap-4">
            {AllOrders !== 0 ? orders?.map(item =>(
              <CartItem key={item.id} {...item} />
            )) : ''}
            </div>
          </section>
        </div>
      }
    </>
  );
}

export default Orders;
