import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import {MdEmail} from 'react-icons/md';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from '../../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Login() {
    const [user, loading] = useAuthState(auth);
    const route = useRouter();

    // Google SignIn
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            route.push("/private/Dashboard")
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user){
            route.push("/private/Dashboard");
        } else {
            console.log("Login")
        }
    }, [user]);

    return (
        <div className='shadow-xl mt-32 p-10 text-lg bg-purple-800 text-amber-300 rounded-lg '>
            <h2 className='text-3xl font-medium'>Login</h2>
            <div className='py-4'>
                <h3 className='py-4'>
                    Login with your preferred Platform
                </h3>
            </div>
            <div className='flex flex-col gap-4'>
                <button onClick={googleLogin} className='text-amber-300 bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-6'>
                    <FcGoogle className='text-2xl' />
                    Sign in With Google
                </button>
                <button className='text-amber-300 bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-6'>
                    <FaFacebook className='text-2xl text-blue-500' />
                    Sign in With Facebook
                </button>
                <button className='text-amber-300 bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-6'>
                    <MdEmail className='text-2xl text-white' />
                    Sign in With Email
                </button>
            </div>
        </div>
    )
}