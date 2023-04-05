//The code defines a React component called 'VideoPlayer'. This component takes two props, 'videoUrl' and 'onClose'.
//It creates a full-screen video player UI by rendering an overlay with a black background and a video container in the center of the screen.
//The useEffect hook is used to set the CSS overflow property of the document.body element to hidden when the component is mounted and reset it to visible when it is unmounted. This prevents scrolling of the underlying content while the video player is open.
//The videoUrl prop is used as the source URL for an iframe element that displays the video content. The onClose prop is a callback function that is called when the user clicks the close button, which is a circular button with a white X symbol.
import { useEffect } from 'react'

const VideoPlayer = ({ videoUrl, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative w-11/12 h-11/12 md:w-3/4 md:h-3/4 rounded-lg overflow-hidden">
        <button
          className="relative top-0 right-0 p-0.5 rounded-full bg-black transition duration-200"
          onClick={onClose}
        >
          <svg
            className="w-7 h-7 z-10 stroke-current text-pink-700"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl}
            title="video player"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
