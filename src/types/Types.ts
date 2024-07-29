// set rypes for menu items

export interface ImenuItems {
  id: number;
  title: string;
  description: string;
  category: string;
  price: string;
  img: string;
}


export type CategoriesProps ={
  menuItems : ImenuItems[]
}