import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import {
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
    updateProfile,
} from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Admin() {
    const [user] = useAuthState(auth);
    const router = useRouter();

    // Google SignIn
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            router.push('/private/Dashboard');
        } catch (error) {
            console.log(error);
        }
    };

    // Facebook SignIn
    const handleFacebookLogin = async () => {
        const provider = new FacebookAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);

            const credence = await FacebookAuthProvider.credentialFromResult(result);
            const token = credence?.accessToken;

            const photoUrl =
                result.user.photoURL + '?height=500&access_token=' + token;

            if (auth.currentUser) {
                await updateProfile(auth.currentUser, { photoURL: photoUrl });
            }
            router.push('/private/Dashboard');
        } catch (error) {
            console.log(error);
        }
    };

    // Redirect to dashboard page if the user is already logged in
    useEffect(() => {
        user ? router.push('/private/Dashboard') : console.log('Admin');
    }, [user]);

    return (
        <section className="h-screen">
            <div className="container h-full px-6 py-24">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    {/* Left column container with background*/}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <Image
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone image"
                            width="300"
                            height="300"
                        />
                    </div>
                    {/* Right column container with form */}
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                        <form>
                            {/* Social login buttons */}
                            <div
                                onClick={handleGoogleLogin}
                                role="button"
                                className="mb-3 flex justify-center rounded bg-red-400 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                <div className="flex items-center">
                                    <div>
                                        <FcGoogle className="text-2xl" />
                                    </div>
                                    <div className="ml-2">
                                        Continue with Google
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={handleFacebookLogin}
                                className="mb-3 flex justify-center rounded bg-blue-500 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                role="button"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                {/* Facebook */}
                                <div className="flex items-center">
                                    <div>
                                        <FaFacebook className="text-2xl text-white-500" />
                                    </div>
                                    <div className="ml-2">
                                        Continue with Facebook
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mb-3 flex justify-center rounded bg-indigo-600 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
                                role="button"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                <div className="flex items-center">
                                    <div>
                                        <MdEmail className="text-2xl text-white" />
                                    </div>
                                    <div className="ml-2">
                                        Continue with Email
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
