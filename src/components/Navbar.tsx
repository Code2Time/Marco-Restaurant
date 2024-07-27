import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";


function Navbar() {

  // change style when scrolling

  const [style, setStyle] = useState<boolean>(false);

  const Changestyle = (): void => {
   if (window.scrollY >= 45) {
     setStyle(true);
  
   } else {
     setStyle(false);
   }
 }; 
 window.addEventListener("scroll", Changestyle);

  return (
    <div id="nav" className={style ? ("sticky top-0 w-full h-auto  bg-gray-0  ") : ("navbar-container w-full h-auto mt-28")}>
      <div className={style ? ("border-none") : ("nav w-9/12  border-t-[1px] border-b-[1px] mx-auto   ")}>
        <Disclosure
          dir="rtl"
          id="nav-container"
          as="nav"
          className="w-full mx-auto"
        >
          {({ open }) => (
            <div>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex  items-center justify-center ">
                    <div className="hidden sm:ml-6 sm:block">
                      <div id="nav" className="flex space-x-4 justify-center items-center text-my-white  ">
                      <NavLink
                          to="/"
                          className="navlink px-3 py-2 text-sm     hover:text-red1 "
                        >
                          <h1>Gallery</h1>
                        </NavLink>
                      <NavLink
                          to="/"
                          className="navlink px-3 py-2 text-sm   hover:text-red1 "
                        >
                          <h1>Contact</h1>
                        </NavLink>
                        <NavLink
                          to="/"
                          className="navlink px-3 py-2 text-sm   hover:text-red1"
                        >
                          <h1>Menu</h1>
                        </NavLink>
                        <NavLink
                          to="/"
                          className="navlink px-3 py-2 text-sm    hover:text-red1"
                        >
                          <h1>About</h1>
                        </NavLink>
                        <NavLink
                          to="/"
                          className="navlink px-3 py-2 text-sm font-medium   hover:text-red1 "
                        >
                          <h1>Home</h1>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <h1 className="block sm:hidden poppins-6 mx-2 text-my-white ">
                        Menu
                      </h1>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      ></Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  <NavLink
                    to="/"
                    className="text-gray-300  hover:text-white block rounded-md px-3 py-2 text-base font-medium text-center Yekan"
                  >
                    صفحه اصلی
                  </NavLink>
                  <NavLink
                    to="/shop"
                    className="text-gray-300 hover:bg-transparent !block  text-center   hover:text-white  rounded-md px-3 py-2 text-sm font-medium Lamia"
                  >
                    محصولات
                  </NavLink>
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default Navbar;
