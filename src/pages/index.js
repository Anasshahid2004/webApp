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
    <Script src='/sc.js' strategy='lazyOnload'></Script>
    
    <nav>
    <div className='flex justify-between items-center'>
       <Image className='inline w-[22%]' width={1024} height={774} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1080232878887161896/logo.png?width=1025&height=425'></Image>
    </div>

    <ul>

      <li className='mx-4 my-6 md:my-0 '>
      <a href='#' className='text-lg hover:text-orange-500 duration-500'>HOME</a>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
      <a href='#' className='text-lg hover:text-orange-500 duration-500'>BLOG</a>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
      <a href='#' className='text-lg hover:text-orange-500 duration-500'>BOOKS</a>
      </li>
      <li className='mx-4 my-6 md:my-0 '> 
      <a href='#' className='text-lg hover:text-orange-500 duration-500'>VIDEOS</a>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
      <a href='#' className='text-lg hover:text-orange-500 duration-500'>SHOP</a>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
      <a href='#' className='text-lg hover:text-orange-500 duration-500'>ABOUT</a>
      </li>
    </ul>
    </nav>  
   
    <section>
      <div className='flex flex-col justify-center items-center text-white bg-[#0e0e0e] min-h-[100vh]'>
      <Image className='sm:w-[37%] w-full' width={1024} height={700} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1081366667449348247/hero.png'></Image>
      <p id='typing' className='text-white md:text-3xl'></p>
      <span className='p-7 fa fa-angle-double-down fa-3x text-orange-600'></span>
      </div>
    </section>

    <section className='min-h-[776px] bg-[#111111]'>
    {/* <span className='fa fa-caret-down fa-10x text-orange-600'></span> */}

      <div className='container grid lg:grid-cols-4 justify-center gap-10 p-4 mx-auto flex-wrap pt-60'>
        
      <div class="max-w-sm rounded-lg shadow bg-black border-gray-700">
            <a href="#">
            <Image className='w-[100vh]' width={724} height={500} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1082226464470093894/card1.png?width=434&height=434'></Image>
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-[16px] font-bold tracking-tight text-[#FF7825]">MATHEMATICAL SKILLS NEEDED FOR MACHINE LEARNING</h5>
                </a>
                <p class="mb-3 text-[14px] text-[#EFEFEF]">Introduction When it comes to computer science and especially to machine learning and data science, you oftentimes hear that mathematical skills are fundamental. But is...</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
            </div>
        </div>

        <div class="max-w-sm rounded-lg shadow bg-black border-gray-700">
            <a href="#">
              <Image className='w-[100vh]' width={724} height={500} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1082226464004521984/card2.png?width=434&height=434'></Image>
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-[16px] font-bold tracking-tight text-[#FF7825]">10 AWESOME RASPBERRY PI PROJECT IDEAS</h5>
                </a>
                <p class="mb-3 text-[14px] text-[#EFEFEF]">Introduction The Raspberry Pi is an awesome little piece of hardware. It is essentially a minicomputer that costs less than 60$. Some older versions even...</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
            </div>
        </div>
        <div class="max-w-sm rounded-lg shadow bg-black border-gray-700">
            <a href="#">
              <Image className='w-[100vh]' width={724} height={500} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1082226463673176084/card3.png?width=434&height=434'></Image>
            </a>
            
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-[16px] font-bold tracking-tight text-[#FF7825]">ANALYZING CORONAVIRUS WITH PYTHON (COVID-19)</h5>
                </a>
                <p class="mb-3 text-[14px] text-[#EFEFEF]">Introduction Chances are, you are in quarantine right now and the reason for that is the coronavirus, also known as COVID-19. Now I am not....</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
            </div>
        </div>
        <div class="max-w-sm rounded-lg shadow bg-black border-gray-700">
            <a href="#">
              <Image className='w-[100vh]' width={724} height={500} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1082226463178244148/card4.png?width=434&height=434'></Image>
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-[16px] font-bold tracking-tight text-[#FF7825]">TOP 5 PROGRAMMING LANGUAGES FOR 2020</h5>
                </a>
                <p class="mb-3 text-[14px] text-[#EFEFEF]">Introduction At the moment we can choose out of thousands of programming languages to learn. We have so many different choices that we get into...</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
            </div>
        </div>
      </div>
    </section>

    <section className='min-h-[776px] bg-[#111111]'>
      <div className='container grid lg:grid-cols-3 justify-center gap-10 p-4 mx-auto flex-wrap pt-60'>
        
      <div class="max-w-sm rounded-lg shadow bg-black border-gray-700 hover:opacity-[0.7] ease-in duration-200">
            <a href="#">
            <Image className='w-[100vh]' width={724} height={500} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1082245279731941446/ytcard1.png?width=772&height=434'></Image>
            </a>
            
        </div>

        <div class="max-w-sm rounded-lg shadow bg-black border-gray-700 hover:opacity-[0.7] ease-in duration-200">
            <a href="#">
              <Image className='w-[100vh]' width={724} height={500} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1082245279287353414/ytcard2.png?width=772&height=434'></Image>
            </a>
  
        </div>
        <div class="max-w-sm rounded-lg shadow bg-black border-gray-700  hover:opacity-[0.7] ease-in duration-200">
            <a href="#">
              <Image className='w-[100%] h-[100%]' width={1000} height={500} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1082245278989561938/ytcard3.png?width=772&height=434'></Image>
            </a>
        </div>
      </div>
    </section>

    <section className='min-h-[776px] bg-[#111111]'>
      <div className='container grid lg:grid-cols-2 justify-items-center gap-10 p-4 mx-auto items-center'>
        <div class="p-2 rounded-lg shadow bg-black border-gray-700 hover:opacity-[0.7] ease-in duration-200">
            <a href="#">
              <span className="fa fa-download fa-3x text-[#FF7825]"></span>
              <h1 className='text-[#FF7825] text-lg text-center'>YouTube Downloader & Converter</h1>
              <p class="mb-3 text-[14px] text-[#EFEFEF]">A Python Script that is able to download YouTube videos or Playlists and them into MP3 format.</p>
            </a>
        </div>

        <div class="p-2 rounded-lg shadow bg-black border-gray-700 hover:opacity-[0.7] ease-in duration-200">
            <a href="#">
              <span className="fa fa-pencil fa-3x text-[#FF7825]"></span>
              <h1 className='text-[#FF7825] text-lg text-center'>Handwritten Digit Recognition</h1>
              <p class="mb-3 text-[14px] text-[#EFEFEF]">A Python Script that trains a model to recognize Handwritten digits using the MNIST data set. Then it loads external files and uses the neural network to predict what digits they are.</p>
            </a>
        </div>

        <div class="p-2 rounded-lg shadow bg-black border-gray-700 hover:opacity-[0.7] ease-in duration-200">
            <a href="#">
              <span className="fa fa-paint-brush fa-3x text-[#FF7825]"></span>
              <h1 className='text-[#FF7825] text-lg text-center'>Drawing Classifier</h1>
              <p class="mb-3 text-[14px] text-[#EFEFEF]">A Python Application which uses machine learning classification algorithms to classify drawings of the user.</p>
            </a>
        </div>

        <div class="p-2 rounded-lg shadow bg-black border-gray-700 hover:opacity-[0.7] ease-in duration-200">
            <a href="#">
              <span className="fa fa-chart-line fa-3x text-[#FF7825]"></span>
              <h1 className='text-[#FF7825] text-lg text-center'>Stocker Visualizer</h1>
              <p class="mb-3 text-[14px] text-[#EFEFEF]">A Python Application that visualizes stock data using professional candlestick charts......</p>
            </a>
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
                <a class="text-white hover:text-gray-800">
                  <span class='fab fa-instagram fa-3x'></span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">
                  <span class='fab fa-youtube fa-3x'></span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">
                  <span class='fab fa-twitter fa-3x'></span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">
                  <span class='fab fa-linkedin fa-3x'></span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">
                  <span class='fab fa-github fa-3x'></span>
                </a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">
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

