import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {
  BsFacebook, BsTwitter, BsInstagram,
  BsLinkedin, BsYoutube, BsGithub, BsWhatsapp
} from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Genie | Fun Quizzes</title>
      </Head>
    <div className="container my-24 px-6 mx-auto">
  {/* Section: Design Block */}
  <section className="mb-32 text-gray-800">
    <div className="flex flex-wrap">
      <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-7/12 px-3 lg:px-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to Genie Quizz</h1>
        <p className="font-bold mb-2">Be warned: only take this quiz if you REALLY want to know.</p>
        <p className="font-bold mb-2">Non cupidatat skateboard dolor brunch?</p>
        <p className="text-gray-500 mb-6">
          Distinctio corporis, iure facere ducimus quos consectetur ipsa ut
          magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed fugit
          iusto minus et suscipit? Minima sunt at nulla tenetur, numquam unde
          quod modi magnam ab deserunt ipsam sint aliquid dolores libero
          repellendus cupiditate mollitia quidem dolorem odit
        </p>
        <p className="font-bold mb-2">
          Praesentium voluptatibus temporibus consequatur non aspernatur?
        </p>
        <p className="text-gray-500 mb-6">
          Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
          deserunt ipsam sint aliquid dolores libero repellendus cupiditate
          mollitia quidem dolorem.
        </p>
        <p className="font-bold mb-2">
          Voluptatum magnam sed fugit iusto minus et suscipit?
        </p>
        <p className="text-gray-500">
          Laudantium perferendis, est alias iure ut veniam suscipit dolorem
          fugit. Et ipsam corporis earum ea ut quae cum non iusto blanditiis
          ipsum dolor eius reiciendis, velit adipisci quas.
        </p>
      </div>
      <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-3 lg:px-6">
  <img src="https://cdn-gdkcp.nitrocdn.com/pXiSTObAtzysxTBOnDEDVAOrTkEKIOld/assets/images/optimized/rev-e38cc74/wp-content/uploads/2020/10/asian-girl-excited-purple-laptop-flying-icons.png" alt="Description of the image" className="w-full h-screen object-cover" />
</div>
    </div>
  </section>
  {/* Section: Design Block */}
</div>
    </>
  )
}
