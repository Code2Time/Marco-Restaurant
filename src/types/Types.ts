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

export interface Iservices {
  id ?: number
  title : string
  description : string
  img : string
}