import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import SecondHeader from "../components/SecondHeader";

function Orders() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return <>
  {isLoading ? <Loading />: 
  
  <div>
    <section>
      <SecondHeader/>
    </section>
    <section className="">

    </section>
  </div>
  
  
  
  }</>;
}

export default Orders;
