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
     <title>Neuralnine - Let&#39;s Develop Brains</title>
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
    <section className="dark:bg-black dark:text-gray-100">
	<div className="container flex flex-col mx-auto lg:flex-row min-h-[400px]">
		<div className="w-full lg:w-1/3">
        <Image className='' width={1024} height={774} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1083062122054942823/Design-ohne-Titel-3-1024x1024.png?width=434&height=434'></Image>
        </div>
		<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12 mt-10">
			<h2 className="text-4xl font-semibold leading-none mb-4">Let&#39;s Develop Brains!</h2>
			<p className="mt-4 mb-2 text-md">NeuralNine is an educational brand for computer science, programming and machine learning. The focus lies mainly on topics related to Python and artificial intelligence. You can find books, videos, blog posts and infographics here.</p>
			<p className="mt-4 mb-2 text-md">The blog posts and the videos can be found on this website for free. If you need a structured introduction into Python and machine learning from scratch, you can also take a look at the books if you want. Additionally, you can find lots of interesting posts and infographics on the Instagram page!.</p>
			<p className="mt-4 mb-8 text-md">The content of NeuralNine is structured as concise and simple as possible without neglecting quality or details..</p>
            <h2 className="text-3xl text-center font-semibold leading-none mb-8">Connect With NeuralNine!!</h2>
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

