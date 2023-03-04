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
     <title>Neuralnine | Welcome</title>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
    </Head>
    <Script src='/sc.js' strategy='lazyOnload'></Script>
    <nav>
    <div className='flex justify-between items-center'>
       <span className=''>
       Neuralnine
       <Image className='h-auto inline w-[15%]' width={1024} height={774} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1080232878887161896/logo.png?width=1025&height=425'></Image>
       </span>
       <span className='text-3xl cursor-pointer md:hidden block'> 
       </span>
    </div>

    <ul>

      <li className='mx-4 my-6 md:my-0 '>
      <a href='#' className='text-xl hover:text-orange-500 duration-500'>HOME</a>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
      <a href='#' className='text-xl hover:text-orange-500 duration-500'>BLOG</a>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
      <a href='#' className='text-xl hover:text-orange-500 duration-500'>BOOKS</a>
      </li>
      <li className='mx-4 my-6 md:my-0 '> 
      <a href='#' className='text-xl hover:text-orange-500 duration-500'>VIDEOS</a>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
      <a href='#' className='text-xl hover:text-orange-500 duration-500'>SHOP</a>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
      <a href='#' className='text-xl hover:text-orange-500 duration-500'>ABOUT</a>
      </li>
    </ul>
    </nav>  
    <section>
      <div className='grad flex flex-col justify-center items-center text-white bg-[#080808] min-h-[805px]'>
      <Image className='w-[35%]' width={1024} height={700} alt="img" src='https://media.discordapp.net/attachments/807562739324157962/1081366667449348247/hero.png'></Image>
      <p id='typing' className='text-white text-3xl'></p>
      <span className='p-7 fa fa-angle-double-down fa-3x text-orange-600'></span>
      </div>
    </section>

    <section className='min-h-[776px] bg-[#111111]'>
      <div className='container flex justify-center gap-10 p-4 mx-auto flex-wrap pt-60'>
        <div class="py-52 px-40 shadow-lg bg-red-100 rounded-md drop-shadow-2xl">1</div>
        <div class="py-52 px-40 shadow-lg bg-red-100 rounded-md drop-shadow-2xl">2</div>
        <div class="py-52 px-40 shadow-lg bg-red-100 rounded-md drop-shadow-2xl">3</div>
        <div class="py-52 px-40 shadow-lg bg-red-100 rounded-md drop-shadow-2xl">4</div>
      </div>
    </section>
      
      </> 
    
  )  
}

