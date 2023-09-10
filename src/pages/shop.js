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
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-16 md:px-10 lg:px-32 xl:max-w-4xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            THE
            <span className="text-[#FF7825]"> NEURALNINE </span> MERCH
          </h1>
          <hr class="w-full h-1.5 mx-auto  bg-[#FF7825] border-0 rounded my-10" />
          <h1 className="text-3xl font-bold leading-none sm:text-4xl">
            NeuralNine Logo Collection
          </h1>
        </div>
      </section>
      <section className="bg-[#0e0e0e] text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="grid justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <a
              rel="noopener noreferrer"
              href="https://www.redbubble.com/i/mug/NeuralNine-by-NeuralNine/86109991.9Q0AD?asc=u"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded-lg h-fit transition duration-200 ease-in-out hover:scale-95"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083051435530395759/mugth.png?width=448&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  NeuralNine Coffee Mug
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
              href="https://www.redbubble.com/i/t-shirt/NeuralNine-by-NeuralNine/86109991.UGYPM?asc=u#&gid=1&pid=2"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded-lg h-fit transition duration-200 ease-in-out hover:scale-95"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083051435295527002/shirtth.png?width=448&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  NeuralNine Shirt
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.redbubble.com/i/cheeky-larrikin/NeuralNine-by-NeuralNine/86109991.G1FH6?asc=u#&gid=1&pid=1"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded-lg h-fit transition duration-200 ease-in-out hover:scale-95"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083051435010306048/padth.png?width=448&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  NeuralNine Mouse Pad
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.redbubble.com/i/hat/NeuralNine-by-NeuralNine/86109991.9AAXL?asc=u#&gid=1&pid=1"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded-lg h-fit transition duration-200 ease-in-out hover:scale-95"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083051434783809536/capth.png?width=448&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  NeuralNine Baseball Cap
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.redbubble.com/i/samsung-case/NeuralNine-by-NeuralNine/86109991.BHP2M?asc=u#&gid=1&pid=1"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded-lg h-fit transition duration-200 ease-in-out hover:scale-95"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083051434536357978/phoneth.png?width=448&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  NeuralNine Phone Case
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.redbubble.com/i/sticker/NeuralNine-by-NeuralNine/86109991.JCQM3?asc=u"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded-lg h-fit transition duration-200 ease-in-out hover:scale-95"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083051434309849169/stickerth.png?width=448&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  NeuralNine Sticker
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                  <span className="fa fa-shopping-cart"></span> VIEW ON AMAZON
                </button>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[#0e0e0e] text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-16 md:px-10 lg:px-32 xl:max-w-4xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            MORE OPTIONS
          </h1>
          <div className="flex flex-wrap justify-center mb-10">
            <Link href="https://www.redbubble.com/shop/ap/86109991">
              <button className="px-8 py-3 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
                <span className="fa fa-shopping-cart"></span> GO TO SHOP
              </button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold leading-none sm:text-5xl mt-10">
            <span className="text-[#FF7825]"> PROGRAMMING </span> MERCH
          </h1>
          <hr class="w-full h-1.5 mx-auto  bg-[#FF7825] border-0 rounded my-10" />
          <h1 className="text-3xl font-bold leading-none sm:text-4xl">
            Firewall Face Masks
          </h1>
        </div>
      </section>
      <section className="bg-[#0e0e0e] text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="grid justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
            <a
              rel="noopener noreferrer"
              href="https://www.redbubble.com/i/mask/Firewall-Green-by-NeuralNine/56048731.9G0D8"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded-lg h-fit transition duration-200 ease-in-out hover:scale-95"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083051434104332329/gm2-1.jpg?width=461&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  Firewall Mask Green
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
              href="https://www.redbubble.com/i/mask/Firewall-Orange-by-NeuralNine/56294958.9G0D8"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
            >
              <Image
                alt="presentation"
                className="mx-auto object-cover w-fit rounded-lg h-fit transition duration-200 ease-in-out hover:scale-95"
                width={480}
                height={420}
                src="https://media.discordapp.net/attachments/807562739324157962/1083051433915601019/om2.jpg?width=461&height=434"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">
                  Firewall Mask Orange
                </h3>
              </div>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
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
