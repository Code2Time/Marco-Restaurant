function Reserve() {
  return (
    <div className="reserve-container w-full h-auto my-52 ">
      <div className="overlay w-full h-full grid grid-cols-12 gap-4 py-20 px-20 sm:px-24">
        <div className="rederve-title text-my-white p-7  col-span-12 sm:col-span-6 text-center ">
          <h1 className="poppins-7 text-xl  sm:w-[80%] text-justify capitalize">
            Reserve Your Seats to Confirm if You Come with Your Family
          </h1>
          <p className="sm:w-[90%] md:w-[70%] text-gray-400 my-10 text-justify p-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor{" "}
            <span className="hidden md:block">
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea.
            </span>
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 h-[300px] sm:h[400px] ">
          <div className="reserve-form-container w-full h-full border rounded bg-my-white">
            <form>
              <div className="w-full h-full flex flex-col">
                <div className="w-full h-auto py-2 px-6">
                  <input
                    required
                    type="text"
                    maxLength={12}
                    placeholder="Your Name"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-full h-auto py-2 px-6">
                  <input
                    required
                    type="email"
                    placeholder="Your email address"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-full h-auto py-2 px-6">
                  <input
                    required
                    type="number"
                    maxLength={12}
                    placeholder="Your Phone Number"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-full h-auto py-2 px-6">
                  <input required type="date" className="w-full h-full" />
                </div>
                <div className="w-full h-auto py-2 px-6">
                  <button className="py-2 px-3 bg-red1 outline-none  poppins-5 transition-all btn text-my-white rounded-sm mt-5">
                    Make Reaservation
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
