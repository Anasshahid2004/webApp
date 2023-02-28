import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between'>
    <div className='flex justify-between items-center'>
       <span className='text-2xl font-[Poppins] cursor-pointer'>
       Neuralnine
       <Image className='h-10 inline' width={150} height={100} alt="img" src='https://images.unsplash.com/photo-1677247191557-4abd28b7c387?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'></Image>
       </span>

       <span className='text-3xl cursor-pointer md:hidden block'>
        
       </span>
    </div>

    <ui className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in-duration-500'>
      <li className='mx-4 my-6 md:my-0 '>
        <a href='#' className='text-xl hover:text-cyan-500 duration-500'>HOME</a>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
        <a href='#' className='text-xl hover:text-cyan-500 duration-500'>BLOG</a>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
        <a href='#' className='text-xl hover:text-cyan-500 duration-500'>BOOKS</a>
      </li>
      <li className='mx-4 my-6 md:my-0 '> 
        <a href='#' className='text-xl hover:text-cyan-500 duration-500'>VIDEOS</a>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
        <a href='#' className='text-xl hover:text-cyan-500 duration-500'>SHOP</a>
      </li>
      <li className='mx-4 my-6 md:my-0 '>
        <a href='#' className='text-xl hover:text-cyan-500 duration-500'>ABOUT</a>
      </li>

     <button className='bg-cyan-400 text-white fonts-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded-md'>
      Get Started
     </button>
     <h2 class=""></h2>

    </ui>
    </nav>  
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          {/* left side */}
          <div className='flex-1 flex flex-col items-center'>
          <Image className='items-center' width={250} height={150} alt="img" src='https://images.unsplash.com/photo-1677247191557-4abd28b7c387?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'></Image>
          </div>
          {/* right side */}
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
          </div>
        </div>
      </div>

    </section>
    <section className='min-h-[776px] bg-blue-700 flex items-center'>
      <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'></div>
    </section>
    <section className='min-h-[500px] bg-blue-500'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row'></div>
      </div>
    </section>
      </> 
    
  )
}

