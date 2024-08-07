import { ServiceData } from "../data/ServiceData"
import ServiceItem from "./ServiceItem"

function Services() {
  return (
    <>
      <div className="services-container flex flex-col justify-center items-center w-full h-auto mt-5 gap-4 ">
        <h1 className="poppins-7 text-xl sm:text-2xl md:text-3xl">What Kind of Services we Offer</h1>
        <h3 className="text-gray-2 text-xs sm:text-base">Who are in extremely love with eco friendly system.</h3>
        <div className="grid grid-cols-12">
            {
                ServiceData.map((item)=>(
                   <ServiceItem key={item.id} {...item} />
                ))
            }
        </div>
      </div>
    </>
  )
}

export default Services
