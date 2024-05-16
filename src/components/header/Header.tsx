import { useState } from "react";
import { AppName } from "../../utils/appName";
import SmoothScrollLink from "../smoothScroll/SmoothScroll";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <header className="fixed w-full top-0">
        <div className="hidden md:flex md:justify-between md:items-center md:h-20 bg-indigo-700 px-2">
          <h1 className="text-2xl font-bold text-white">{AppName}</h1>
          <nav id="navbar" className="navbar">
            <ul className="flex gap-4">
              <li>
                <SmoothScrollLink to="#home">Home</SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink to="#services">Services</SmoothScrollLink>
              </li>
             
              <li>
                <SmoothScrollLink to="#about">About</SmoothScrollLink>
              </li>

              <li>
                <SmoothScrollLink to="#contact">Skills</SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink to="#portfolio">Portfolio</SmoothScrollLink>
              </li>
            </ul>
          </nav>
        </div>

       <div className="md:hidden xl:hidden lg:hidden flex justify-between items-center h-20 w-full bg-indigo-700 px-2">
          <h1 className="text-2xl font-bold text-white">{AppName}</h1>
          <button
            className="bi bi-list mobile-nav-toggle text-white font-bold text-2xl"
            onClick={() => setNavOpen(!navOpen)}
          >
            
          </button>
        </div>
        <nav
          className={`${
            navOpen ? "" : "hidden"
          } h-screen bg-indigo-900 w-3/4 py-2 md:hidden xl:hidden lg:hidden`}
        >
          <ul className="flex flex-col">
            <li className="border-b border-gray-500 hover:bg-indigo-700 px-4 py-4">
              <a
                className="text-gray-300 font-bold hover:text-white hover:border-b-2 py-2"
                href="#hero"
              >
                Home
              </a>
            </li>
            <li className="border-b border-gray-500 hover:bg-indigo-700 px-4 py-4">
              <a
                className="text-gray-300 font-bold hover:text-white hover:border-b-2 py-2"
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="border-b border-gray-500 hover:bg-indigo-700 px-4 py-4">
              <a
                className="text-gray-300 font-bold hover:text-white hover:border-b-2 py-2"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="border-b border-gray-500 hover:bg-indigo-700 px-4 py-4">
              <a
                className="text-gray-300 font-bold hover:text-white hover:border-b-2 py-2"
                href="#team"
              >
                Team
              </a>
            </li>
            <li className="border-b border-gray-500 hover:bg-indigo-700 px-4 py-4">
              <a
                className="text-gray-300 font-bold hover:text-white hover:border-b-2 py-2"
                href="#contact"
              >
                Skills
              </a>
            </li>
            <li className="border-b border-gray-500 hover:bg-indigo-700 px-4 py-4">
              <a
                className="text-gray-300 font-bold hover:text-white hover:border-b-2 py-2"
                href="#about"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
