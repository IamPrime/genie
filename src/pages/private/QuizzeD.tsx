import Head from 'next/head'
import Link from 'next/link';
import { GiNotebook } from 'react-icons/gi';


export default function QuizzeD() {
    return (
        <>
            <Head>
                <title>Genie | Quiz Home</title>
            </Head>
            <section className='grid justify-center items-center bg-purple-200 rounded-lg mt-4 py-10'>
                <div>
                    <span>
                        <GiNotebook className='w-32 md:w-48 lg:w-52 h-32 md:h-48 lg:h-52' />
                    </span>
                </div>
                <h1>Genie | Fun Quizzes </h1>
                <div className='button w-32 rounded-full bg-green-600 text-center'>
                    <ul>
                        <li>
                            <Link href={'/quiz/HowTo'}>Play</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}