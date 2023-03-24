import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const inter = Inter({ subsets: ['latin'] })

export default function Categories() {
    return (
        <section className="grid items-center gap-10 mt-10">
            <div className="flex justify-center space-x-10">
                <div className="relative">
                    <a href="#!">
                        <div className="group block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                            <Image
                                className="rounded-t-lg"
                                src="https://wallpapercave.com/wp/AAynoYp.jpg?c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                alt=""
                                width={640}
                                height={427}
                            />
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Science
                                </h5>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-gray-400 mr-1" />
                                    <span className="text-sm text-gray-600">(24)</span>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                        <p className="font-bold text-lg">Learn More</p>
                                        <p className="text-gray-600 mt-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at urna eu tellus ullamcorper tristique.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </a>

                </div>

                <div className="relative">
                    <a href="#!">
                        <div className="group block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">

                            <Image
                                className="rounded-t-lg"
                                src="https://wallpapercave.com/dwp1x/wp10045399.jpg"
                                alt=""
                                width={640}
                                height={427}
                            />

                            <div className="p-6">
                                <h5
                                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Technology
                                </h5>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-gray-300 mr-1" />
                                    <span className="text-sm text-gray-500">(3)</span>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                        <p className="font-bold text-lg">Learn More</p>
                                        <p className="text-gray-600 mt-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at urna eu tellus ullamcorper tristique.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </a>
                </div>
                <div className="relative">
                    <a href="#!">
                        <div className="group block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">

                            <Image
                                className="rounded-t-lg"
                                src="https://wallpapercave.com/wp/wp2598989.png"
                                alt=""
                                width={640}
                                height={427}
                            />

                            <div className="p-6">
                                <h5
                                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Mathematics
                                </h5>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-gray-300 mr-1" />
                                    <span className="text-sm text-gray-500">(3)</span>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                        <p className="font-bold text-lg">Learn More</p>
                                        <p className="text-gray-600 mt-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at urna eu tellus ullamcorper tristique.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
