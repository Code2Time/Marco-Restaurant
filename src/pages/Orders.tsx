import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import headerLogo from '../assets/order/order-bg.png'
import Container from "../components/Container";
import { FaTrash } from "react-icons/fa6";


function Orders() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  return <>
  {isLoading ? <Loading />: 
  
  <div>
    <header>
     <div className="orders-header w-full h-auto">
      <img src={headerLogo} alt="headerlogo" className="size-full" />
      <h1 className="orders-title text-center poppins-7 uppercase text-2xl sm:text-4xl lg:text-5xl p-2">your orders</h1>
     </div>
     <Container>
      <div className="h-52 w-full max-w-[900px] mx-auto border my-4 rounded-sm flex flex-col justify-center items-center">
      <div className="order-itemContainer grid grid-cols-10 size-full overflow-x-auto">
        <div className="col-span-8 flex justify-around items-center ">
            <div><FaTrash /></div>
            <div><img src="http://localhost:5173/src/assets/Menu/Taco%20Soup.jpg" alt=""  className="size-40"/></div>
            <div className="flex flex-col">
              <h1>title</h1>
              <p>Lorem ipsum dolor sit.</p>
              <div className="flex">
                <button>+</button>
                <h1>54</h1>
                <button>-</button>
              </div>
            </div>
        </div>
        <div className="col-span-2 order-item flex flex-col justify-around items-end">
            <h1 className="poppins-7">$23423</h1>
            <p className="poppins-3">item subtotal : $56</p>
        </div>
      </div>
      </div>
     </Container>
    </header>
  </div>
  
  
  
  }</>;
}

export default Orders;
