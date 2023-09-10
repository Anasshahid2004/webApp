import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black pb-4 pt-3 sticky top-0 z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-start ">
            <Link
              href={"/"}
              className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            >
              <Image
                className=" w-[184px] "
                width={1024}
                height={774}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1080232878887161896/logo.png?width=1025&height=425"
              ></Image>
            </Link>
          </div>
          <div className="-mr-2 flex sm:hidden ">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <div className="hidden  sm:flex sm:items-center ">
            <Link
              href={"/"}
              className="mr-5 text-white mt-3 hover:text-orange-400 text-lg cursor-pointer px-4 "
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="mr-5 text-white mt-3 hover:text-orange-400 text-lg cursor-pointer px-4"
            >
              About
            </Link>
            <Link
              href={"/blog"}
              className="mr-5 text-white mt-3 hover:text-orange-400 text-lg cursor-pointer px-4"
            >
              Blog
            </Link>
            <Link
              href={"/shop"}
              className="mr-5 text-white mt-3 hover:text-orange-400 text-lg cursor-pointer px-4"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden `}>
        <div className="px-2 pt-2 pb-3">
          <Link
            href={"/"}
            className="mr-5 block my-5 text-white hover:text-orange-400 text-lg cursor-pointer px-4"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="mr-5 block my-5 text-white hover:text-orange-400 text-lg cursor-pointer px-4"
          >
            About
          </Link>
          <Link
            href={"/blog"}
            className="mr-5 block my-5 text-white hover:text-orange-400 text-lg cursor-pointer px-4"
          >
            Blog
          </Link>
          <Link
            href={"/shop"}
            className="mr-5 block my-5 text-white hover:text-orange-400 text-lg cursor-pointer px-4"
          >
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
