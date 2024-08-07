import { Iservices } from "../types/Types"




function ServiceItem({description , img , title }:Iservices) {
  return (
    <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-center p-10 shadow-md ">
    <img  src={img} alt="serviceItem" className="size-64 md:size-80 rounded cursor-pointer hover:scale-105 transition-all" />
    <h1 className="poppins-7  my-4">{title}</h1>
    <p className="poppins-3 w-2/3 text-justify">{description}</p>
    </div>
  )
}

export default ServiceItem
