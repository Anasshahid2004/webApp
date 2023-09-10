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
        <title>About - Neuralnine</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>

      <NavBar />
      <section className="bg-black text-gray-100">
        <div className="container flex flex-col mx-auto lg:flex-row min-h-[400px]">
          <div className="w-1/2 lg:w-1/3 mx-auto">
            <Image
              className=""
              width={1024}
              height={774}
              alt="img"
              src="https://media.discordapp.net/attachments/807562739324157962/1083062122054942823/Design-ohne-Titel-3-1024x1024.png?width=434&height=434"
            ></Image>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12 mt-10">
            <h2 className="text-4xl font-semibold leading-none mb-4">
              Let&#39;s Develop Brains!
            </h2>
            <p className="mt-4 mb-2 text-md">
              NeuralNine is an educational brand for computer science,
              programming and machine learning. The focus lies mainly on topics
              related to Python and artificial intelligence. You can find books,
              videos, blog posts and infographics here.
            </p>
            <p className="mt-4 mb-2 text-md">
              The blog posts and the videos can be found on this website for
              free. If you need a structured introduction into Python and
              machine learning from scratch, you can also take a look at the
              books if you want. Additionally, you can find lots of interesting
              posts and infographics on the Instagram page!.
            </p>
            <p className="mt-4 mb-8 text-md">
              The content of NeuralNine is structured as concise and simple as
              possible without neglecting quality or details..
            </p>
            <h2 className="text-3xl text-center font-semibold leading-none mb-8">
              Connect With NeuralNine!!
            </h2>
            <nav class="list-none mb-10 gap-2 flex flex-row justify-evenly">
              <li>
                <a class="text-white hover:text-[#FF7825]">
                  <span class="fab fa-instagram fa-3x"></span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-[#FF7825]">
                  <span class="fab fa-youtube fa-3x"></span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-[#FF7825]">
                  <span class="fab fa-twitter fa-3x"></span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-[#FF7825]">
                  <span class="fab fa-linkedin fa-3x"></span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-[#FF7825]">
                  <span class="fab fa-github fa-3x"></span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-[#FF7825]">
                  <span class="fa fa-envelope fa-3x"></span>
                </a>
              </li>
            </nav>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
