import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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

      <NavBar />

      <section>
        <div className="flex flex-col justify-center items-center text-white bg-[#0a0a0a] min-h-[100vh]">
          <Image
            className="max-w-md md:max-w-lg xl:max-w-xl"
            width={1024}
            height={700}
            alt="img"
            src="https://media.discordapp.net/attachments/807562739324157962/1081366667449348247/hero.png"
          ></Image>
          <h2 className="text-white text-2xl md:text-3xl">
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
          <span className="glow p-7 fa fa-angle-double-down fa-3x text-orange-600"></span>
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
      <Footer />
    </>
  );
}
