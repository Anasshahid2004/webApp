import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import { useState } from "react";

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
      <nav>
        <div className="flex justify-between items-center">
          <Image
            className="inline w-[22%]"
            width={1024}
            height={774}
            alt="img"
            src="https://media.discordapp.net/attachments/807562739324157962/1080232878887161896/logo.png?width=1025&height=425"
          ></Image>
        </div>
        <ul>
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              href="/"
              className="text-lg hover:text-orange-500 duration-500"
            >
              HOME
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              href="/blog"
              className="text-lg hover:text-orange-500 duration-500"
            >
              BLOG
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              href="/books"
              className="text-lg hover:text-orange-500 duration-500"
            >
              BOOKS
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              href="/videos"
              className="text-lg hover:text-orange-500 duration-500"
            >
              VIDEOS
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              href="/shop"
              className="text-lg hover:text-orange-500 duration-500"
            >
              SHOP
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              href="/about"
              className="text-lg hover:text-orange-500 duration-500"
            >
              ABOUT
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              href="/setup"
              className="text-lg hover:text-orange-500 duration-500"
            >
              SETUP
            </Link>
          </li>
        </ul>
      </nav>
      <section className="bg-[#0e0e0e] text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-16 md:px-10 lg:px-32 xl:max-w-4xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            THE
            <span className="text-[#FF7825]"> NEURALNINE </span> MERCH
          </h1>
          <hr class="w-full h-1.5 mx-auto  bg-[#FF7825] border-0 rounded md:my-10" />
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
                className="mx-auto object-cover w-fit rounded-lg h-fit"
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
                className="mx-auto object-cover w-fit rounded-lg h-fit"
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
                className="mx-auto object-cover w-fit rounded-lg h-fit"
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
                className="mx-auto object-cover w-fit rounded-lg h-fit"
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
                className="mx-auto object-cover w-fit rounded-lg h-fit"
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
                className="mx-auto object-cover w-fit rounded-lg h-fit"
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
            <Link href='https://www.redbubble.com/shop/ap/86109991'>
            <button className="px-8 py-3 m-2 text-md font-semibold rounded bg-[#FF7825] text-black">
              <span className="fa fa-shopping-cart"></span> GO TO SHOP
            </button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold leading-none sm:text-5xl mt-10">
            <span className="text-[#FF7825]"> PROGRAMMING </span> MERCH
          </h1>
          <hr class="w-full h-1.5 mx-auto  bg-[#FF7825] border-0 rounded md:my-10" />
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
                className="mx-auto object-cover w-fit rounded-lg h-fit"
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
                className="mx-auto object-cover w-fit rounded-lg h-fit"
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

      <footer class="text-[#C4C4C4] body-font bg-black">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
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
            <div class="lg:w-1/2 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-[#FF7825] tracking-widest text-sm mb-3">
                Social Media
              </h2>
              <nav class="list-none mb-10 gap-2">
                <li>
                  <Link
                    href="https://www.instagram.com/neuralnine"
                    class="text-white hover:text-[#FF7825]"
                  >
                    <span class="fab fa-instagram fa-3x"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/channel/UC8wZnXYK_CGKlBcZp-GxYPA"
                    class="text-white hover:text-[#FF7825]"
                  >
                    <span class="fab fa-youtube fa-3x"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.twitter.com/neuralnine"
                    class="text-white hover:text-[#FF7825]"
                  >
                    <span class="fab fa-twitter fa-3x"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/neuralnine/"
                    class="text-white hover:text-[#FF7825]"
                  >
                    <span class="fab fa-linkedin fa-3x"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/NeuralNine"
                    class="text-white hover:text-[#FF7825]"
                  >
                    <span class="fab fa-github fa-3x"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.neuralnine.com/contact"
                    class="text-white hover:text-[#FF7825]"
                  >
                    <span class="fa fa-envelope fa-3x"></span>
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
