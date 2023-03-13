import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <Head>
        <title>Neuralnine - Let&#39;s Develop Brains</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>

    <NavBar firstName={"HOME"}/>

      <section>
        <div className="flex flex-col justify-center items-center text-white bg-[#0a0a0a] min-h-[100vh]">
          <Image
            className="sm:w-[37%] w-full"
            width={1024}
            height={700}
            alt="img"
            src="https://media.discordapp.net/attachments/807562739324157962/1081366667449348247/hero.png"
          ></Image>
          <h2 className="text-white md:text-3xl">
          <Typewriter
              options={{
                strings: ["lets_develop(brains);"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 40,
              }}
            />
          </h2>
          <span className="p-7 fa fa-angle-double-down fa-3x text-orange-600"></span>
        </div>
      </section>

      <section className="bg-[#111111] text-gray-100">
        <h1 className="text-center text-[#FF7825] pt-16 pb-2 text-4xl font-bold">
          <Typewriter
            options={{
              strings: ["LATEST POSTS"],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 40,
            }}
          />
        </h1>
        <div className="container max-w-6xl p-4 mx-auto space-y-6 sm:space-y-12">
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              rel="noopener noreferrer"
              href="/mathematical-skills-needed-for-machine-learning"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 bg-gray-500 transition duration-300 ease-in-out hover:scale-110"
                src="https://media.discordapp.net/attachments/807562739324157962/1082969836054921366/maths.png?width=434&height=434"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">
                  MATHEMATICAL SKILLS NEEDED FOR MACHINE LEARNING
                </h2>
                <p className="text-[15px]">
                  Introduction When it comes to computer science and especially
                  to machine learning and data science, you oftentimes hear that
                  mathematical skills are fundamental. But is....
                </p>
              </div>
            </Link>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 bg-gray-500 transition duration-300 ease-in-out hover:scale-110"
                src="https://media.discordapp.net/attachments/807562739324157962/1082969835740352563/raspberrypi.png?width=434&height=434"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">
                  10 AWESOME RASPBERRY PI PROJECT IDEAS
                </h3>
                <p className="text-[15px]">
                  Introduction The Raspberry Pi is an awesome little piece of
                  hardware. It is essentially a minicomputer that costs less
                  than 60$. Some older versions even....
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 bg-gray-500 transition duration-300 ease-in-out hover:scale-110"
                src="https://media.discordapp.net/attachments/807562739324157962/1082969834863734915/corona.png?width=434&height=434"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">
                  ANALYZING CORONAVIRUS WITH PYTHON (COVID-19)
                </h3>
                <p className="text-[15px]">
                  Introduction Chances are, you are in quarantine right now and
                  the reason for that is the coronavirus, also known as
                  COVID-19. Now I am not....
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 bg-gray-500 transition duration-300 ease-in-out hover:scale-110"
                src="https://media.discordapp.net/attachments/807562739324157962/1082969834515611738/top2020.png?width=434&height=434"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">
                  TOP 5 PROGRAMMING LANGUAGES FOR 2020
                </h3>
                <p className="text-[15px]">
                  Introduction At the moment we can choose out of thousands of
                  programming languages to learn. We have so many different
                  choices that we get into...
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="min-h-[506px] bg-[#111111]">
        <h1 className="text-center text-[#FF7825] pt-40 text-3xl font-bold">
          <Typewriter
            options={{
              strings: ["TRENDING VIDEOS"],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 40,
            }}
          />
        </h1>
        <div className="container grid lg:grid-cols-3 justify-items-center gap-10 p-4 mx-auto flex-wrap pt-10">
          <div class="max-w-sm rounded-lg shadow bg-black border-gray-700 hover:opacity-[0.8]">
            <a href="https://www.youtube.com/watch?v=Qkd6effeDVU">
              <Image
                className="transition duration-300 ease-in-out hover:scale-110"
                width={724}
                height={500}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1082245279731941446/ytcard1.png?width=772&height=434"
              ></Image>
            </a>
          </div>

          <div class="max-w-sm rounded-lg shadow bg-black border-gray-700 hover:opacity-[0.8]">
            <a href="https://www.youtube.com/watch?v=Bi1-rsEkoYc">
              <Image
                className="transition duration-300 ease-in-out hover:scale-110"
                width={724}
                height={500}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1082245279287353414/ytcard2.png?width=772&height=434"
              ></Image>
            </a>
          </div>
          <div class="max-w-sm rounded-lg shadow bg-black border-gray-700  hover:opacity-[0.8]">
            <a href="https://www.youtube.com/watch?v=QM5XDc4NQJo">
              <Image
                className="transition duration-300 ease-in-out hover:scale-110"
                width={1000}
                height={500}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1082245278989561938/ytcard3.png?width=772&height=434"
              ></Image>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#111] text-gray-100 pb-20">
        <h1 className="text-center text-[#FF7825] pt-20 pb-10 text-4xl font-[700]">
        <Typewriter
              options={{
                strings: ["GITHUB PROJECTS"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 40,
              }}
            />
        </h1>
        <div className="relative max-w-6xl p-8 mx-auto space-y-6 sm:space-y-12 text-center">
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
            <Link
              href="/machine-learning"
              rel="noopener noreferrer"
              className="w-full h-72 py-14 mx-auto group hover:no-underline focus:no-underline bg-black transition duration-300 ease-in-out hover:scale-105"
            >
              <div className="container">
                <div className="overlay">
                  
                <div class="text">
                      <span class="fa fa-laptop-code fa-3x block p-4"></span>
                    Go To Machine Learning
                  </div>
                </div>
                <h1 className="object-cover w-full rounded h-50">
                  <span className="fa fa-laptop-code fa-3x text-[#FF7825]"></span>
                </h1>
                <div className="p-6 space-y-2">
                  <h3 className="text-[#FF7825] text-3xl font-[700] group-hover:underline group-focus:underline">
                    Machine Learning
                  </h3>
                  <p className="text-[18px] py-4">
                    Posts about Machine Learning and Artificial Intelligence.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="/finance"
              className="w-full h-72 py-14 mx-auto group hover:no-underline focus:no-underline bg-black transition duration-300 ease-in-out hover:scale-105"
            >
              <div className="container">
                <div className="overlay">
                  <div class="text">
                      <span className="fa fa-chart-line fa-3x text-black block p-4"></span>
                    Go To Finance
                  </div>
                </div>
                <h1 className="object-cover w-full rounded h-50">
                  <span className="fa fa-chart-line fa-3x text-[#FF7825]"></span>
                </h1>
                <div className="p-6 space-y-2">
                  <h3 className="text-[#FF7825] text-3xl font-[700] group-hover:underline group-focus:underline">
                    Finance
                  </h3>
                  <p className="text-[18px] py-4">
                    Posts about Finance and Data Science.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              rel="noopener noreferrer"
              href="/networking"
              className="w-full h-72 py-14 mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block transition duration-300 ease-in-out hover:scale-105"
            >
              <div className="container">
                <div className="overlay">
                <div class="text">
                      <span className="fa fa-globe fa-3x text-black p-4 block"></span>
                    Go To Networking
                  </div>
                </div>
                <h1 className="object-cover w-full rounded h-50">
                  <span className="fa fa-globe fa-3x text-[#FF7825]"></span>
                </h1>
                <div className="p-6 space-y-2">
                  <h3 className="text-[#FF7825] text-3xl font-[700] group-hover:underline group-focus:underline">
                    Networking
                  </h3>
                  <p className="text-[18px] py-4">
                    Posts about Networking and Hacking
                  </p>
                </div>
              </div>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="/other"
              className="w-full h-72 py-14 mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block transition duration-300 ease-in-out hover:scale-105"
            >
              <div className="container">
                <div className="overlay">
                <div class="text">
                      <span className="fa fa-list fa-3x text-black p-4 block"></span>
                       Go To Rankings and Lists
                  </div>
                </div>
                <h1 className="object-cover w-full rounded h-50">
                  <span className="fa fa-list fa-3x text-[#FF7825]"></span>
                </h1>
                <div className="p-6 space-y-2">
                  <h3 className="text-[#FF7825] text-3xl font-[700] group-hover:underline group-focus:underline">
                    Rankings and Lists.
                  </h3>
                  <p className="text-[18px] py-4">
                    Rankings and Lists of all kind.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer class="text-[#C4C4C4] body-font bg-black">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/"
              class="flex title-font font-medium items-center md:justify-start justify-center text-gray-100"
            >
              <Image
                className="h-auto inline w-full"
                width={1024}
                height={774}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1080232878887161896/logo.png?width=1025&height=425"
              ></Image>
            </Link>
            <p class="mt-2 text-md text-bold text-white text-center">
              Copyright &copy; 2019
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-[#FF7825] text-md mb-3">
                Navigation
              </h2>
              <nav class="list-none mb-10 flex-col items-center">
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
                    href="/books"
                    className="hover:text-orange-500 duration-500"
                  >
                    Books
                  </Link>
                </li>
                <li className="mx-4 my-1 md:my-0 ">
                  <Link
                    href="/videos"
                    className="hover:text-orange-500 duration-500"
                  >
                    Videos
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
                <li className="mx-4 my-1 md:my-0 ">
                  <Link
                    href="/about"
                    className="hover:text-orange-500 duration-500"
                  >
                    About
                  </Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-[#FF7825] text-md mb-3 text-center">
                Legal
              </h2>
              <nav class="list-none mb-10 flex-col items-center ">
                <li className="mx-4 my-1 md:my-0 ">
                  <Link href="/" className="hover:text-orange-500 duration-500">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mx-4 my-1 md:my-0 ">
                  <Link href="/" className="hover:text-orange-500 duration-500">
                    Terms and Conditions
                  </Link>
                </li>
              </nav>
            </div>
            <div class="mx-auto md:w-1/2  px-4">
              <h2 class="title-font font-medium text-[#FF7825] text-md mb-3 text-center">
                Social Media
              </h2>
              <div class="px-4 py-6 md:flex md:items-center md:justify-between">
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
          </div>
        </div>
      </footer>
    </>
  );
}
