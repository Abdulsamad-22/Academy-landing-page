import { useState } from "react";
import HeaderTexts from "./HeroTexts";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <HeaderTexts />
      <div className="z-0 relative">
        <img className="w-full h-[100vh]" src="/images/hero-bg.png" alt="" />

        <div>
          <img
            className="absolute bottom-[8%] md:bottom-0 md:right-0 w-[432px] md:w-[520px] h-[549px] md:h-[720px] z-0"
            src="/images/hero-image.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center justify-between w-full absolute top-0 px-8 md:px-16 py-8">
        <div className="w-[66px] h-[69px] rounded-full bg-[#fff] relative mr-[78px]">
          <img
            className="w-[49px] h-[43px] absolute top-4 left-2"
            src="/images/logo.png"
            alt=""
          />
        </div>

        <nav className="">
          <div className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <img className="w-9 h-9" src="/images/icon-menu.svg" alt="" />
          </div>

          <ul className="hidden md:flex flex flex-col md:flex-row items-center text-[#fff]">
            <li className="py-2 px-4 text-[1rem] hover:text-[#636363] cursor-pointer relative group">
              About Us
              <span class="absolute left-0 -bottom-3 w-0 h-[2px] bg-[#fff] group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="py-2 px-4 text-[1rem] hover:text-[#636363] cursor-pointer relative group">
              Tasks
              <span class="absolute left-0 -bottom-3 w-0 h-[2.5px] bg-[#fff] group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="py-2 px-4 text-[1rem] hover:text-[#636363] cursor-pointer relative group">
              Courses
              <span class="absolute left-0 -bottom-3 w-0 h-[2px] bg-[#fff] group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="py-2 px-4 text-[1rem] hover:text-[#636363] cursor-pointer relative group">
              Academy
              <span class="absolute left-0 -bottom-3 w-0 h-[2px] bg-[#fff] group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="py-2 px-4 text-[1rem] hover:text-[#636363] cursor-pointer relative group">
              Contact Us
              <span class="absolute left-0 -bottom-3 w-0 h-[2px] bg-[#fff] group-hover:w-full transition-all duration-300"></span>
            </li>
          </ul>

          {/* Mobile menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out absolute top-0 -right-0 bg-[#fff] py-16 px-8 w-2/3 h-[100vh] rounded-lg z-20 ${
              isOpen ? "block" : "max-h-0 hidden"
            }`}
          >
            <ul className="text-[#12114E] space-y-8">
              <button
                onClick={() => setIsOpen(false)}
                className="md:hidden px-4 py-4 border-2 border-[#12114E] rounded-lg"
              >
                <img src="/images/icon-close.svg" alt="" />
              </button>

              <li className="text-[1.25rem] hover:text-[#636363] cursor-pointer relative group">
                About Us
                <span class="absolute left-0 -bottom-3 w-0 h-[2.5px] bg-[#12114E] group-hover:w-full transition-all duration-300"></span>
              </li>
              <li className="text-[1.25rem] hover:text-[#636363] cursor-pointer relative group">
                Tasks
                <span class="absolute left-0 -bottom-3 w-0 h-[2.5px] bg-[#12114E] group-hover:w-full transition-all duration-300"></span>
              </li>
              <li className="text-[1.25rem] hover:text-[#636363] cursor-pointer relative group">
                Courses
                <span class="absolute left-0 -bottom-3 w-0 h-[2.5px] bg-[#12114E] group-hover:w-full transition-all duration-300"></span>
              </li>
              <li className="text-[1.25rem] hover:text-[#636363] cursor-pointer relative group">
                Academy
                <span class="absolute left-0 -bottom-3 w-0 h-[2.5px] bg-[#12114E] group-hover:w-full transition-all duration-300"></span>
              </li>
              <li className="text-[1.25rem] hover:text-[#636363] cursor-pointer relative group">
                Contact Us
                <span class="absolute left-0 -bottom-3 w-0 h-[2.5px] bg-[#12114E] group-hover:w-full transition-all duration-300"></span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
