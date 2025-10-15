import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [isMenuopen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    isMenuopen(!Menuopen);
  };
  return (
    <>
      <nav className=" w-full h-max bg-gradient-to-r from-indigo-400 via-purple-500 to-teal-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button*/}
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <span className="text-white text-2xl font-bold bg-opacity-20 bg-white px-3 py-1 rounded-md">
                  My Portfolio
                </span>
              </div>
              <div className="md:block hidden ml-4">
                <span className="text-white text-lg font-semibold">
                  Ajay Gangwar
                </span>
              </div>
            </div>
            {/* Desktop menu items */}
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-400 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-400 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-400 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-400 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Trace
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-400 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-400 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!isMenuopen)}
                className="text-white hover:text-teal-200 focus:outline-none transition-color duration-200"
              >
                {isMenuopen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuopen && (
          <div className="md:hidden bg-gradient-to-b from-indigo-600">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="text-white hover:bg-green-400 hover:text-slate-800 block px-3 py-2 rounded-md transition-color duration-200 text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:bg-green-400 hover:text-slate-800 block px-3 py-2 rounded-md transition-color duration-200 text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-white hover:bg-green-400 hover:text-slate-800 block px-3 py-2 rounded-md transition-color duration-200 text-base font-medium"
              >
                Skills
              </a>
              <a
                href="#"
                className="text-white hover:bg-green-400 hover:text-slate-800 block px-3 py-2 rounded-md transition-color duration-200 text-base font-medium"
              >
                Trace
              </a>
              <a
                href="#"
                className="text-white hover:bg-green-400 hover:text-slate-800 block px-3 py-2 rounded-md transition-color duration-200 text-base font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-white hover:bg-green-400 hover:text-slate-800 block px-3 py-2 rounded-md transition-color duration-200 text-base font-medium"
              >
                Contacts
              </a>
            </div>
            {/* <ul className="flex flex-col space-y-4 p-4">
              <li>
                <a
                  href="#"
                  className="text-white hover:bg-green-400 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:bg-green-400 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:bg-green-400 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:bg-green-400 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Trace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:bg-green-400 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:bg-green-400 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contacts
                </a>
              </li>
            </ul> */}
          </div>
        )}
      </nav>
    </>
  );
}
