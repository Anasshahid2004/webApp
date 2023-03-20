import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
     <footer class="text-[#C4C4C4] body-font bg-[#000000]">
        <div class="container  px-5 py-24 mx-auto flex md:items-center  lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64   flex-shrink-0 md:mx-0 mx-auto  md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-100">
              <Image
                className="h-auto inline w-full"
                width={1024}
                height={774}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1080232878887161896/logo.png?width=1025&height=425"
              ></Image>
            </a>
            <p class="mt-2 text-md text-bold text-white text-center">
              Copyright &copy; 2019
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-start sm:text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4 list-none">
              <h2 class="title-font font-medium text-[#FF7825] text-md mb-3 ml-3">
                Navigation
              </h2>
                <li className="mx-4 my-1 md:my-0 ">
                  <Link href="/" className="hover:text-orange-500 duration-500">
                    Home
                  </Link>
                </li>
                <li className="mx-4 my-1 md:my-0 ">
                  <Link
                    href="/blog"
                    className="hover:text-orange-500 duration-500"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mx-4 my-1 md:my-0 ">
                  <Link
                    href="/about"
                    className="hover:text-orange-500 duration-500"
                  >
                    About
                  </Link>
                </li>
                <li className="mx-4 my-1 md:my-0 ">
                  <Link
                    href="/shop"
                    className="hover:text-orange-500 duration-500"
                  >
                    Shop
                  </Link>
                </li>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4 list-none">
              <h2 class="title-font font-medium text-[#FF7825] text-md mb-3 mt-3 sm:text-center text-start ml-3">
                Legal
              </h2>
                <li className="mx-4 my-1 md:my-0 ">
                  <Link href="/privacy-policy" className="hover:text-orange-500 duration-500">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mx-4 my-1 md:my-0 ">
                  <Link href="/terms-and-conditions" className="hover:text-orange-500 duration-500">
                    Terms and Conditions
                  </Link>
                </li>
            </div>
            <icons className="ml-4">
              <div class="mx-auto md:w-1/2 ">
                <h2 class="title-font font-medium text-[#FF7825] text-md mb-3 mt-3 text-start sm:text-center">
                  Social Media
                </h2>
                <div class=" md:flex md:items-center md:justify-between ">
                  <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0 mx-auto">
                    <Link
                      href="https://www.instagram.com/neuralnine"
                      class="text-white hover:text-[#FF7825]"
                    >
                      <span class="fab fa-instagram fa-2x"></span>
                    </Link>

                    <Link
                      href="https://www.youtube.com/channel/UC8wZnXYK_CGKlBcZp-GxYPA"
                      class="text-white hover:text-[#FF7825]"
                    >
                      <span class="fab fa-youtube fa-2x"></span>
                    </Link>
                    <Link
                      href="https://www.twitter.com/neuralnine"
                      class="text-white hover:text-[#FF7825]"
                    >
                      <span class="fab fa-twitter fa-2x"></span>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/neuralnine/"
                      class="text-white hover:text-[#FF7825]"
                    >
                      <span class="fab fa-linkedin fa-2x"></span>
                    </Link>
                    <Link
                      href="https://github.com/NeuralNine"
                      class="text-white hover:text-[#FF7825]"
                    >
                      <span class="fab fa-github fa-2x"></span>
                    </Link>
                    <Link
                      href="https://www.neuralnine.com/contact"
                      class="text-white hover:text-[#FF7825]"
                    >
                      <span class="fa fa-envelope fa-2x"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </icons>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
