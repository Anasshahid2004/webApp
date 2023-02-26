import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <nav className='p-5 bg-white shadow'>
    <div>
       <span className='text-2xl font-[Poppins]'>
       neuralnine
       <Image className='' width={150} height={100} alt="img" src='https://images.unsplash.com/photo-1677247191557-4abd28b7c387?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'></Image>
       </span>
    </div>
    </nav>
      
      </>
    
  )
}