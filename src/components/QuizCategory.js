import React from 'react'
import { HiChat } from 'react-icons/hi'

export default function QuizCategory(props) {

    const [options, onStart, isVisible] = [props.options, props.onStart, props.isVisible]

    // prints out name of category on landing page based on user input
    let category = ''
    switch (options[1]) {
        case '9':
            category = 'general knowledge'
            break
        case '17':
            category = 'science & nature'
            break
        case '18':
            category = 'computers'
            break
        case '19':
            category = 'mathematics'
            break
        case '20':
            category = 'mythology'
            break
        case '21':
            category = 'sports'
            break
        case '22':
            category = 'geography'
            break
        case '23':
            category = 'history'
            break
        case '24':
            category = 'politics'
            break
        case '25':
            category = 'art'
            break
        case '26':
            category = 'celebrities'
            break
        case '27':
            category = 'animals'
            break
        case '28':
            category = 'vehicles'
            break
        case '31':
            category = 'Japanese anime & manga'
            break
        default: break
    }

    const showMenu = () => {
        isVisible(true)
    }

    return (
        <div className="flex items-center bg-blue-300 py-4 px-4">
            <div className="content">
                <HiChat />
                <h1>Genie</h1>
                <div className='grid items-center font-bold mt-3 mb-3'>
                    Test your knowledge! When you start the quiz, you will have to answer {options[2] ? options[2] : 15}{options[1] ? ` ${category} questions` : ` random questions`}.
                    <div>
                        Modify quiz preferences <span className="modify-settings" onClick={showMenu}>above</span>.
                    </div>
                    <div>Good luck!</div>
                </div>
                <button className="bg-green-400 rounded-lg px-4 flex items-center" onClick={onStart}> Start quiz!</button>
            </div>
        </div>
    )
}