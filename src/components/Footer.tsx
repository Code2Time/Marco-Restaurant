import { FaArrowRight } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="footer-container w-full h-auto flex flex-col justify-center items-center mt-40 text-my-white">
        <div className="w-full h-auto item1 grid grid-cols-12 bg-red1">
            <div className="opening-hours col-span-12 sm:col-span-6 lg:col-span-4 p-10 sm:p-12 ">
                <h1 className="poppins-7 capitalize">opening hours</h1>
                <div className="w-full flex justify-around items-center border-b-[1px] mt-5 p-2 text-xs sm:text-sm md:text-base">
                    <h2>Monday</h2>
                    <h3>08.00 am - 10.00 pm</h3>
                    <hr className="text-white" />
                </div>
                <div className="w-full flex justify-around items-center border-b-[1px] mt-5 p-2 text-xs sm:text-sm md:text-base">
                    <h2>Saturday</h2>
                    <h3>08.00 am - 10.00 pm</h3>
                    <hr className="text-white" />
                </div>
                <div className="w-full flex justify-around items-center border-b-[1px] mt-5 p-2 text-xs sm:text-sm md:text-base">
                    <h2>Sunday</h2>
                    <h3>08.00 am - 10.00 pm</h3>
                    <hr className="text-white" />
                </div>
            </div>
            <div className="contact-us col-span-12 sm:col-span-6 lg:col-span-4 p-10 sm:p-12 flex flex-col justify-center items-start text-xs sm:text-base">
                <h1 className="poppins-7 pb-2 capitalize">contact us</h1>
                <p className="text-slate-200">56/8, los angeles, rochy beach, Santa monica, United states of america - 1205</p>
                <h1 className="mt-1 sm:mt-3 poppins-7">012-6532-568-974</h1>
                <h1 className="mt-1 sm:mt-3 poppins-7">012-6532-569-9748</h1>
            </div>
            <div className="news-letter col-span-12 sm:col-span-6 lg:col-span-4 p-10 sm:p-12 text-xs sm:text-base">
                <h1 className="poppins-7 capitalize">Newsletter</h1>
                <p className="text-slate-200 capitalize my-2">You can trust us. we only send promo offers, not a single spam.</p>
                <div className="w-full relative p-4">
                <input type="text" className="w-full h-7 sm:h-10 px-4 py-2 rounded-xl placeholder:text-slate-800 order-1 focus:outline-none text-center text-black focus:outline-slate-400" placeholder="Your email address..."/>
                    <button type="submit" className="absolute right-[17px] top-4 sm:top-5 sm:right-5  order-2 rounded-full bg-red1 p-2 text-white" >
                    <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
        <div className="item2 w-full h-11 bg-gray-4">

        </div>
      </div>
    </>
  );
}

export default Footer;
