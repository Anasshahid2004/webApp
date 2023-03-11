import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <Head>
        <title>Mathematical Skills Needed For Machine Learning - NeuralNine</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>
      <nav>
        <div className="flex justify-between items-center">
          <Image
            className="inline w-[22%]"
            width={1024}
            height={774}
            alt="img"
            src="https://media.discordapp.net/attachments/807562739324157962/1080232878887161896/logo.png?width=1025&height=425"
          ></Image>
        </div>
        <ul>
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              href="/"
              className="text-lg hover:text-orange-500 duration-500"
            >
              HOME
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              href="/blog"
              className="text-lg hover:text-orange-500 duration-500"
            >
              BLOG
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              href="/books"
              className="text-lg hover:text-orange-500 duration-500"
            >
              BOOKS
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              href="/videos"
              className="text-lg hover:text-orange-500 duration-500"
            >
              VIDEOS
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              href="/shop"
              className="text-lg hover:text-orange-500 duration-500"
            >
              SHOP
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              href="/about"
              className="text-lg hover:text-orange-500 duration-500"
            >
              ABOUT
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              href="/setup"
              className="text-lg hover:text-orange-500 duration-500"
            >
              SETUP
            </Link>
          </li>
        </ul>
      </nav>
      <section className="bg-[#0e0e0e] text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 md:py-16 md:px-10 lg:px-32 xl:max-w-5xl">
          <h1 className="text-2xl font-bold leading-none sm:text-4xl">
            <span className="text-[#FF7825]"> MATHEMATICAL SKILLS NEEDED FOR MACHINE LEARNING </span>
          </h1>
          <hr class="w-full h-0.5 mx-auto  bg-[#ccc] border-0 rounded my-4" />
          <Image
            className="inline w-full"
            width={1024}
            height={400}
            alt="img"
            src="https://media.discordapp.net/attachments/807562739324157962/1082969836054921366/maths.png?width=434&height=434"
          ></Image>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
				<div className="flex md:space-x-2">
					<p className="text-sm">
                        <span className="fa-regular fa-clock text-gray-300">&nbsp; </span>
                         8. April 2020 -
                    </p>
                    <p className="text-sm">
                        <span className="fa-regular fa-folder text-gray-300">&nbsp; </span>
                         General -
                    </p>
                    <p className="text-sm">
                        <span className="fa-regular fa-comment text-gray-300">&nbsp; </span>
                         0 Comments
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
                When it comes to computer science and especially to machine learning and data science, you oftentimes hear that mathematical skills are fundamental. But is this really true? And if yes, which areas of mathematics should one master? And why are they important in the first place?
                </p>
                <p className="mt-4 mb-2 text-md">
                Let me give you a quick answer, before I get into the details. If you just want to develop software or do some freelance web development, you don’t necessarily need a lot of higher math. To use frameworks like Django, Spring, Angular etc. and do build business applications, you won’t need complex theoretical understanding. However, if you are really interested in machine learning and you really want to master the subject, there is no way around a hell lot of math. Same goes for theoretical computer science. Wherever you need a lot of deep understanding and whenever you want to innovate or research in  such a field, math is essential.
                </p>
                <p className="mt-4 mb-8 text-md">
                In this blog post we are going to talk about why exactly this is the case. Also we will take a look at how the individual skills are actually used in machine learning and computer science. So let’s get into it.
                </p>
            </div>
            <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
                <h2 className="text-3xl font-semibold leading-none pb-4 text-[#FF7825] text-center">
                Linear Algebra
                </h2>
                <div className="w-1/2 lg:w-1/3 mx-auto">
                    <Image
                        className=""
                        width={497}
                        height={497}
                        alt="img"
                        src="https://media.discordapp.net/attachments/807562739324157962/1084086025040695306/1_1.png?width=397&height=397"
                    ></Image>
                </div>
                <p className="mt-4 mb-2 text-md">
                This one is probably the most important math field to master for machine learning. Now you might be confused if you have never programmed a machine learning algorithm yourself. If you have only used libraries like Scikit-Learn, Tensorflow or Keras, you don’t really see what is happening behind the scenes. Machine learning is actually nothing but math. Datasets? They are just matrices! The values you feed into your neural network? The neural network itself? Matrices, Vectors, Arrays! It is all the same. Literally everything that has to do with deep learning has to do with linear algebra. And even if you use libraries like NumPy or Pandas, you are constantly working with matrices and vectors.
                </p>
                <p className="mt-4 mb-2 text-md">
                For those of you who are not familiar with what linear algebra actually is, let me give you a very quick overview. Linear algebra is all about linear equations, linear systems, vectors and matrices. It is about how you do calculations with them and what they represent. It is a very theoretical field but its applications are quite practical. For example think about a convolutional neural network that recognizes different objects. The convolutional layers of this network work with filters. And what are these filters? They are matrices and the image we are working with is also a matrix of pixels. What the neural network does is, it calculates the dot product of the filter and a certain area of pixels, in order to create the channels. You probably start to realize why linear algebra might be important.
                </p>
                <p className="mt-4 mb-8 text-md">
                But its not only neural networks where this is relevant. In computer vision for example we are applying a lot of transformations, filters and effects onto our images. Everything here is done with matrices and vectors. It is essential to know what is happening in the background, even if you use libraries like Tensorflow or OpenCV. Because being a computer scientist is not about just calling functions. It is about understanding what is happening, getting an intuition about the algorithms and finding solutions to problems. Therefore the theory is essential.
                </p>
            </div>
            <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
                <h2 className="text-3xl font-semibold leading-none pb-4 text-[#FF7825] text-center">
                Calculus & Optimization
                </h2>
                <div className="w-1/2 lg:w-1/3 mx-auto">
                    <Image
                        className=""
                        width={497}
                        height={497}
                        alt="img"
                        src="https://media.discordapp.net/attachments/807562739324157962/1084088812549980210/2.png?width=434&height=434"
                    ></Image>
                </div>
                <p className="mt-4 mb-2 text-md">
                Calculus is another field that is fundamental for computer science. Actually it is even more important when it comes to hardware programming, because there we work with frequencies and there calculus is used in many different ways. But for machine learning there is also a very big application of calculus and this is optimization. If you are into machine learning, you probably know about the gradient descent algorithm. It is the algorithm that minimizes the output of the loss function by tweaking the weights and biases. If you have read the sixth volume of The Python Bible series, which is about neural networks, you know that this algorithm consists of nothing but calculus. It is all about calculating the direction of steepest ascent and then going a tiny step into the opposite direction.
                </p>
                <p className="mt-4 mb-2 text-md">
                Another important reason to learn calculus is that it allows you to see how a function changes over time. When you are looking at sequential data like share prices this is very important. Again, if you are interested in really mastering machine learning, you need to know what is happening behind the scenes. This helps you with troubleshooting but also with innovation.
                </p>
            </div>
            <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
                <h2 className="text-3xl font-semibold leading-none pb-4 text-[#FF7825] text-center">
                Statistics & Probability Theory​
                </h2>
                <div className="w-1/2 lg:w-1/3 mx-auto">
                    <Image
                        className=""
                        width={497}
                        height={497}
                        alt="img"
                        src="https://media.discordapp.net/attachments/807562739324157962/1084088812306714664/3.png?width=434&height=434"
                    ></Image>
                </div>
                <p className="mt-4 mb-2 text-md">
                These two are probably the most obvious fields on this list I think. Actually you could say that machine learning and data science are just branches of statistics. For example linear regression or logistic regression are just statistical algorithms. Of course you can always implement everything without understanding statistics at all. But the problem is that then you are not at all aware of all the limitations and biases of the algorithms you are using. You have no clue which algorithm is the proper one for a given problem. It is easy to just use the algorithms but in order to solve problems, you need to know how an algorithm works and what it is suited for.
                </p>
                <p className="mt-4 mb-2 text-md">
                Probability theory is also essential for data science. This one is a bit tricky though. Oftentimes we are interested in the probability of a certain event happening. However the probability theory that we use in machine learning is more about how statistical algorithms work with probabilities. That is also the reason why these two are combined here. Algorithms like Naive Bayes for example are based on probability theory and statistics.
                </p>
            </div>
            <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
                <h2 className="text-3xl font-semibold leading-none pb-4 text-[#FF7825] text-center">
                Graph Theory​
                </h2>
                <div className="w-1/2 lg:w-1/3 mx-auto">
                    <Image
                        className="rounded-full"
                        width={497}
                        height={497}
                        alt="img"
                        src="https://media.discordapp.net/attachments/807562739324157962/1084088812109574204/4_1.png?width=434&height=434"
                    ></Image>
                </div>
                <p className="mt-4 mb-2 text-md">
                Last but not least let us get to a mathematical giant that actually really surprised me when I started studying computer science. I am talking about graph theory. I always liked graph theory because it was an interesting and visual way to apply math. But what I didn’t know is how much it is actually used in computer science. Things like algorithms, data structures and path finding algorithms all make use of graph theory.
                </p>
                <p className="mt-4 mb-2 text-md">
                In machine learning graph theory is extremely relevant because it provides a framework for working with interconnections. We are talking about things like links between websites, social networks etc. It is a good way to find ways to store and query our data in an efficient way. There are even graph databases which are used by companies like Facebook. Wherever you have a huge amount of data with lots of interconnections, graph theory will help you tremendously. It is an essential field for all of computer science.
                </p>
            </div>
            <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
                <h2 className="text-3xl font-semibold leading-none pb-14 text-[#FF7825] text-center">
                Conclusion
                </h2>
                <p className="mt-4 mb-2 text-md">
                All in all we can say that mathematics are essential for every computer scientist that is interested in more than just implementing, copying code and using libraries from other people. For everyone who wants to innovate, to understand and to build, I would totally recommend learning the fields mentioned in this post. You don’t necessarily need a college education to do that. With some discipline, some YouTube and some good books you can learn it by yourself.
                </p>
                <p className="mt-4 mb-2 text-md">
                I hope you enjoyed this blog post! If you want to tell me something or ask questions, feel free to ask in the comments! Down below you will find some additional links leading to more content. Check out my Instagram page or the other parts of this website, if you are interested in more! I also have a lot of high-quality Python programming books in the book section! Stay tuned!
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
        
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 w-8/12">
    <hr class="w-full h-0.5 mx-auto  bg-[#ccc] border-0 rounded" />    
    <h2 className="text-xl font-bold leading-none text-[#FF7825]">
                Leave a Reply
                </h2>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-[#0e0e0e]">
			
			<div className="grid md:grid-cols-6 gap-4 col-span-full">
				<div className="col-span-full">
					<textarea id="bio" cols="6" rows="6" placeholder="Your comment here..." className="p-2 w-full rounded-sm focus:ring focus:ring-opacity-75 focus:ring-white text-gray-300 bg-[#0e0e0e] border-white border-[1px]"></textarea>
				</div>
				<div className="col-span-full sm:col-span-2">
					<input id="username" type="text" placeholder="Name (Required)" className="p-2 w-full rounded-sm focus:ring focus:ring-opacity-75 focus:ring-white text-gray-300 bg-[#0e0e0e] border-white border-[1px]" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<input id="website" type="text" placeholder="Email (Required)" className="p-2 w-full rounded-sm focus:ring focus:ring-opacity-75 focus:ring-white text-gray-300 bg-[#0e0e0e] border-white border-[1px]" />
				</div>
                
				<div className="col-span-full sm:col-span-2">
					<input id="website" type="text" placeholder="Website" className="p-2 w-full rounded-sm focus:ring focus:ring-opacity-75 focus:ring-white text-gray-300 bg-[#0e0e0e] border-white border-[1px]" />
				</div>
				<div className="col-span-full">
					<div className="float-right space-x-2">
						<button type="button" className="px-4 py-2 rounded-sm border-gray-100 bg-[#FF7825] text-white font-[700]">Post Comment</button>
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
         YOU MIGHT ALSO LIKE</h2>
          <div className="grid justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block"
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
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block"
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
      <footer class="text-[#C4C4C4] body-font bg-black">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-100">
              <Image
                className="h-auto inline w-full"
                width={1024}
                height={774}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1080232878887161896/logo.png?width=1025&height=425"
              ></Image>
            </a>
            <p class="mt-2 text-md text-bold text-white text-center">
              Copyright &copy; 2019
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-[#FF7825] text-md mb-3">
                Navigation
              </h2>
              <nav class="list-none mb-10 flex-col items-center">
                <li className="mx-4 my-1 md:my-0 ">
                  <Link href="/" className="hover:text-orange-500 duration-500">
                    Home
                  </Link>
                </li>
                <li className="mx-4 my-1 md:my-0 ">
                  <Link
                    href="/blog"
                    className="hover:text-orange-500 duration-500"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mx-4 my-1 md:my-0 ">
                  <Link
                    href="/books"
                    className="hover:text-orange-500 duration-500"
                  >
                    Books
                  </Link>
                </li>
                <li className="mx-4 my-1 md:my-0 ">
                  <Link
                    href="/videos"
                    className="hover:text-orange-500 duration-500"
                  >
                    Videos
                  </Link>
                </li>
                <li className="mx-4 my-1 md:my-0 ">
                  <Link
                    href="/shop"
                    className="hover:text-orange-500 duration-500"
                  >
                    Shop
                  </Link>
                </li>
                <li className="mx-4 my-1 md:my-0 ">
                  <Link
                    href="/about"
                    className="hover:text-orange-500 duration-500"
                  >
                    About
                  </Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-[#FF7825] text-md mb-3 text-center">
                Legal
              </h2>
              <nav class="list-none mb-10 flex-col items-center ">
                <li className="mx-4 my-1 md:my-0 ">
                  <Link href="/" className="hover:text-orange-500 duration-500">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mx-4 my-1 md:my-0 ">
                  <Link href="/" className="hover:text-orange-500 duration-500">
                    Terms and Conditions
                  </Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/2 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-[#FF7825] tracking-widest text-sm mb-3">
                Social Media
              </h2>
              <nav class="list-none mb-10 gap-2">
                <li>
                  <Link
                    href="https://www.instagram.com/neuralnine"
                    class="text-white hover:text-[#FF7825]"
                  >
                    <span class="fab fa-instagram fa-3x"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/channel/UC8wZnXYK_CGKlBcZp-GxYPA"
                    class="text-white hover:text-[#FF7825]"
                  >
                    <span class="fab fa-youtube fa-3x"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.twitter.com/neuralnine"
                    class="text-white hover:text-[#FF7825]"
                  >
                    <span class="fab fa-twitter fa-3x"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/neuralnine/"
                    class="text-white hover:text-[#FF7825]"
                  >
                    <span class="fab fa-linkedin fa-3x"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/NeuralNine"
                    class="text-white hover:text-[#FF7825]"
                  >
                    <span class="fab fa-github fa-3x"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.neuralnine.com/contact"
                    class="text-white hover:text-[#FF7825]"
                  >
                    <span class="fa fa-envelope fa-3x"></span>
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
