import { createContext, useContext, useState } from "react";
import { IOrderContext, IOrderContextProvider, Iorders } from "../types/Types";

// Create Our Context
const OrderContext = createContext({} as IOrderContext);

// Create UseOrdersContext For Easy Use
export const UseOrdersContext = () => {
  return useContext(OrderContext);
};

// Create Layout For Use Context
export const OrderContextProvider = ({ children }: IOrderContextProvider) => {
  const [orders, setOrders] = useState<Iorders[]>([]);

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

  return (
    <OrderContext.Provider
      value={{ orders, HandleIncreasOrder, HandleDecreasOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};
