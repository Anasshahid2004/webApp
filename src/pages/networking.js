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
        <title>Networking - NeuralNine</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>
      <NavBar />
      <section className="bg-[#0e0e0e] text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-16 md:px-10 lg:px-32 xl:max-w-4xl">
          <h1 className="text-4xl font-bold leading-none sm:text-4xl">
            <span className="text-[#FF7825]"> NETWORKING </span>
          </h1>
          <hr class="w-full h-0.5 mx-auto  bg-[#FF7825] border-0 rounded md:my-10" />
          <h1 className="text-2xl font-bold leading-none sm:text-2xl">
            PROGRAMMING
          </h1>
        </div>
      </section>
      <section className="bg-[#0e0e0e] text-gray-100 pb-20">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="grid justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 bg-gray-500"
                src="https://media.discordapp.net/attachments/807562739324157962/1082969802328506368/ddos.png?width=434&height=434"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">
                  CODE A DDOS SCRIPT IN PYTHON
                </h3>
                <p className="text-[15px]">
                  Introduction In this tutorial we are going to write a
                  penetration-testing script, namely a DDOS script, in Python.
                  This program will allow us to flood....
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
                className="object-cover w-full rounded h-100 bg-gray-500"
                src="https://media.discordapp.net/attachments/807562739324157962/1082969801971998740/tcpchat.png?width=434&height=434"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">
                  TCP CHAT IN PYTHON
                </h3>
                <p className="text-[15px]">
                  Introduction Python is a great programming language for
                  computer networking. It allows us to create solid applications
                  very fast and easily. In this tutorial, we....
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
                className="object-cover w-full rounded h-100 bg-gray-500"
                src="https://media.discordapp.net/attachments/807562739324157962/1082969800327831602/portscannerpython.png?width=434&height=434"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">
                  THREADED PORT SCANNER IN PYTHON
                </h3>
                <p className="text-[15px]">
                  Introduction Port Scanners are primarily used for Penetration
                  Testing and Information Gathering. Essentially, we are looking
                  for open ports in a host for one of...
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
