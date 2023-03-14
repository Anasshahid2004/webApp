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
        <title>10 AWESOME RASPBERRY PI PROJECT IDEAS - NeuralNine</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>
      <NavBar />
      <section className="bg-[#0e0e0e] text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 md:py-16 md:px-10 lg:px-32 xl:max-w-5xl">
          <h1 className="text-2xl font-bold leading-none sm:text-4xl">
            <span className="text-[#FF7825]">
              {" "}
              10 AWESOME RASPBERRY PI PROJECT IDEAS{" "}
            </span>
          </h1>
          <hr class="w-full h-0.5 mx-auto  bg-[#ccc] border-0 rounded my-4" />
          <Image
            className="inline w-fit"
            width={1024}
            height={1000}
            alt="img"
            src="https://media.discordapp.net/attachments/807562739324157962/1084400949726019614/raspberrypi_1.png?width=1024&height=999"
          ></Image>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
            <div className="flex md:space-x-2">
              <p className="text-sm">
                <span className="fa-regular fa-clock text-gray-300">
                  &nbsp;{" "}
                </span>
                4. April 2020 -
              </p>
              <p className="text-sm">
                <span className="fa-regular fa-folder text-gray-300">
                  &nbsp;{" "}
                </span>
                General / Network Programming / Programming
              </p>
              <p className="text-sm">
                <span className="fa-regular fa-comment text-gray-300">
                  &nbsp;{" "}
                </span>
                1 Comments
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0e0e0e] text-gray-100">
        <div className="container flex flex-col mx-auto min-h-[400px] text-justify">
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-10 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-4 text-[#FF7825] text-center">
              Introduction
            </h2>
            <p className="mt-4 mb-2 text-md">
              The Raspberry Pi is an awesome little piece of hardware. It is
              essentially a minicomputer that costs less than 60$. Some older
              versions even cost around 30$. But what can you do with it? This
              is exactly the topic of today’s blog post. We are going to take a
              look at ten of the most interesting and exciting Raspberry Pi
              projects, which you can build yourself. This will also give you a
              great opportunity to increase your programming and IT skills,
              since the best way to learn is by implementing projects!
            </p>
            <p className="mt-4 mb-2 text-md">
              If you don’t know what a Raspberry Pi is, you can take a look at
              some of the newest models:
            </p>
            <li>Rasberry Pi 4: </li>
            <li>Rasberry Pi 3: </li>
            <li>Rasberry Pi 3 B+: </li>
            <p className="mt-4 mb-8 text-md">
              As you can see, it’s just a little circuit board with some ports.
              But this little thing can do much more than you might initially
              think. So let’s take a look at some of the possibilities. Notice
              however that we are not going to talk about the implementation of
              these projects in this post. It’s only about the ideas. Let’s get
              right into it!
            </p>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-4 text-[#FF7825] text-center">
              1 - Full-Fledged Desktop Computer
            </h2>
            <div className="w-1/2 lg:w-3/5 mx-auto">
              <Image
                className="py-2 md:py-6 lg:py-10"
                width={999}
                height={999}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1084406756890923109/desktop.png?width=1024&height=999"
              ></Image>
            </div>
            <p className="mt-4 mb-2 text-md">
              In fact one thing that you can do with a Raspberry Pi is to
              actually use it as a full-fledged desktop computer. Of course the
              computation power is not even comparable to that of an actual
              computer but you will still be able to surf the internet, do basic
              office work and even watch some videos. The most exciting part
              about that project is that you end up with a computer that costs
              you less than 100$. However, you might want to add some additional
              stuff like a cooler or even a mini-monitor.
            </p>
            <p className="mt-4 mb-2 text-md">
              But which operating system should you install on your Raspberry Pi
              desktop system? It’s totally up to you! You can install Ubuntu,
              Mint, Debian, ArchLinux or you can even install Raspbian OS, which
              is a system particularly made for Raspberry Pis.
            </p>
            <p className="mt-4 mb-8 text-md">
              More about this project:
              <li>
                You might want to add a cooler to your system: View on Amazon
              </li>
              <li>
                You could also add a mini monitor specialized for Raspberry Pis:
                View on Amazon
              </li>
              <li>
                You will definitely need a keyboard, a mouse, a monitor and the
                respective cables (HDMI).
              </li>
              <li>
                It makes sense to put your Raspberry Pi into a case for safety.
              </li>
              <li>
                There are complete Raspberry Pi starter-kits with most things
                included: View on Amazon
              </li>
            </p>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-4 text-[#FF7825] text-center">
              2 - Retro Gaming Console
            </h2>
            <div className="w-1/2 lg:w-3/5 mx-auto">
              <Image
                className="py-2 md:py-6 lg:py-10"
                width={497}
                height={497}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1084406756664426566/nes.png?width=958&height=534"
              ></Image>
            </div>
            <p className="mt-4 mb-2 text-md">
              Now of course you won’t be able to play the newest AAA games on
              your little Raspberry Pi. But if you have a fable for retro games,
              you can turn your minicomputer into a console like a Super
              Nintendo or a Sega Mega Drive. For this you will need to configure
              your Raspberry Pi in such a way that it always boots directly into
              an emulator with all the desired games.
            </p>
            <p className="mt-4 mb-2 text-md">
              More about this project:
              <li>
                You might want to add a realistic gaming console case for the
                feeling: View on Amazon
              </li>
              <li>
                You might want to add some realistic controllers for the
                feeling: View on Amazon
              </li>
              <li>
                I also recommend using an old monitor or television for the
                optimal feeling.
              </li>
              <li>
                You can make use of the RetroPie project for all of this: Retro
                Pie
              </li>
            </p>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-4 text-[#FF7825] text-center">
              3 - Build Your Own Smart TV
            </h2>
            <div className="w-1/2 lg:w-2/5 mx-auto">
              <Image
                className="py-2 md:py-6 lg:py-10"
                width={497}
                height={497}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1084406756421148692/tv-1024x877.png?width=507&height=434"
              ></Image>
            </div>
            <p className="mt-4 mb-2 text-md">
              Another interesting thing you can do with a Raspberry Pi is to
              build your own Smart TV. For this you don’t need anything but a
              monitor, a Raspberry Pi and your smartphone. How this works is
              using a software called Kodi. You will basically combine the
              minicomputer and the monitor into a TV and then use your phone as
              a remote control. Now of course you will need to install some
              additional packages and make some adjustments, but the research is
              half of the project and it is fun! Be persistent and creative!
            </p>
            <p className="mt-4 mb-2 text-md">
              More about this project:
              <li>
                You might want to use a big monitor to get the perfect TV
                feeling.
              </li>
              <li>Software like Kodi makes this process quite easy: Kodi</li>
              <li>
                You will probably need the OMX Image Viewer Software: OMX Image
                Viewer
              </li>
            </p>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-4 text-[#FF7825] text-center">
              4 - Media Center
            </h2>
            <div className="w-1/2 lg:w-1/3 mx-auto">
              <Image
                className="py-2 md:py-6 lg:py-10"
                width={497}
                height={497}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1084406756207251547/media.png"
              ></Image>
            </div>
            <p className="mt-4 mb-2 text-md">
              Using the same software and some media player, you can also
              transform your Raspberry Pi into a media center. You can then use
              it to watch movies, listen to music and more. For this project you
              will not need a lot of hardware. Just the basics like a case, a
              cooler and some cables. Similar to the Smart TV you can use a
              monitor and your phone as the TV and the remote control.
            </p>
            <p className="mt-4 mb-2 text-md">
              More about this project:
              <li>A cooler and a case are definitely recommended.</li>
              <li>You will also use the Kodi software for this project.</li>
              <li>
                Its recommended to use newer Raspberry Pi Models for this
                project.
              </li>
              <li>Keep things legal here!</li>
            </p>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-4 text-[#FF7825] text-center">
              5 - Motion Detection System With Camera
            </h2>
            <div className="w-1/2 lg:w-3/5 mx-auto">
              <Image
                className="py-2 md:py-6 lg:py-10"
                width={497}
                height={497}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1084406755972366468/surveillance-1024x631.png?width=704&height=434"
              ></Image>
            </div>
            <p className="mt-4 mb-2 text-md">
              Now things are getting interesting and a little more geeky. Since
              you can run Python on your Raspberry Pi, you can also write some
              computer vision scripts on it. Combined with a camera you can
              actually build your own little surveillance system. For this you
              will of course need an additional camera. You can then run a
              script that uses an algorithm like background subtraction to
              filter out movements. When a certain threshold is reached, you can
              then start recording and make the Pi send you a mail.
            </p>
            <p className="mt-4 mb-2 text-md">
              More about this project:
              <li>
                For this project you will need a camera for your Raspberry Pi:
                View on Amazon
              </li>
              <li>Advanced computer vision knowledge is helpful.</li>
              <li>
                The Python Bible Volume 7 about Computer Vision might help you
                with that: Go To Books
              </li>
              <li>You can also set up a live stream of the video content.</li>
            </p>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-4 text-[#FF7825] text-center">
              6 - Pi-Hole Ad Blocker
            </h2>
            <div className="w-1/2 lg:w-1/3 mx-auto">
              <Image
                className="py-2 md:py-6 lg:py-10"
                width={497}
                height={497}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1084406755766837248/Pi-hole_Logo.png?width=413&height=434"
              ></Image>
            </div>
            <p className="mt-4 mb-2 text-md">
              A lot of ads can actually be blocked with a simple Ad Blocker in
              your browser. But on certain devices it is pretty hard to get rid
              of Ads. For this you can set up a so-called Pi-Hole, which then
              filters all traffic directly from your router. It is like a local
              black hole for advertisements. Pretty cool!
            </p>
            <p className="mt-4 mb-2 text-md">
              More about this project:
              <li>
                There is a complete Pi-Hole software for this project: Pi-Hole
              </li>
              <li>
                You might have to fill up the list of blocked ads manually.
              </li>
              <li>Some networking knowledge is beneficial for this project.</li>
            </p>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-4 text-[#FF7825] text-center">
              7 - Robotics
            </h2>
            <div className="w-1/2 lg:w-3/5 mx-auto">
              <Image
                className="py-2 md:py-6 lg:py-10"
                width={497}
                height={497}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1084406755519385620/robot-1024x706.png?width=629&height=434"
              ></Image>
            </div>
            <p className="mt-4 mb-2 text-md">
              Now this is probably one of the most interesting but also one of
              the hardest projects. You can actually turn your Raspberry Pi into
              a robot of all kinds. It could be a robot with sensors that tries
              to find a way out of a labyrinth. It could be a robot that is
              built for fighting other robots. It could also be a little robot
              helper. For this you will of course need a lot of different
              additional hardware. But this project is extremely exciting if you
              are interested in hardware.
            </p>
            <p className="mt-4 mb-2 text-md">
              More about this project:
              <li>There are also some already built Pi robots</li>
              <li className="">Kit 1: View on Amazon</li>
              <li>Kit 2: View on Amazon</li>
              <li>Building them yourself is half of the fun!</li>
            </p>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-4 text-[#FF7825] text-center">
              8 - Smart Home Automation
            </h2>
            <div className="w-1/2 lg:w-1/3 mx-auto">
              <Image
                className="py-2 md:py-6 lg:py-10"
                width={497}
                height={497}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1084406755305472100/home-1024x1024.png?width=434&height=434"
              ></Image>
            </div>
            <p className="mt-4 mb-2 text-md">
              Chances are you already have some elements of a smart home or you
              at least want to get some. In this case you can use your Raspberry
              Pi as the central control system for your smart devices at home.
              You can make it control lamps, fridges, microwaves, computers,
              your Smart TV and more. There is already a software for that and
              not a lot of hardware is needed here.
            </p>
            <p className="mt-4 mb-2 text-md">
              More about this project:
              <li>
                You will need a home automation software: Home Automation
                Software.
              </li>
              <li>
                For this to be useful, it makes sense to already have some smart
                devices or buy some.
              </li>
              <li>Smart Light: View on Amazon.</li>
            </p>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-4 text-[#FF7825] text-center">
              9 - Wifi Extender
            </h2>
            <div className="w-1/2 lg:w-6/12 mx-auto">
              <Image
                className="py-2 md:py-6 lg:py-10"
                width={497}
                height={497}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1084406755011862598/router-1024x835.png?width=532&height=434"
              ></Image>
            </div>
            <p className="mt-4 mb-2 text-md">
              This is probably one of the most useful Raspberry Pi applications,
              especially for larger homes. It is also one of the most simple
              projects. Your internet router probably has to handle multiple
              devices and covers only a certain area of your home. With a simple
              WiFi-extender you can easily make this area larger and also be
              able to handle more devices.
            </p>
            <p className="mt-4 mb-2 text-md">
              More about this project:
              <li>
                It’s actually very simple and doesn’t require any additional
                hardware except for maybe a case.
              </li>
              <li>You can add a VPN service to extend its functionality..</li>
            </p>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-4 text-[#FF7825] text-center">
              10 - AI Voice Assistant
            </h2>
            <div className="w-1/2 lg:w-1/3 mx-auto">
              <Image
                className="py-2 md:py-6 lg:py-10"
                width={497}
                height={497}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1084406754739245077/mic.png?width=434&height=434"
              ></Image>
            </div>
            <p className="mt-4 mb-2 text-md">
              If you are like me, things like Amazon’s Alexa or Google Home
              excite you, but you actually want to build things yourself. You
              want to have your own customized voice assistant without any
              limits and you find joy in building it yourself. You want it to
              play music directly out of your media center instead of being
              limited to a couple of commercial services. You want it to run
              your own custom Python scripts. That’s why one of the greatest
              projects is to turn your Raspberry Pi into an AI Voice Assistant.
              For this project however, you will need a lot of programming
              knowledge. Especially Natural Language Processing and Data
              Science.
            </p>
            <p className="mt-4 mb-2 text-md">
              More about this project:
              <li>
                To build it yourself you will need a lot of programming
                knowledge.
              </li>
              <li>
                Alternatively you can use the Google assistant: Google Assistant
              </li>
              <li>
                You will definitely need a microphone for this one: View on
                Amazon
              </li>
              <li>
                A camera might also be beneficial, depending on what you are
                doing: View on Amazon
              </li>
              <li>
                For the perfect feeling, you might want to add a little monitor:
                View on Amazon
              </li>
            </p>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-14 text-[#FF7825] text-center">
              Conclusion
            </h2>
            <p className="mt-4 mb-2 text-md">
              All in all we can say that mathematics are essential for every
              computer scientist that is interested in more than just
              implementing, copying code and using libraries from other people.
              For everyone who wants to innovate, to understand and to build, I
              would totally recommend learning the fields mentioned in this
              post. You don’t necessarily need a college education to do that.
              With some discipline, some YouTube and some good books you can
              learn it by yourself.
            </p>
            <p className="mt-4 mb-2 text-md">
              I hope you enjoyed this blog post! If you want to tell me
              something or ask questions, feel free to ask in the comments! Down
              below you will find some additional links leading to more content.
              Check out my Instagram page or the other parts of this website, if
              you are interested in more! I also have a lot of high-quality
              Python programming books in the book section! Stay tuned!
            </p>
            <h2 className="text-lg font-semibold leading-none pt-10 text-[#FF7825]">
              Follow NeuralNine on Instagram:
            </h2>
            <h2 className="text-lg font-semibold leading-none py-4 text-[#FF7825]">
              Subscribe NeuralNine on YouTube:
            </h2>
          </div>
        </div>
      </section>
      <section className="p-6 bg-[#0e0e0e] text-gray-50">
        <form
          novalidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 w-8/12"
        >
          <hr class="w-full h-0.5 mx-auto  bg-[#ccc] border-0 rounded" />
          <h2 className="text-xl font-bold leading-none text-[#FF7825]">
            Leave a Reply
          </h2>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-[#0e0e0e]">
            <div className="grid md:grid-cols-6 gap-4 col-span-full">
              <div className="col-span-full">
                <textarea
                  id="bio"
                  cols="6"
                  rows="6"
                  placeholder="Your comment here..."
                  className="p-2 w-full rounded-sm focus:ring focus:ring-opacity-75 focus:ring-white text-gray-300 bg-[#0e0e0e] border-white border-[1px]"
                ></textarea>
              </div>
              <div className="col-span-full sm:col-span-2">
                <input
                  id="username"
                  type="text"
                  placeholder="Name (Required)"
                  className="p-2 w-full rounded-sm focus:ring focus:ring-opacity-75 focus:ring-white text-gray-300 bg-[#0e0e0e] border-white border-[1px]"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <input
                  id="website"
                  type="text"
                  placeholder="Email (Required)"
                  className="p-2 w-full rounded-sm focus:ring focus:ring-opacity-75 focus:ring-white text-gray-300 bg-[#0e0e0e] border-white border-[1px]"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <input
                  id="website"
                  type="text"
                  placeholder="Website"
                  className="p-2 w-full rounded-sm focus:ring focus:ring-opacity-75 focus:ring-white text-gray-300 bg-[#0e0e0e] border-white border-[1px]"
                />
              </div>
              <div className="col-span-full">
                <div className="float-right space-x-2">
                  <button
                    type="button"
                    className="px-4 py-2 rounded-sm border-gray-100 bg-[#FF7825] text-white font-[700]"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
      <section className="bg-[#0e0e0e] text-gray-100 pb-20">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <hr class="w-full h-0.5 mx-auto  bg-[#ccc] border-0 rounded" />
          <span className="fa fa-chevron-right  text-[#FF7825]">&nbsp; </span>
          <h2 className="text-xl font-bold leading-none text-[#FF7825] inline">
            YOU MIGHT ALSO LIKE
          </h2>
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
                src="https://media.discordapp.net/attachments/807562739324157962/1082969802664058961/50ideas.png?width=434&height=434"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">
                  50+ PYTHON PROGRAMMING IDEAS
                </h3>
                <p className="text-[15px]">
                  Introduction Programming is fun. It enables us to automate
                  processes and create awesome applications. But just reading
                  books and watching tutorials is not enough. We....
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
                src="https://media.discordapp.net/attachments/807562739324157962/1082969800843722802/top5.png?width=434&height=434"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">
                  TOP 5 PROGRAMMING LANGUAGES FOR 2019
                </h3>
                <p className="text-[15px]">
                  Introduction Right now, there are hundreds, if not thousands,
                  of different programming languages out there. Some of them are
                  used quite frequently and some of....
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
