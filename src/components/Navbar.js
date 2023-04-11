import Link from 'next/link';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

function Navbar() {
    const [user, loading] = useAuthState(auth);

    return (
        <>
            <nav className="fixed top-0 left-0 z-20 w-full bg-white">
                <div className="mx-50 my-2 max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 items-center hidden">
                            {/* Mobile menu button*/}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {/*Icon when menu is closed.Menu open: "hidden", Menu closed: "block"*/}
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                                {/*Icon when menu is open. Menu open: "block", Menu closed: "hidden"*/}
                                <svg
                                    className="hidden h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="object-contain h-14 w-12 animate-pulse"
                                    src="/images/logo.png"
                                    alt="Genie"
                                />
                            </div>
                            <div className="hidden sm:ml-20 sm:block">
                                <div className="flex space-x-20 font-mono">
                                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                    <Link
                                        href={"/"}
                                        className="hover:bg-pink-700 text-black hover:text-white rounded-md px-3 py-2 text-m font-medium"
                                        aria-current="page"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href={"/About"}
                                        className="text-black hover:bg-pink-700 hover:text-white rounded-md px-3 py-2 text-m font-medium"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href={"/Contact"}
                                        className="text-black hover:bg-pink-700 hover:text-white rounded-md px-3 py-2 text-m font-medium"
                                    >
                                        Contact

                                    </Link>
                                    <Link
                                        href={"/Categories"}
                                        className="text-black hover:bg-pink-700 hover:text-white rounded-md px-3 py-2 text-m font-medium"
                                    >
                                        Categories
                                    </Link>
                                    <div className="space-x-5 inset-y-0 right-0 flex flex-end pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 font-mono">
                                        <button className="text-black hover:text-pink-700 block rounded-md px-3 py-2 text-base font-medium">
                                            {!user && (
                                                <div>
                                                    <Link href={"/auth/Login"} className="bg-pink-700 text-white block rounded-md px-3 py-1 text-m font-medium">
                                                        Signup
                                                    </Link>
                                                </div>
                                            )}
                                            {user && (
                                                <div>
                                                    <Link href={"/private/Dashboard"}>
                                                        <img
                                                            referrerPolicy="no-referrer"
                                                            className="w-8 rounded-full"
                                                            src={user.photoURL}
                                                            alt="Avatar"
                                                        />
                                                    </Link>
                                                </div>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Mobile menu, show/hide based on menu state. */}
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <Link
                            href={"/"}
                            className="text-black hover:bg-pink-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                            aria-current="page"
                        >
                            Home
                        </Link>
                        <Link
                            href={"/About"}
                            className="text-black hover:bg-pink-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href={"/Contact"}
                            className="text-black hover:bg-pink-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                        >
                            Contact
                        </Link>
                        <Link
                            href={"/Categories"}
                            className="text-black hover:bg-pink-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                        >
                            Categories
                        </Link>
                        <div className="space-x-5 inset-y-0 right-0 flex justify-end pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 font-mono">
                            <button className="text-black hover:text-pink-700 block rounded-md px-3 py-2 pb-3 text-base font-medium">
                                {!user && (
                                    <div>
                                        <Link href={"/auth/Login"} className="bg-pink-700 text-white block rounded-md px-3 py-2 text-base font-medium">
                                            Signup
                                        </Link>
                                    </div>
                                )}
                                {user && (
                                    <div>
                                        <Link href={"/private/Dashboard"}>
                                            <img
                                                referrerPolicy="no-referrer"
                                                className="w-12 rounded-full"
                                                src={user.photoURL}
                                                alt="Avatar"
                                            />
                                        </Link>
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar