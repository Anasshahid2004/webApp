import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link';
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
    <Head>
     <title>Books - NeuralNine</title>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
    </Head>
    {/* <Script src='/sc.js' strategy='lazyOnload'></Script> */}
    <nav>
    <div className='flex justify-between items-center'>
       <Image className='inline w-[22%]' width={1024} height={774} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1080232878887161896/logo.png?width=1025&height=425'></Image>
    </div>
    <ul>
      <li className='mx-4 my-6 md:my-0 '>
      <Link href='/' className='text-lg hover:text-orange-500 duration-500'>HOME</Link>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
      <Link href='/blog' className='text-lg hover:text-orange-500 duration-500'>BLOG</Link>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
      <Link href='/books' className='text-lg hover:text-orange-500 duration-500'>BOOKS</Link>
      </li>
      <li className='mx-4 my-6 md:my-0 '> 
      <Link href='/videos' className='text-lg hover:text-orange-500 duration-500'>VIDEOS</Link>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
      <Link href='/shop' className='text-lg hover:text-orange-500 duration-500'>SHOP</Link>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
      <Link href='/about' className='text-lg hover:text-orange-500 duration-500'>ABOUT</Link>
      </li>
    </ul>
    </nav>  
    <section className="dark:bg-[#0e0e0e] dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-16 md:px-10 lg:px-32 xl:max-w-4xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">THE 
            <span className="dark:text-[#FF7825]"> PYTHON </span> BIBLE
        </h1>
        <hr class="w-full h-1.5 mx-auto  bg-[#FF7825] border-0 rounded md:my-10"/>
        <Image className='inline w-full' width={1024} height={400} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1083010918297911406/5in1low-1.png?width=1025&height=392'></Image>
        <h3 className="text-3xl font-bold leading-none sm:text-1xl">PYTHON BIBLE 3 IN 1</h3>
        <h3 className="text-2xl font-bold leading-none sm:text-1xl text-[#FF7825] py-2">COLLECTION</h3>
            <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded dark:bg-[#FF7825] dark:text-black"><span className="fa fa-shopping-cart"></span> VIEW ON AMAZON</button>
            </div>
        </div>
        </section>
        <section className="dark:bg-[#0e0e0e] dark:text-gray-100">
	    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
            <Image alt="presentation" className="mx-auto object-cover w-fit rounded h-fit" width={480} height={420} src="https://media.discordapp.net/attachments/807562739324157962/1083015321000095905/12low.png?width=271&height=434" />
                <div className="p-6">
                    <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">PYTHON BIBLE 3 IN 1</h3>
                    <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">COLLECTION</h3>
                </div>
                <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 text-md font-semibold rounded dark:bg-[#FF7825] dark:text-black"><span className="fa fa-shopping-cart"></span> VIEW ON AMAZON</button>
                </div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
            <Image alt="presentation" className="mx-auto object-cover w-fit rounded h-fit" width={480} height={420} src="https://media.discordapp.net/attachments/807562739324157962/1083015324531695626/11low.png?width=271&height=434" />
            <div className="p-6">
                    <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">PYTHON BIBLE 5 IN 1</h3>
                    <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">COLLECTION</h3>
                </div>
                <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded dark:bg-[#FF7825] dark:text-black"><span className="fa fa-shopping-cart"></span> VIEW ON AMAZON</button>
                </div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
            <Image alt="presentation" className="mx-auto object-cover w-fit rounded h-fit" width={480} height={420} src="https://media.discordapp.net/attachments/807562739324157962/1083015323743170590/10.png?width=271&height=434" />
            <div className="p-6">
                    <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">PYTHON BIBLE 7 IN 1</h3>
                    <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">COLLECTION</h3>
                </div>
                <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded dark:bg-[#FF7825] dark:text-black"><span className="fa fa-shopping-cart"></span> VIEW ON AMAZON</button>
                </div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
            <Image alt="presentation" className="mx-auto object-cover w-fit rounded h-fit" width={480} height={420} src="https://media.discordapp.net/attachments/807562739324157962/1083015323407622284/1low.png?width=271&height=434" />
            <div className="p-6">
                    <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">PYTHON BIBLE VOLUME ONE</h3>
                    <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">FOR BEGINNERS</h3>
                </div>
                <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded dark:bg-[#FF7825] dark:text-black"><span className="fa fa-shopping-cart"></span> VIEW ON AMAZON</button>
                </div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
            <Image alt="presentation" className="mx-auto object-cover w-fit rounded h-fit" width={480} height={420} src="https://media.discordapp.net/attachments/807562739324157962/1083015323059499150/2low-640x1024.png?width=271&height=434" />
            <div className="p-6">
                    <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">PYTHON BIBLE VOLUME TWO</h3>
                    <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">FOR INTERMEDIATES</h3>
                </div>
                <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded dark:bg-[#FF7825] dark:text-black"><span className="fa fa-shopping-cart"></span> VIEW ON AMAZON</button>
                </div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
            <Image alt="presentation" className="mx-auto object-cover w-fit rounded h-fit" width={480} height={420} src="https://media.discordapp.net/attachments/807562739324157962/1083015322711367720/3low-640x1024.png?width=271&height=434" />
            <div className="p-6">
                    <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">PYTHON BIBLE VOLUME THREE</h3>
                    <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">DATA SCIENCE</h3>
                </div>
                <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded dark:bg-[#FF7825] dark:text-black"><span className="fa fa-shopping-cart"></span> VIEW ON AMAZON</button>
                </div>
			</a>
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
            <Image alt="presentation" className="mx-auto object-cover w-fit rounded h-fit" width={480} height={420} src="https://media.discordapp.net/attachments/807562739324157962/1083015322380021880/4low.png?width=271&height=434" />
            <div className="p-6">
                    <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">PYTHON BIBLE VOLUME FOUR</h3>
                    <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">MACHINE LEARNING</h3>
                </div>
                <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded dark:bg-[#FF7825] dark:text-black"><span className="fa fa-shopping-cart"></span> VIEW ON AMAZON</button>
                </div>
			</a>
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
            <Image alt="presentation" className="mx-auto object-cover w-fit rounded h-fit" width={480} height={420} src="https://media.discordapp.net/attachments/807562739324157962/1083015322057056367/5low.png?width=271&height=434" />
            <div className="p-6">
                    <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">PYTHON BIBLE VOLUME FIVE</h3>
                    <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">FOR FINANCE</h3>
                </div>
                <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded dark:bg-[#FF7825] dark:text-black"><span className="fa fa-shopping-cart"></span> VIEW ON AMAZON</button>
                </div>
			</a>
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
            <Image alt="presentation" className="mx-auto object-cover w-fit rounded h-fit" width={480} height={420} src="https://media.discordapp.net/attachments/807562739324157962/1083015321507594260/6low.png?width=271&height=434" />
            <div className="p-6">
                    <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">PYTHON BIBLE VOLUME SIX</h3>
                    <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">NEURAL NETWORKS</h3>
                </div>
                <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded dark:bg-[#FF7825] dark:text-black"><span className="fa fa-shopping-cart"></span> VIEW ON AMAZON</button>
                </div>
			</a>
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
            <Image alt="presentation" className="mx-auto object-cover w-fit rounded h-fit" width={480} height={420} src="https://media.discordapp.net/attachments/807562739324157962/1083015320559689830/7low.png?width=271&height=434" />
            <div className="p-6">
                    <h3 className="text-2xl font-[700] group-hover:underline group-focus:underline text-center">PYTHON BIBLE VOLUME SEVEN</h3>
                    <h3 className="text-1xl font-bold leading-none sm:text-xl text-[#ffe536] text-center">COMPUTER VISION</h3>
                </div>
                <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded dark:bg-[#FF7825] dark:text-black"><span className="fa fa-shopping-cart"></span> VIEW ON AMAZON</button>
                </div>
			</a>
		</div>
		
	    </div>
    </section>
    <section className="dark:bg-[#0e0e0e] dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-16 md:px-10 lg:px-32 xl:max-w-4xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">THE  
            <span className="dark:text-[#FF7825]"> ALGORITHM  </span> BIBLE
        </h1>
        <hr class="w-full h-1.5 mx-auto  bg-[#FF7825] border-0 rounded md:my-10"/>
        <Image className='inline w-fit py-5' width={1024} height={400} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1083036497109856286/biblealgorithms.png?width=271&height=434'></Image>
        <h3 className="text-3xl font-bold leading-none sm:text-1xl">THE BIBLE OF ALGORITHMS AND DATA STRUCTURES</h3>
        <h3 className="text-2xl font-bold leading-none sm:text-1xl text-[#ffe536] py-2">A COMPLEX SUBJECT SIMPLY EXPLAINED</h3>
            <div className="flex flex-wrap justify-center">
                <button className="px-8 py-2 m-2 text-md font-semibold rounded dark:bg-[#FF7825] dark:text-black"><span className="fa fa-shopping-cart"></span> VIEW ON AMAZON</button>
            </div>
        </div>
        </section>

    <footer class="text-[#C4C4C4] body-font bg-black">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-100">
          <Image className='h-auto inline w-full' width={1024} height={774} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1080232878887161896/logo.png?width=1025&height=425'></Image>
          </a>
          <p class="mt-2 text-md text-bold text-white text-center">Copyright &copy; 2019</p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-[#FF7825] tracking-widest text-sm mb-3">Navigation</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-[#FF7825] tracking-widest text-sm mb-3">Legal</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-[#FF7825] tracking-widest text-sm mb-3">Social Media</h2>
            <nav class="list-none mb-10 gap-2">
              <li>
                <a class="text-white hover:text-[#FF7825]">
                  <span class='fab fa-instagram fa-3x'></span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-[#FF7825]">
                  <span class='fab fa-youtube fa-3x'></span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-[#FF7825]">
                  <span class='fab fa-twitter fa-3x'></span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-[#FF7825]">
                  <span class='fab fa-linkedin fa-3x'></span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-[#FF7825]">
                  <span class='fab fa-github fa-3x'></span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-[#FF7825]">
                  <span class='fa fa-envelope fa-3x'></span>
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}