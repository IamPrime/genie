import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

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
            <h2 className="text-base text-red-500 font-semibold">Good Morning</h2>
            <p className="mt-2 text-blue-800 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">Welcome to Sling Academy</p>
          </div>

          <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div
              className="bg-amber-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
              <div className="mt-2 font-bold">John Doe</div>
              <div className="font-light">Some description</div>
            </div>

            <div
              className="bg-red-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
              <div className="mt-2 font-bold">John Doe</div>
              <div className="font-light">Some description</div>
            </div>

            <div
              className="bg-green-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
              <div className="mt-2 font-bold">John Bolinger</div>
              <div className="font-light">Some description</div>
            </div>

            <div
              className="bg-purple-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
              <div className="mt-2 font-bold">John Mulagani</div>
              <div className="font-light">Some description</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
