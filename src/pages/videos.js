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
        <title>Videos - Neuralnine</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>

      <NavBar />

      <section className="bg-[#0e0e0e] text-gray-100">
        <h1 className="text-center text-[#FF7825] pt-36 text-4xl font-bold pb-12">
          WHAT VIDEOS ARE YOU LOOKING FOR?
        </h1>
        <div className="container max-w-6xl p-2 mx-auto space-y-6 sm:space-y-12 pb-12">
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              rel="noopener noreferrer"
              href="https://www.youtube.com/playlist?list=PL7yh-TELLS1E6dNCzfQl-NG-KJP3C-4mc"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 transition duration-300 ease-in-out hover:scale-110 hover:opacity-[0.8]"
                src="https://media.discordapp.net/attachments/807562739324157962/1083041613409943632/Kopie-von-Kopie-von-Kopie-von-Kopie-von-Text-Platzhalter-1024x576.png?width=772&height=434"
              />
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https://www.youtube.com/playlist?list=PL7yh-TELLS1F3KytMVZRFO-xIo_S2_Jg1"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 transition duration-300 ease-in-out hover:scale-110 hover:opacity-[0.8]"
                src="https://media.discordapp.net/attachments/807562739324157962/1083041613162500106/int-1-1024x576.png?width=772&height=434"
              />
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=mLjqUaNkp7s"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 transition duration-300 ease-in-out hover:scale-110 hover:opacity-[0.8]"
                src="https://media.discordapp.net/attachments/807562739324157962/1083041612902432908/candle-1024x576.png?width=772&height=434"
              />
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https://www.youtube.com/playlist?list=PL7yh-TELLS1FfO5Q8KHK31VgsrcnWcTAk"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 transition duration-300 ease-in-out hover:scale-110 hover:opacity-[0.8]"
                src="https://media.discordapp.net/attachments/807562739324157962/1083041612663378011/ds-1-1024x576.png?width=772&height=434"
              />
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=jg5paDArl3E&list=PL7yh-TELLS1EZGz1-VDltwdwZvPV-jliQ"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 transition duration-300 ease-in-out hover:scale-110 hover:opacity-[0.8]"
                src="https://media.discordapp.net/attachments/807562739324157962/1083041612453646507/ml-1024x576.png?width=772&height=434"
              />
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=yw9re6Qigtk"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 transition duration-300 ease-in-out hover:scale-110 hover:opacity-[0.8]"
                src="https://media.discordapp.net/attachments/807562739324157962/1083041612185206784/port-1024x576.png?width=772&height=434"
              />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
