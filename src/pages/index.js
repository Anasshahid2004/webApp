import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
     <title>Neuralnine - Let&#39;s Develop Brains</title>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
    </Head>
    <Script src='/sc.js' strategy='lazyOnload'></Script>
    <nav>
    <div className='flex justify-between items-center'>
       <span className=''>
       Neuralnine
       <Image className='h-auto inline w-[21%]' width={1024} height={774} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1080232878887161896/logo.png?width=1025&height=425'></Image>
       </span>
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
      <Image className='w-[35%]' width={1024} height={700} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1081366667449348247/hero.png'></Image>
      <p id='typing' className='text-white text-sm md:text-3xl'></p>
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
      
      </> 
    
  )  
}

