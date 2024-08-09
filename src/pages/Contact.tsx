import { GrHome } from "react-icons/gr"
import SecondHeader from "../components/SecondHeader"
import { BsTelephone } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import Footer from "../components/Footer"


function Contact() {
  return (
    <div className=" Contact-container">
     <SecondHeader />
     <div className=" w-full h-80 p-10 sm:px-52 sm:h-[30rem] md:h-[500px]  my-14 ">
     <iframe className="w-full h-full rounded-md " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211957.07290040443!2d-97.5596484623409!3d33.894050781809234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864d235933423ac3%3A0x6de02dba693e437e!2sLove%20County%2C%20OK%2C%20USA!5e0!3m2!1sen!2s!4v1723179139118!5m2!1sen!2s"   loading="eager" ></iframe>
     </div>
     <div className="contact-item w-10/12 mx-auto h-auto grid grid-cols-12 gap-2">
        <div className="contact-items col-span-12 sm:col-span-5 md:col-span-5">
          <div className="flex justify-center items-center gap-4 my-3">
          <div className="contact-icons">
            <GrHome className="size-7 text-red1 cursor-pointer" />
            </div>
            <div className="contact-info">
                <h1 className="poppins-7 text-sm md:text-base  ">Binghamton, New York</h1>
                <p className="poppins-2 text-xs md:text-base">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 my-3">
          <div className="contact-icons">
            <BsTelephone className="size-7 text-red1 cursor-pointer" />
            </div>
            <div className="contact-info">
                <h1 className="poppins-7 text-sm md:text-base  ">00 (958) 9865 562</h1>
                <p className="poppins-2 text-xs md:text-base">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 my-3">
          <div className="contact-icons">
            <AiOutlineMail className="size-7 text-red1 cursor-pointer" />
            </div>
            <div className="contact-info">
                <h1 className="poppins-7 text-sm md:text-base  ">support@code2time.com</h1>
                <p className="poppins-2 text-xs md:text-base">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="contact-message col-span-12 sm:col-span-7 md:col-span-6 flex  flex-col justify-center items-center">
            <div className="flex  flex-col gap-7 w-full h-auto">
                <input type="text" placeholder="Enter Your Name..."  className="w-full h-full border py-3 focus:outline-none text-center focus:border-red1"/>
                <input type="text" placeholder="Enter Email Address..."  className="w-full h-full border py-3 focus:outline-none text-center focus:border-red1"/>
                <input type="text" placeholder="Enter subject..."  className="w-full h-full border py-3 focus:outline-none text-center focus:border-red1"/>
            </div>
            <div className="w-full h-full my-7"><textarea className=" w-full h-full border py-3 focus:outline-none text-center focus:border-red1 " placeholder="Enter Message" required></textarea></div>
            <div className="w-full text-right"><button className="py-2 px-3 bg-red1 outline-none uppercase poppins-5 transition-all btn text-my-white rounded-sm">send message</button></div>
        </div>
     </div>
     <Footer />
    </div>
  )
}

export default Contact
