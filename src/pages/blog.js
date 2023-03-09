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
     <title>Blog - NeuralNine</title>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
    </Head>
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
      <li className='mx-4 my-6 md:my-0 '>
      <Link href='/setup' className='text-lg hover:text-orange-500 duration-500'>SETUP</Link>
      </li>
    </ul>
    </nav>  
    <section className="bg-[#0e0e0e] text-gray-100">
    <h1 className='text-center text-[#FF7825] pt-20 pb-10 text-4xl font-[700]'>WHAT ARE YOU INTERESTED IN?</h1>
	<div className="container max-w-6xl p-8 mx-auto space-y-6 sm:space-y-12 text-center">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
			<a rel="noopener noreferrer" href="#" className="w-full h-72 py-14 mx-auto group hover:no-underline focus:no-underline bg-black">
				<h1 className="object-cover w-full rounded h-50">
                    <span className="fa fa-laptop-code fa-3x text-[#FF7825]"></span>
                </h1>
				<div className="p-6 space-y-2">
					<h3 className="text-[#FF7825] text-3xl font-[700] group-hover:underline group-focus:underline">Machine Learning</h3>
					<p className='text-[18px] py-4'>Posts about Machine Learning and Artificial Intelligence.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="w-full h-72 py-14 mx-auto group hover:no-underline focus:no-underline bg-black">
                <h1 className="object-cover w-full rounded h-50">
                    <span className="fa fa-chart-line fa-3x text-[#FF7825]"></span>
                </h1>
				<div className="p-6 space-y-2">
					<h3 className="text-[#FF7825] text-3xl font-[700] group-hover:underline group-focus:underline">Finance</h3>
					<p className='text-[18px] py-4'>Posts about Finance and Data Science.</p>
				</div>
			</a>
			
            <a rel="noopener noreferrer" href="#" className="w-full h-72 py-14 mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block">
                <h1 className="object-cover w-full rounded h-50">
                    <span className="fa fa-globe fa-3x text-[#FF7825]"></span>
                </h1>
				<div className="p-6 space-y-2">
					<h3 className="text-[#FF7825] text-3xl font-[700] group-hover:underline group-focus:underline">Networking</h3>
					<p className='text-[18px] py-4'>Posts about Networking and Hacking</p>
				</div>
			</a>
            <a rel="noopener noreferrer" href="#" className="w-full h-72 py-14 mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block">
                <h1 className="object-cover w-full rounded h-50">
                    <span className="fa fa-list fa-3x text-[#FF7825]"></span>
                </h1>
				<div className="p-6 space-y-2">
					<h3 className="text-[#FF7825] text-3xl font-[700] group-hover:underline group-focus:underline">Rankings and Lists.</h3>
					<p className='text-[18px] py-4'>Rankings and Lists of all kind.</p>
				</div>
			</a>
		</div>
	</div>
    </section>
        <section className="bg-[#0e0e0e] text-gray-100">
        <h1 className='text-center text-[#FF7825] pt-16 pb-2 text-4xl font-bold'>ALL POSTS</h1>
        <div className="container max-w-6xl p-4 mx-auto space-y-6 sm:space-y-12">
            
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black">
                    <Image alt="presentation" width={434} height={434} className="object-cover w-full rounded h-100 bg-gray-500" src="https://media.discordapp.net/attachments/807562739324157962/1082969836054921366/maths.png?width=434&height=434" />
                    <div className="p-4 space-y-2">
                        <h2 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">MATHEMATICAL SKILLS NEEDED FOR MACHINE LEARNING</h2>
                        <p className='text-[15px]'>Introduction When it comes to computer science and especially to machine learning and data science, you oftentimes hear that mathematical skills are fundamental. But is....</p>
                    </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black">
                    <Image alt="presentation" width={434} height={434} className="object-cover w-full rounded h-100 bg-gray-500" src="https://media.discordapp.net/attachments/807562739324157962/1082969835740352563/raspberrypi.png?width=434&height=434" />
                    <div className="p-4 space-y-2">
                        <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">10 AWESOME RASPBERRY PI PROJECT IDEAS</h3>
                        <p className='text-[15px]'>Introduction The Raspberry Pi is an awesome little piece of hardware. It is essentially a minicomputer that costs less than 60$. Some older versions even....</p>
                    </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black">
                    <Image alt="presentation" width={434} height={434} className="object-cover w-full rounded h-100 bg-gray-500" src="https://media.discordapp.net/attachments/807562739324157962/1082969834863734915/corona.png?width=434&height=434" />
                    <div className="p-4 space-y-2">
                        <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">ANALYZING CORONAVIRUS WITH PYTHON (COVID-19)</h3>
                        <p className='text-[15px]'>Introduction Chances are, you are in quarantine right now and the reason for that is the coronavirus, also known as COVID-19. Now I am not....</p>
                    </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block">
                    <Image alt="presentation" width={434} height={434} className="object-cover w-full rounded h-100 bg-gray-500" src="https://media.discordapp.net/attachments/807562739324157962/1082969834515611738/top2020.png?width=434&height=434" />
                    <div className="p-4 space-y-2">
                        <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">TOP 5 PROGRAMMING LANGUAGES FOR 2020</h3>
                        <p className='text-[15px]'>Introduction At the moment we can choose out of thousands of programming languages to learn. We have so many different choices that we get into...</p>
                    </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block">
                    <Image alt="presentation" width={434} height={434} className="object-cover w-full rounded h-100 bg-gray-500" src="https://media.discordapp.net/attachments/807562739324157962/1082969834142322751/kneighborsthumb.png?width=434&height=434" />
                    <div className="p-4 space-y-2">
                        <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">K-NEAREST NEIGHBORS CLASSIFICATION FROM SCRATCH IN PYTHON</h3>
                        <p className='text-[15px]'>Introduction Classification is a supervised learning process that categorizes data into classes. One of the most popular classification algorithms in machine learning is the K-Nearest Neighbors....</p>
                    </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block">
                    <Image alt="presentation" width={434} height={434} className="object-cover w-full rounded h-100 bg-gray-500" src="https://media.discordapp.net/attachments/807562739324157962/1082969833827745832/portthumb.png?width=434&height=434" />
                    <div className="p-4 space-y-2">
                        <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">PORTFOLIO VISUALIZER WITH MATPLOTLIB IN PYTHON</h3>
                        <p className='text-[15px]'>Introduction Python is the number one language for machine learning and data science right now. For the most part this is because of the powerful....</p>
                    </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block">
                    <Image alt="presentation" width={434} height={434} className="object-cover w-full rounded h-100 bg-gray-500" src="https://media.discordapp.net/attachments/807562739324157962/1082969833450262559/textgeneration.png?width=434&height=434" />
                    <div className="p-4 space-y-2">
                        <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">GENERATING TEXTS WITH RECURRENT NEURAL NETWORKS IN PYTHON</h3>
                        <p className='text-[15px]'>IntroductIntroduction Recurrent neural networks are very useful when it comes to the processing of sequential data like text. In this tutorial, we are going to...</p>
                    </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block">
                    <Image alt="presentation" width={434} height={434} className="object-cover w-full rounded h-100 bg-gray-500" src="https://media.discordapp.net/attachments/807562739324157962/1082969833009856552/tensorflowhandwritten.png?width=434&height=434" />
                    <div className="p-4 space-y-2">
                        <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">HANDWRITTEN DIGITS RECOGNITION WITH TENSORFLOW</h3>
                        <p className='text-[15px]'>Introduction One of the most powerful and most popular libraries for machine learning out there is Tensorflow. It allows us to easily build, train and...</p>
                    </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block">
                    <Image alt="presentation" width={434} height={434} className="object-cover w-full rounded h-100 bg-gray-500" src="https://media.discordapp.net/attachments/807562739324157962/1082969802664058961/50ideas.png?width=434&height=434" />
                    <div className="p-4 space-y-2">
                        <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">50+ PYTHON PROGRAMMING IDEAS</h3>
                        <p className='text-[15px]'>Introduction Programming is fun. It enables us to automate processes and create awesome applications. But just reading books and watching tutorials is not enough. We....</p>
                    </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block">
                    <Image alt="presentation" width={434} height={434} className="object-cover w-full rounded h-100 bg-gray-500" src="https://media.discordapp.net/attachments/807562739324157962/1082969802328506368/ddos.png?width=434&height=434" />
                    <div className="p-4 space-y-2">
                        <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">CODE A DDOS SCRIPT IN PYTHON</h3>
                        <p className='text-[15px]'>Introduction In this tutorial we are going to write a penetration-testing script, namely a DDOS script, in Python. This program will allow us to flood....</p>
                    </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block">
                    <Image alt="presentation" width={434} height={434} className="object-cover w-full rounded h-100 bg-gray-500" src="https://media.discordapp.net/attachments/807562739324157962/1082969801971998740/tcpchat.png?width=434&height=434" />
                    <div className="p-4 space-y-2">
                        <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">TCP CHAT IN PYTHON</h3>
                        <p className='text-[15px]'>Introduction Python is a great programming language for computer networking. It allows us to create solid applications very fast and easily. In this tutorial, we....</p>
                    </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block">
                    <Image alt="presentation" width={434} height={434} className="object-cover w-full rounded h-100 bg-gray-500" src="https://media.discordapp.net/attachments/807562739324157962/1082969801544171540/linear_regression.png?width=434&height=434" />
                    <div className="p-4 space-y-2">
                        <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">LINEAR REGRESSION FROM SCRATCH IN PYTHON</h3>
                        <p className='text-[15px]'>Introduction One of the most basic machine learning models is the Linear Regression. The purpose of linear regression is to take a bunch of data....</p>
                    </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block">
                    <Image alt="presentation" width={434} height={434} className="object-cover w-full rounded h-100 bg-gray-500" src="https://media.discordapp.net/attachments/807562739324157962/1082969801179275324/candlestickpython.png?width=434&height=434" />
                    <div className="p-4 space-y-2">
                        <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">PLOT CANDLESTICK CHARTS IN PYTHON</h3>
                        <p className='text-[15px]'>Introduction Candlestick charts are one of the best ways to visualize stock data because they give us very detailed information about the evolution of share...</p>
                    </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block">
                    <Image alt="presentation" width={434} height={434} className="object-cover w-full rounded h-100 bg-gray-500" src="https://media.discordapp.net/attachments/807562739324157962/1082969800843722802/top5.png?width=434&height=434" />
                    <div className="p-4 space-y-2">
                        <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">TOP 5 PROGRAMMING LANGUAGES FOR 2019</h3>
                        <p className='text-[15px]'>Introduction Right now, there are hundreds, if not thousands, of different programming languages out there. Some of them are used quite frequently and some of....</p>
                    </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block">
                    <Image alt="presentation" width={434} height={434} className="object-cover w-full rounded h-100 bg-gray-500" src="https://media.discordapp.net/attachments/807562739324157962/1082969800327831602/portscannerpython.png?width=434&height=434" />
                    <div className="p-4 space-y-2">
                        <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">THREADED PORT SCANNER IN PYTHON</h3>
                        <p className='text-[15px]'>Introduction Port Scanners are primarily used for Penetration Testing and Information Gathering. Essentially, we are looking for open ports in a host for one of...</p>
                    </div>
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
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-[#FF7825] text-md mb-3">Navigation</h2>
            <nav class="list-none mb-10 flex-col items-center">
              <li className='mx-4 my-1 md:my-0 '>
                <Link href='/' className='hover:text-orange-500 duration-500'>Home</Link>
              </li>
              <li className='mx-4 my-1 md:my-0 '>
                <Link href='/blog' className='hover:text-orange-500 duration-500'>Blog</Link>
              </li>
              <li className='mx-4 my-1 md:my-0 '>
                <Link href='/books' className='hover:text-orange-500 duration-500'>Books</Link>
              </li>
              <li className='mx-4 my-1 md:my-0 '>
                <Link href='/videos' className='hover:text-orange-500 duration-500'>Videos</Link>
              </li>
              <li className='mx-4 my-1 md:my-0 '>
                <Link href='/shop' className='hover:text-orange-500 duration-500'>Shop</Link>
              </li>
              <li className='mx-4 my-1 md:my-0 '>
                <Link href='/about' className='hover:text-orange-500 duration-500'>About</Link>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-[#FF7825] text-md mb-3 text-center">Legal</h2>
            <nav class="list-none mb-10 flex-col items-center ">
              <li className='mx-4 my-1 md:my-0 '>
                <Link href='/' className='hover:text-orange-500 duration-500'>Privacy Policy</Link>
              </li>
              <li className='mx-4 my-1 md:my-0 '>
                <Link href='/' className='hover:text-orange-500 duration-500'>Terms and Conditions</Link>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-[#FF7825] tracking-widest text-sm mb-3">Social Media</h2>
            <nav class="list-none mb-10 gap-2">
              <li>
                <Link href='https://www.instagram.com/neuralnine' class="text-white hover:text-[#FF7825]">
                  <span class='fab fa-instagram fa-3x'></span>
                </Link>
              </li>
              <li>
                <Link href='https://www.youtube.com/channel/UC8wZnXYK_CGKlBcZp-GxYPA' class="text-white hover:text-[#FF7825]">
                  <span class='fab fa-youtube fa-3x'></span>
                </Link>
              </li>
              <li>
                <Link href='https://www.twitter.com/neuralnine' class="text-white hover:text-[#FF7825]">
                  <span class='fab fa-twitter fa-3x'></span>
                </Link>
              </li>
              <li>
                <Link href='https://www.linkedin.com/company/neuralnine/' class="text-white hover:text-[#FF7825]">
                  <span class='fab fa-linkedin fa-3x'></span>
                </Link>
              </li>
              <li>
                <Link href='https://github.com/NeuralNine' class="text-white hover:text-[#FF7825]">
                  <span class='fab fa-github fa-3x'></span>
                </Link>
              </li>
              <li>
                <Link href='https://www.neuralnine.com/contact' class="text-white hover:text-[#FF7825]">
                  <span class='fa fa-envelope fa-3x'></span>
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}