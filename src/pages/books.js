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
        <title>Books - NeuralNine</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>
      <NavBar />
      <section className="bg-[#0e0e0e] text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-16 md:px-10 lg:px-32 xl:max-w-4xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            THE
            <span className="text-[#FF7825]"> PYTHON </span> BIBLE
          </h1>
          <hr class="w-full h-1.5 mx-auto  bg-[#FF7825] border-0 rounded my-10" />
          <Image
            className="inline w-full transition duration-500 ease-in-out hover:scale-110"
            width={1024}
            height={400}
            alt="img"
            src="https://media.discordapp.net/attachments/807562739324157962/1083010918297911406/5in1low-1.png?width=1025&height=392"
          ></Image>
          <h3 className="text-3xl font-bold leading-none sm:text-1xl">
            PYTHON BIBLE 3 IN 1
          </h3>
          <h3 className="text-2xl font-bold leading-none sm:text-1xl text-[#FF7825] py-2">
            COLLECTION
          </h3>
          <div className="flex flex-wrap justify-center">
            <Link href="https://www.amazon.com/Python-Bible-Beginner-Intermediate-Learning-ebook/dp/B0868PZBCJ/ref=sr_1_1?qid=1670067650&refinements=p_27%3AFlorian+Dedov&s=books&sr=1-1">
              <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#0e0e0e] text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              rel="noopener noreferrer"
              href="https://www.amazon.com/gp/product/B07W5XDKLG/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i10"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded h-fit transition duration-500 ease-in-out hover:scale-90"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083015321000095905/12low.png?width=271&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  PYTHON BIBLE 3 IN 1
                </h3>
                <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">
                  COLLECTION
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </Link>
            <a
              rel="noopener noreferrer"
              href="https://www.amazon.com/gp/product/B07WMSWBB1/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i9"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded h-fit transition duration-500 ease-in-out hover:scale-90"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083015324531695626/11low.png?width=271&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  PYTHON BIBLE 5 IN 1
                </h3>
                <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">
                  COLLECTION
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </a>
            <Link
              rel="noopener noreferrer"
              href="https://www.amazon.com/Python-Bible-Beginner-Intermediate-Learning-ebook/dp/B0868PZBCJ/ref=sr_1_1?qid=1670067650&refinements=p_27%3AFlorian+Dedov&s=books&sr=1-1"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded h-fit transition duration-500 ease-in-out hover:scale-90"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083015323743170590/10.png?width=271&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  PYTHON BIBLE 7 IN 1
                </h3>
                <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">
                  COLLECTION
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https://www.amazon.com/gp/product/B07SZQQGZY/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i3"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded h-fit transition duration-500 ease-in-out hover:scale-90"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083015323407622284/1low.png?width=271&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  PYTHON BIBLE VOLUME ONE
                </h3>
                <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">
                  FOR BEGINNERS
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https://www.amazon.com/gp/product/B07TJ23HG5/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i2"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded h-fit transition duration-500 ease-in-out hover:scale-90"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083015323059499150/2low-640x1024.png?width=271&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  PYTHON BIBLE VOLUME TWO
                </h3>
                <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">
                  FOR INTERMEDIATES
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https://www.amazon.com/gp/product/B07V45YB89/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i5"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded h-fit transition duration-500 ease-in-out hover:scale-90"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083015322711367720/3low-640x1024.png?width=271&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  PYTHON BIBLE VOLUME THREE
                </h3>
                <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">
                  DATA SCIENCE
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https://www.amazon.com/gp/product/B07VZW6KC6/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i6"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded h-fit transition duration-500 ease-in-out hover:scale-90"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083015322380021880/4low.png?width=271&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  PYTHON BIBLE VOLUME FOUR
                </h3>
                <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">
                  MACHINE LEARNING
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https://www.amazon.com/gp/product/B07WJW31B2/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i4"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded h-fit transition duration-500 ease-in-out hover:scale-90"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083015322057056367/5low.png?width=271&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  PYTHON BIBLE VOLUME FIVE
                </h3>
                <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">
                  FOR FINANCE
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https://www.amazon.com/gp/product/B0854PPMLS/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i7"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded h-fit transition duration-500 ease-in-out hover:scale-90"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083015321507594260/6low.png?width=271&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  PYTHON BIBLE VOLUME SIX
                </h3>
                <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">
                  NEURAL NETWORKS
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https://www.amazon.com/gp/product/B0867KCQW4/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i8"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded h-fit transition duration-500 ease-in-out hover:scale-90"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083015320559689830/7low.png?width=271&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  PYTHON BIBLE VOLUME SEVEN
                </h3>
                <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">
                  COMPUTER VISION
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#0e0e0e] text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-16 md:px-10 lg:px-32 xl:max-w-4xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            THE
            <span className="text-[#FF7825]"> ALGORITHM </span> BIBLE
          </h1>
          <hr class="w-full h-1.5 mx-auto  bg-[#FF7825] border-0 rounded my-10" />
          <Image
            className="inline w-fit py-5 transition duration-500 ease-in-out hover:scale-110"
            width={1024}
            height={400}
            alt="img"
            src="https://media.discordapp.net/attachments/807562739324157962/1083036497109856286/biblealgorithms.png?width=271&height=434"
          ></Image>
          <h3 className="text-3xl font-bold leading-none sm:text-1xl">
            THE BIBLE OF ALGORITHMS AND DATA STRUCTURES
          </h3>
          <h3 className="text-2xl font-bold leading-none sm:text-1xl text-[#ffe536] py-2">
            A COMPLEX SUBJECT SIMPLY EXPLAINED
          </h3>
          <div className="flex flex-wrap justify-center">
            <Link href="https://www.amazon.com/gp/product/B08GGGGY5W/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i1">
              <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
