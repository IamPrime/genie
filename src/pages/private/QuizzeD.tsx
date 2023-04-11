import Head from 'next/head'
import Link from 'next/link';
import { GiNotebook } from 'react-icons/gi';


export default function QuizzeD() {
    return (
        <>
            <Head>
                <title>Genie | Quiz Home</title>
            </Head>
            <section className='grid justify-center items-center bg-purple-200 rounded-lg py-10 border-2 border-amber-300'>
                <div className='items-center'>
                    <span>
                        <GiNotebook className='w-28 md:w-32 lg:w-48 h-28 md:h-32 lg:h-48' />
                    </span>
                </div>
                <h1 className=' text-amber-800 text-center'>
                    <strong>Genie </strong> 
                    | Fun Quizzes For Everyone
                </h1>
                <div className='ml-5 button w-32 rounded-full bg-green-600 text-center mt-3 text-amber-300'>
                    <ul>
                        <li>
                            <Link href={'/private/quiz/HowTo'}>Play</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}