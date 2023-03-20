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
        <title>Terms And Conditions - NeuralNine</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>
      <NavBar />
        <section className="bg-[#111111] text-gray-100">
          <div className=" md:max-w-6xl mx-auto space-y-6 px-6 container">
            <h1 className="text-[#FF7825] pt-16 pb-2 text-4xl font-bold">
              <Typewriter
                options={{
                  strings: ["Terms and Conditions ('Terms')"],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 40,
                }}
              />
            </h1>
            <p className="text-[15px]">Last Updated: April 3rd, 2019</p>
            <p className="">Please read these Terms and Conditions (“Terms”, “Terms and Conditions”) carefully before using the http://www.neuralnine.com website operated by Florian Dedov (“us”, “we”, or “our”).</p>
            <p className="">Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
            <p className="font-semibold">By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

            <div className="space-y-1 pb-4">
              <h2 className="text-[#FF7825] pt-4 pb-4 text-3xl font-semibold ">Privacy And Security</h2>
              
                <p>Your privacy is very important to us. We are committed to protecting your privacy. All personal data provided to us as a result of your use of the Sites will be handled in accordance with our Privacy Policy.</p>
            </div>

            <div className="space-y-1 pb-2">
              <h2 className="text-[#FF7825] pt-4 pb-4 text-3xl font-semibold ">Links To Other Web Sites</h2>
                <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by NeuralNine.</p>
                <p>NeuralNine has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that NeuralNine shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
            </div>

            <div className="space-y-1 pb-2">
              <h2 className="text-[#FF7825] pt-4 pb-4 text-3xl font-semibold ">Changes</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time.</p>
            </div>

            <div className="space-y-1 pb-20">
              <h2 className="text-[#FF7825] pt-4 pb-4 text-3xl font-semibold ">Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us.</p>
            </div>
          </div>
        </section>
      <Footer />
    </>
  );
}
 