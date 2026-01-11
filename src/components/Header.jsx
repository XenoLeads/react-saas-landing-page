import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const Header = ({ scroll_to }) => {
  const [isToggledNavbar, setIsToggledNavbar] = useState(false);
  return (
    <header className="h-16 border-b border-neutral-200 w-full fixed top-0 bg-white/50 backdrop-blur-sm z-10 overflow-y-visible">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-8 max-sm:px-4">
        <div className="flex justify-start items-center gap-4 cursor-pointer" onClick={scroll_to} data-scroll-to="hero">
          <img src={logo} alt="Logo" className="h-10 rounded-xl" />
          <h1 className="font-semibold text-2xl">XENO</h1>
        </div>
        <nav className="flex gap-12 items-center">
          <ul className="flex gap-10 text-neutral-600 max-md:hidden">
            <li>
              <a
                className="cursor-pointer hover:text-neutral-900 border-b border-b-transparent hover:border-b-neutral-900 transition-[color, border-bottom] smooth-timing"
                onClick={scroll_to}
                data-scroll-to="features"
              >
                Features
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-neutral-900 border-b border-b-transparent hover:border-b-neutral-900 transition-[color, border-bottom] smooth-timing"
                onClick={scroll_to}
                data-scroll-to="how-it-works"
              >
                How it Works
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-neutral-900 border-b border-b-transparent hover:border-b-neutral-900 transition-[color, border-bottom] smooth-timing"
                onClick={scroll_to}
                data-scroll-to="about"
              >
                About
              </a>
            </li>
          </ul>
          <div className="flex gap-8 max-md:hidden">
            <button className="text-indigo-500 hover:text-indigo-700 transition-[color] smooth-timing cursor-pointer">Sign In</button>
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-[background-color] smooth-timing cursor-pointer">
              Start Free Trial
            </button>
          </div>
          <button className="hidden max-md:inline-block" onClick={() => setIsToggledNavbar(prev => !prev)}>
            {isToggledNavbar ? <X /> : <Menu />}
          </button>

          <div
            className={`md:hidden fixed left-0 top-0 mt-16 h-auto w-full overflow-hidden grid grid-rows-[0fr] justify-center items-start transition-[grid-template-rows] duration-500 bg-neutral-100 text-center border-b-2 border-b-neutral-200 ${
              isToggledNavbar ? "pointer-events-auto grid-rows-[1fr]" : "pointer-events-none"
            }`}
          >
            <div className="overflow-hidden">
              <div className="w-fit flex flex-col gap-6 py-8">
                <ul className="flex flex-col gap-6 text-neutral-700 text-nowrap">
                  <li>
                    <a
                      className="cursor-pointer hover:text-neutral-900 border-b border-b-transparent hover:border-b-neutral-900 transition-[color, border-bottom] smooth-timing"
                      onClick={scroll_to}
                      data-scroll-to="features"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer hover:text-neutral-900 border-b border-b-transparent hover:border-b-neutral-900 transition-[color, border-bottom] smooth-timing"
                      onClick={scroll_to}
                      data-scroll-to="how-it-works"
                    >
                      How it Works
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer hover:text-neutral-900 border-b border-b-transparent hover:border-b-neutral-900 transition-[color, border-bottom] smooth-timing"
                      onClick={scroll_to}
                      data-scroll-to="about"
                    >
                      About
                    </a>
                  </li>
                </ul>
                <div className="flex flex-col gap-4 text-nowrap">
                  <button className="text-indigo-500 hover:text-indigo-700 transition-[color] smooth-timing cursor-pointer">Sign In</button>
                  <button className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-[background-color] smooth-timing cursor-pointer">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
