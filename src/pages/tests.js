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
        <title>Code tests</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>
      <NavBar />
      <Footer />
    </>
  );
}
