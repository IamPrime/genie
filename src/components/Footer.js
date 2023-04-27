import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSnapchat } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import Link from 'next/link';


export default function Footer() {
    return (
        <footer className="w-full z-10 bg-white border-t border-gray-200 shadow md:items-center md:justify-between md:p-1 dark:bg-gray-800 dark:border-gray-600 h-22 fixed inset-x-0 bottom-0">
            <div className="md:flex justify-between items-center ml-5 mr-5">
                <div>
                    <span className="text-sm text-gray-500 sm:text-center justify-start dark:text-gray-400 flex items-start flex-col">
                        <h4 className="text-2xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
                    </span>
                </div>
                <div className="sticky bottom-0">
                    <div className="flex justify-center space-x-4">
                        <Link href="#!">
                            <FaTwitter className="w-6 h-6 text-blue-600 fill-current" />
                        </Link>
                        <Link href="#!">
                            <FaWhatsapp className="w-6 h-6 text-green-400 fill-current" />
                        </Link>
                        <Link href="#!">
                            <FaLinkedin className="w-6 h-6 text-blue-500 fill-current" />
                        </Link>
                        <Link href="#!">
                            <FaInstagram className="h-6 w-6 text-pink-700 fill-current" />
                        </Link>
                        <Link href="#!">
                            <FaSnapchat className="h-6 w-6 text-yellow-400 fill-current" />
                        </Link>
                        <Link href="https://github.com/Project-Blueblood">
                            <FaGithub className="h-6 w-6 text-gray-500 fill-current" />
                        </Link>
                        <Link href="#!">
                            <FaYoutube className="h-6 w-6 text-red-700 fill-current" />
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <hr className="my-3" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-0 mx-auto text-center">
                        <div className="text-sm text-gray-500 font-semibold py-0">
                            Copyright © <span id="get-current-year">2023</span>
                            &nbsp; by &nbsp;
                            <Link
                                href="https://github.com/Project-Blueblood"
                                className="text-gray-500 hover:text-yellow-100"
                            >
                                Team BlueBlood
                            </Link>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}