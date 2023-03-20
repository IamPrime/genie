import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Genie | Fun Quizzes</title>
      </Head>
      <div className="w-full m-h-screen py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-blue-800 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">Welcome to Project Blueblood</p>
          </div>

          <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div
              className="bg-amber-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
              <div className="mt-2 font-bold">Fun Quizzes for Everyone</div>
              <div className="font-light">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quas soluta facere officiis tempora eveniet voluptatem sit laborum laboriosam? Ea, a.
                </p>
              </div>
            </div>

            <div
              className="bg-red-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
              <div className="mt-2 font-bold">User Dashboard</div>
              <div className="font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus nihil consectetur deleniti iste recusandae eius?</div>
            </div>

            <div
              className="bg-green-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
              <div className="mt-2 font-bold">Admin Dashboard</div>
              <div className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Optio quia ad, minus excepturi maxime maiores ipsum odit, repudiandae illo, corrupti provident tenetur! Error, dicta eligendi?</div>
            </div>

            <div
              className="bg-purple-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
              <div className="mt-2 font-bold">Multiple Quiz Categories</div>
              <div className="font-light">
                <ol>
                  <li>
                    Science
                  </li>
                  <li>
                    Technology
                  </li>
                  <li>
                    Engineering
                  </li>
                  <li>
                    Mathematics
                  </li>
                  <li>
                    Social Sciences
                  </li>
                </ol>
              </div>
            </div>

            <div className="flex items-center space-x-7 bg-gray-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
              {/* Facebook */}
              <BsFacebook
                className="btn text-blue-300 w-20 h-20"
                href="#!"
                role="button"
              />
              {/* Twitter */}
              <BsTwitter
                className="btn text-blue-600 w-20 h-20"
                href="#!"
                role="button"
              />
              {/* Google */}
              <FcGoogle
                className="btn text-white w-20 h-20"
                href="#!"
                role="button"
              />
              {/* Instagram */}
              <BsInstagram
                className="btn text-purple-300 w-20 h-20"
                href="#!"
                role="button"
              />
              {/* Linkedin */}
              <BsLinkedin
                className="btn text-blue-900"
                href="#!"
                role="button"
              />
              
              {/* Stack overflow */}
              <a
                className="btn text-white"
                href="#!"
                role="button"
              >
                <i className="fab fa-stack-overflow" />
              </a>
              {/* Youtube */}
              <a
                className="btn text-white"
                href="#!"
                role="button"
              >
                <i className="fab fa-youtube" />
              </a>
              {/* Github */}
              <a
                className="btn text-white"
                href="#!"
                role="button"
              >
                <i className="fab fa-github" />
              </a>
              {/* Whatsapp */}
              <a
                className="btn text-white"
                href="#!"
                role="button"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>

            <div
              className="bg-blue-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
              <div className="mt-2 font-bold">Coming Soon</div>
              <div className="font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus nihil consectetur deleniti iste recusandae eius?</div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
