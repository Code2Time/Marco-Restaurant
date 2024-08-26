import { createContext, useContext} from "react";
import { IOrderContext, IOrderContextProvider, Iorders } from "../types/Types";
import { useLocaStage } from "./LocalStorage";

// Create Our Context
const OrderContext = createContext({} as IOrderContext);

// Create UseOrdersContext For Easy Use
export const UseOrdersContext = () => {
  return useContext(OrderContext);
};

// Create Layout For Use Context
export const OrderContextProvider = ({ children }: IOrderContextProvider) => {

  // Our Cart
  const [orders, setOrders] = useLocaStage<Iorders[]>('order',[]);

  const HandleIncreasOrder = (id: number) => {
    setOrders((currentOrders) => {
      let selected = currentOrders.find((item) => item.id == id);
      if (selected == null) {
        return [...currentOrders, { id: id, qty: 1 }];
      } else {
        return currentOrders.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const HandleDecreasOrder = (id: number) => {
    setOrders((currentOrders) => {
      let selected = currentOrders.find((item) => item.id == id);
      if(selected?.qty == 1){
        return currentOrders.filter(item => item.id !== id)
      } else {
        return currentOrders.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

 const Orderqty = (id : number) =>{
   return orders.find(item => item.id == id )?.qty || 0
 }


 const HandleRemoveOrder = (id : number) =>{
   setOrders(currentItems => {
    return currentItems.filter(item => item.id !== id)
   })
 }

 const AllOrders = orders.reduce((total , item)=> total + item.qty ,0)

  return (
    <OrderContext.Provider
      value={{ orders, HandleIncreasOrder, HandleDecreasOrder , Orderqty , HandleRemoveOrder ,AllOrders}}
    >
      {children}
    </OrderContext.Provider>
  );
};
