import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <Head>
        <title>Shop - NeuralNine</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>
      <NavBar />
      <section className="bg-[#0e0e0e] text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-16 md:px-10 lg:px-32 xl:max-w-4xl ">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            <span className="text-[#FF7825] block"> NEURALNINE </span> CODING
            SETUP
          </h1>
          <hr class="w-full h-1.5 mx-auto  bg-[#FF7825] border-0 rounded my-10" />
          <h1 className="text-3xl font-bold leading-none sm:text-4xl">
            FULL LIST
          </h1>
        </div>
      </section>
      <section className="bg-[#0e0e0e] text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 pb-20">
          <div className="grid justify-center grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-2">
            <a
              rel="noopener noreferrer"
              href="http://hyperurl.co/neuralkeyboard"
              className="md:max-w-md mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded-lg h-fit transition duration-300 ease-in-out hover:scale-110"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083314687636164619/key-1024x446.png?width=996&height=434"
              />
            </a>
            <a
              rel="noopener noreferrer"
              href="http://hyperurl.co/neuralkeyboard"
              className="md:max-w-md mx-auto group hover:no-underline focus:no-underline my-auto"
            >
              <div className="p-6">
                <h3 className="text-3xl font-[700] group-hover:underline group-focus:underline text-center text-[#FF7825]">
                  HAVIT MECHANICAL KEYBOARD
                </h3>
                <h3 className="text-lg leading-none sm:text-1xl text-[#ccc] py-2">
                  A pretty nice and inexpensive mechanical keyboard. It has a
                  lot of light effects, feels great and it also has keys with
                  special functionalities.
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="http://hyperurl.co/neuralmouse"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded-lg transition duration-300 ease-in-out hover:scale-110  h-fit"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083314687397081088/mouse2-1.png?width=357&height=434"
              />
            </a>
            <a
              rel="noopener noreferrer"
              href="http://hyperurl.co/neuralmouse"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline my-auto"
            >
              <div className="p-6">
                <h3 className="text-3xl font-[700] group-hover:underline group-focus:underline text-center text-[#FF7825]">
                  HOLIFE ERGONOMIC MOUSE
                </h3>
                <h3 className="text-lg leading-none sm:text-1xl text-[#ccc] py-2">
                  An inexpensive and ergonomic mouse that can light up in
                  different colors. It comes with special keys that regulate
                  mouse sensitivity and change its color.
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="http://hyperurl.co/neuralmonitor"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded-lg transition duration-300 ease-in-out hover:scale-110  h-fit"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083314687128637480/mon.png?width=551&height=434"
              />
            </a>
            <a
              rel="noopener noreferrer"
              href="http://hyperurl.co/neuralmonitor"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline my-auto"
            >
              <div className="p-6">
                <h3 className="text-3xl font-[700] group-hover:underline group-focus:underline text-center text-[#FF7825]">
                  AOC 24&#34; MONITOR
                </h3>
                <h3 className="text-lg leading-none sm:text-1xl text-[#ccc] py-2">
                  A basic 24 inch monitor that is perfect for any programming
                  work and not expensive at all. It may not be the best choice
                  for gaming though.
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="http://hyperurl.co/neuralmicrophone"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded-lg transition duration-300 ease-in-out hover:scale-110  h-fit"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083314686876995635/mic-996x1024.png?width=422&height=434"
              />
            </a>
            <a
              rel="noopener noreferrer"
              href="http://hyperurl.co/neuralmicrophone"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline my-auto"
            >
              <div className="p-6">
                <h3 className="text-3xl font-[700] group-hover:underline group-focus:underline text-center text-[#FF7825]">
                  TONOR Q9 MICROPHONE
                </h3>
                <h3 className="text-lg leading-none sm:text-1xl text-[#ccc] py-2">
                  The microphone I make my videos with. I personally think it is
                  high quality. The sound is perfect and it also comes with a
                  great stand.
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="http://hyperurl.co/neuraldraw"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded-lg transition duration-300 ease-in-out hover:scale-110  h-fit"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083314686654689420/draw.png?width=583&height=434"
              />
            </a>
            <a
              rel="noopener noreferrer"
              href="http://hyperurl.co/neuraldraw"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline my-auto"
            >
              <div className="p-6">
                <h3 className="text-3xl font-[700] group-hover:underline group-focus:underline text-center text-[#FF7825]">
                  DRAWING TABLET
                </h3>
                <h3 className="text-lg leading-none sm:text-1xl text-[#ccc] py-2">
                  For most explanation videos I usually use a drawing tablet.
                  This one is perfect for very simple tasks. I would not
                  recommend it for professional artwork or for designing though.
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
