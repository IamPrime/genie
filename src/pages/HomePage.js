//this code is a React component that renders a homepage layout with two sections.
//In the first section, there is a background image with a text container theat describes the Genie platform. There is also a button that, when clicked, 
//opens a video player component with a demo of the platform. The video player is conditionally rendered based on the 'showVideoPlayer' state variable, which 
//managed by two functions 'handleOpenVideoPlayer' and 'handleCloseVideoPlayer'.

//In the second sectio, there is a heading and a paragraph that describe the features of this website. There is also an image with a QR code and a text that invites 
//users to join the Genie.com app.
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

export default function HomePage() {
    const [showVideoPlayer, setShowVideoPlayer] = useState(false)
    const handleOpenVideoPlayer = () => {
        setShowVideoPlayer(true)
    }
    const handleCloseVideoPlayer = () => {
        setShowVideoPlayer(false)
    }
    return (
        <>
            <div className="bg-white container my-20 px-0 mx-0">
                {/* Section: Design Block */}
                <section className="mb-32 text-black">
                    <div className="flex flex-wrap items-center">
                        <div className="flex-grow-0 flex-shrink-0 w-full md:w-7/12 px-3 lg:px-5 text-container">
                            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight font-serif">
                                Interactive Q&amp;A <br /> for events <br /> and meetings
                            </h1>
                            <p className="text-base py-8 md:text-lg mb-12 font-mono">
                                Get your audience engaged and supercharge your events with Slido. <br /> The ultimate Q&amp;A and polling platform for live and hybrid events and meetings.
                            </p>
                            <p className="text-base md:text-lg font-mono">
                                Get your audience engaged and supercharge your events with Slido. <br /> The ultimate Q&amp;A and polling platform for live and hybrid events and meetings.
                            </p>
                        </div>
                        <div className="relative w-full md:w-5/12 h-screen overflow-hidden+*">
                            <button
                                onClick={handleOpenVideoPlayer}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#c13584"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"

                                    strokeLineCap="round"
                                    strokeLineJoin="round"
                                    className="w-34 h-28 hover:w-38 hover:h-32 absolute top-1/2 z-10 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-300 mobile-svg-center"
                                    style={{ zIndex: 10 }}
                                    stroke="none"
                                >
                                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" fill="#ffffff" />
                                </svg>
                            </button>
                            {showVideoPlayer && (
                                <VideoPlayer videoUrl="./videos/Genie.mp4" onClose={handleCloseVideoPlayer} />
                            )}
                            <img
                                src="https://cdn-gdkcp.nitrocdn.com/pXiSTObAtzysxTBOnDEDVAOrTkEKIOld/assets/images/optimized/rev-e38cc74/wp-content/uploads/2020/10/asian-girl-excited-purple-laptop-flying-icons.png"
                                alt="Description of the image"
                                className="w-full h-screen object-cover"
                            />
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
                <div className="flex item-center">
                    <div className="w-full mx-auto sm:px-6">
                        <div className="lg:text-center">
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-600 md:text-3xl font-serif">
                                Test people's knowledge with an interactive online quiz
                            </h1>
                            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                Want to spice up your presentation or check people's learning in an engaging way? Create a multiple choice quiz and bring out the competitive spirit at your meetings, workshops or informal gatherings.
                            </p>
                        </div>
                        <div className="mt-5 flex item-center">
                            <div className="relative mx-auto">
                                <img
                                    src="/images/bgcode.jpg"
                                    alt="Image with text"
                                    width={800}
                                    height={600}
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                    <p className="text-yellow-600 text-2xl font-bold">
                                        Join at <br/> Genie.com <br/>#MyApp
                                    </p>
                                    <img src="./images/qrcode.jpg" alt="QR code" width={150} height={150}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
