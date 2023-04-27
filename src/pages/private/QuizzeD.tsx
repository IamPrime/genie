import Head from 'next/head'
import Link from 'next/link';
import { GiNotebook } from 'react-icons/gi';
import QuizSummary from '../../components/QuizSummary';
import { auth } from '../../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';


export default function QuizzeD() {

    const route = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) return (
        <div className="flex justify-center items-center bg-gray-900 h-screen">
            <div className="bg-white flex space-x-2 p-5 rounded-full justify-center items-center">
                <div className="bg-blue-600 p-2 w-4 h-4 rounded-full"></div>
                <div className="bg-green-600 p-2 w-4 h-4 rounded-full"></div>
                <div className="bg-red-600 p-2 w-4 h-4 rounded-full"></div>
            </div>
        </div>
    )
    if (!user) route.push("/auth/Login");

    if (user) {
        return (
            <>
                <Head>
                    <title>Genie | Quiz Home</title>
                </Head>
                <section className='grid justify-center items-center mt-36 bg-purple-200 rounded-lg py-10 border-2 border-amber-300'>
                    <div className='items-center'>
                        <span className='flex items-center justify-center'>
                            <GiNotebook className='w-28 md:w-32 lg:w-48 h-28 md:h-32 lg:h-48' />
                        </span>
                    </div>
                    <div>
                        <h1 className='text-amber-800 text-center'>
                            <strong>Genie </strong>
                            | Fun Quizzes For Everyone
                        </h1>
                    </div>
                    <div className='mt-7 flex items-center justify-center w-full'>
                        <button className='bg-green-600 rounded-full px-7'>
                            <Link href={'/private/quiz/HowTo'}>
                                Play
                            </Link>
                        </button>
                    </div>
                </section>
                <QuizSummary />
            </>
        )
    }
}