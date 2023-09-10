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
        <title>Privacy Policy - NeuralNine</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>
      <NavBar />
        <section className="bg-[#111111] text-gray-100">
          <div className=" md:max-w-6xl mx-auto px-6 container">
            <h1 className="text-[#FF7825] pt-16 pb-2 text-4xl font-bold">
              <Typewriter
                options={{
                  strings: ["GDPR Privacy Policy of NeuralNine"],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 40,
                }}
              />
            </h1>
            <p className="text-[15px]">Last Updated: April 3rd, 2019</p>

            <div className="list-none space-y-1">
              <h2 className="text-[#FF7825] pt-16 pb-8 text-3xl font-semibold ">Legal Notice</h2>
              
                <p>The offer and sale of products on this website is carried out directly by:</p>
                <li>NeuralNine e.U.</li>
                <li>Owner: Florian Dedov</li>
                <li>Austria, 8692 Neuberg/Mürz, Neudörflstraße 6, Tür 9</li>
                <li>Company Register: 558452d</li>
                <li>E-Mail: mail@neuralnine.com</li>
              
            </div>

            <div className="space-y-3">
              <h2 className="text-[#FF7825] pt-16 pb-8 text-3xl font-semibold">Definitions</h2>
              
                <p className="font-[700] text-[17px]">-NeuralNine:</p>
                <p>NeuralNine is the name of the website and the company behind it.</p>
                <p className="font-[700] text-[17px]">-GDPR:</p>
                <p>General Data Protection Regulation Act.</p>
                <p className="font-[700] text-[17px]">-Data Controller:</p>
                <p>Data Controller means the natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal information are, or are to be, processed.</p>
                <p className="font-[700] text-[17px]">-Data Processor:</p>
                <p>Data Processor means any natural or legal person who processes the data on behalf of the Data Controller.</p>
                <p className="font-[700] text-[17px]">-Data Subject:</p>
                <p>Data Subject is any living individual who is using our Service and is the subject of Personal Data.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-[#FF7825] pt-16 pb-8 text-3xl font-semibold">1. Principles For Processing Personal Data</h2>
              <p>Our principles for processing personal data are:</p>

                <p className="font-[700] text-[17px]">-Fairness and lawfulness:</p>
                <p>When we process personal data, the individual rights of the Data Subjects must be protected. All personal data must be collected and processed in a legal and fair manner.</p>
                <p className="font-[700] text-[17px]">-Restricted to a specific purpose:</p>
                <p>The personal data of Data Subject must be processed only for specific purposes.</p>
                <p className="font-[700] text-[17px]">-Transparency:</p>
                <p>The Data Subject must be informed of how his/her data is being collected, processed and used.</p>
            </div>

            <div className="space-y-1">
              <h2 className="text-[#FF7825] pt-16 text-3xl font-semibold">2. What personal data we collect and process</h2>
              <h2 className="text-[#FF7825] py-1 text-2xl font-semibold">Types of Data Collected</h2>
              <h2 className="text-[#FF7825] pb-8 text-xl font-semibold">Personal Data</h2>

                <p>NeuralNine collects several different types of personal data for various purposes. Personal Data may include, but is not limited to:</p>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
            </div>

            <div className="space-y-1">
            <h2 className="text-[#FF7825] pt-16 pb-4 text-xl font-semibold">Usage Data</h2>

                <p>We may also collect information how the Service is accessed and used (“Usage Data”). This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
            </div>

            <div className="space-y-4 pb-4">
            <h2 className="text-[#FF7825] pt-8 pb-4 text-xl font-semibold">Tracking & Cookies Data</h2>

                <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service..</p>
                <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                <p>Examples of Cookies we use:</p>

                <p className="font-[700] text-[17px]">-Session Cookies:</p>
                <p>We use Session Cookies to operate our Service.</p>
                <p className="font-[700] text-[17px]">-Preference Cookies:</p>
                <p>We use Preference Cookies to remember your preferences and various settings.</p>
                <p className="font-[700] text-[17px]">-Security Cookies:</p>
                <p>We use Security Cookies for security purposes.</p>
            </div>

            <div className="space-y-4 pb-4">
            <h2 className="text-[#FF7825] py-4 text-2xl font-semibold">Use of Data</h2>

                <p>NeuralNine uses the collected data for various purposes:</p>
                <li>To provide and maintain the Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer care and support</li>
                <li>To provide analysis or valuable information so that we can improve the Service</li>
                <li>To monitor the usage of the Service  </li>
                <p>To detect, prevent and address technical issues</p>
            </div>

            <div className="space-y-4 pb-4">
            <h2 className="text-[#FF7825] py-4 text-2xl font-semibold">Transfer of Data</h2>

                <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                <p>NeuralNine will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
            </div>

            <div className="space-y-4 pb-4">
            <h2 className="text-[#FF7825] py-4 text-2xl font-semibold">Analytics</h2>
                <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
            </div>

            <div className="space-y-4">
            <h2 className="text-[#FF7825] py-4 text-2xl font-semibold">Google Analytics</h2>
                <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
                <p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</p>
                <p>For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://policies.google.com/privacy?hl=en</p>
            </div>

            <div className="space-y-4">
            <h2 className="text-[#FF7825] py-1 pt-16 pb-4 text-3xl font-semibold">3. How we use the personal data</h2>

                <p>My Company uses the collected personal data for various purposes:</p>
                <li>To provide you with services</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer care and support</li>
                <li>To gather analysis or valuable information so that we can improve the Service</li>
                <li>To detect, prevent and address technical issues</li>
            </div>

            <div className="space-y-4">
            <h2 className="text-[#FF7825] py-1 pt-16 pb-4 text-3xl font-semibold">4. Legal basis for collecting and processing personal data</h2>

                <p>NeuralNine legal basis for collecting and using the personal data described in this Data Protection Policy depends on the personal data we collect and the specific context in which we collect the information:</p>
                <li>NeuralNine needs to perform a contract with you</li>
                <li>You have given NeuralNine permission to do so</li>
                <li>Processing your personal data is in NeuralNine legitimate interests</li>
                <li>NeuralNine needs to comply with the law</li>
            </div>

            <div className="space-y-4">
            <h2 className="text-[#FF7825] py-1  pt-16 pb-4 text-3xl font-semibold">5. Retention of personal data</h2>

                <p>NeuralNine will retain your personal information only for as long as is necessary for the purposes set out in this Data Protection Policy.</p>
                <p>NeuralNine will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>
            </div>

            <div className="space-y-4">
            <h2 className="text-[#FF7825] py-1 pt-16  pb-4 text-3xl font-semibold">6. Data protection rights</h2>

                <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what personal data we hold about you and if you want it to be removed from our systems, please contact us.</p>
                <p>In certain circumstances, you have the following data protection rights:</p>
                <li>The right to access, update or to delete the information we have on you</li>
                <li>The right of rectification</li>
                <li>The right to object</li>
                <li>The right of restriction</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
            </div>

            <div className="space-y-4 pb-20">
            <h2 className="text-[#FF7825] py-1 pt-16 pb-4 text-3xl font-semibold">7. Links</h2>

                <p>This Site may contain links or references to other Web sites outside of our control. Please be aware that we have no control over these sites and our privacy policy does not apply to these sites..</p>
            </div>
          </div>
        </section>
      <Footer />
    </>
  );
}
 