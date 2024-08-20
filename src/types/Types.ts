// set rypes for menu items



export interface ImenuItems {
  id: number;
  title: string;
  description: string;
  category: string;
  price: string;
  img: string;
  details ?: string
}


export type CategoriesProps = {
  menuItems : ImenuItems[]
}

export interface Iusers {
  id : number
  img : string 
  info : string
  name : string
}

export interface Iblogs {
  id : number
  title : string
  desc : string
  date : string
  img : string
}
 
// Context asset

export interface Iservices {
  id ?: number
  title : string
  description : string
  img : string
}

export interface IOrderContextProvider{
  children : React.ReactNode
}

export interface Iorders {
  id : number
  qty : number
}
export interface IOrderContext {
  orders ?: Iorders[],
  HandleIncreasOrder : (id : number) => void,
  HandleDecreasOrder : (id : number) => void,
  Orderqty : (id : number) => number,
  HandleRemoveOrder : (id : number) => void,
  AllOrders : number
}
