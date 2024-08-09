import { createContext } from "react";

interface test {
    name : string
}

const OrderContext = createContext({} as test)

