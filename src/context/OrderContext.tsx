import { createContext, useContext, useState } from "react";
import { IOrderContext, IOrderContextProvider, Iorders } from "../types/Types";

// Create Our Context
const OrderContext = createContext({} as IOrderContext)


// Create UseOrdersContext For Easy Use
export  const UseOrdersContext = () => {
    return useContext(OrderContext)
}








// Create Layout For Use Context
export const OrderContextProvider = ({children}: IOrderContextProvider) => {
 
const [orders , setOrders] = useState<Iorders[]>([])



    return <OrderContext.Provider value={{orders}} >
        {children}
    </OrderContext.Provider>
}
