import React, { useState } from 'react'
import { omit } from 'lodash'
import { FaHamburger } from 'react-icons/fa'

export default function QuizCustom(props) {
    // this is the important property to transfer data from child to parent to access custom options
    const [addCustomCategories, options, quiz, visible, isVisible] = [props.addCustomCategories, props.options, props.quiz, props.visible, props.isVisible]


    const [customization, setCustomization] = useState({
        difficulty: options[0] || '',
        category: options[1] || '',
        number: options[2] || '15'
    })

    const [errors, setError] = useState({})

    const validate = (id, value) => {
        switch (id) {
            case 'number':
                if ((value < 15) || (value > 20)) {
                    setError({
                        ...errors,
                        number: "Value must be between 15 and 20"
                    })
                } else {
                    let newObj = omit(errors, 'number')
                    setError(newObj)
                }
                break
            default: break
        }
    }

    const handleChange = (event) => {
        setCustomization({ ...customization, [event.target.id]: event.target.value })
        let id = event.target.id;
        let value = event.target.value;
        validate(id, value)
    }

    const generateCustomQuizData = (event) => {
        event.preventDefault()
        let number = Number(customization.number)
        if ((!number) || (number < 15) || (number > 20)) {
            return
        }
        isVisible(prevState => !prevState)
        addCustomCategories(customization)
    }

    const toggleCustomMenu = () => {
        isVisible(prevState => !prevState)
        let number = Number(customization.number)
        if ((!number) || (number < 15) || (number > 20)) {
            setCustomization(prevState => (
                { ...prevState, number: options[2] || '15' }
            ))
            let newObj = omit(errors, 'number')
            setError(newObj)
        }
    }

    const resetQuiz = () => {
        props.resetGame()
        isVisible(false)
    }

    return (
        <div className="container bg-red-400 flex items-center text-white">
            <div className={visible ? "visible" : ""}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <FaHamburger className={visible ? "visible" : ""} onClick={() => toggleCustomMenu()} />
            {!quiz ? <form className={visible ? 'h-screen bg-white' : 'flex flex-col fixed overflow-scroll bg-white left-1'}>
                <h1 className="quiz-menu-header">Settings</h1>
                <div className="yellow-blob-settings"></div>
                <div className="blue-blob-settings"></div>
                <label htmlFor="difficulty">Select Difficulty:</label>
                <select
                    id='difficulty'
                    className="input-box"
                    value={customization.difficulty}
                    onChange={handleChange}
                >
                    <option value="">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <label htmlFor="category">Select Category:</label>
                <select
                    id="category"
                    className="input-box"
                    value={customization.category}
                    onChange={handleChange}
                >
                    <option value="">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="17">Science & Nature</option>
                    <option value="18">Computers</option>
                    <option value="19">Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="31">Japanese Anime & Manga</option>
                </select>
                <label htmlFor="number">Number of Questions:</label>
                <input
                    type="number"
                    id="number"
                    className={errors.number ? "input-box active" : "input-box"}
                    value={customization.number}
                    onChange={handleChange}
                    min="15"
                    max="20"
                />
                {
                    errors.number && <div className="error-message">{errors.number}</div>
                }
                <button className="submit-button" type="submit" onClick={generateCustomQuizData}>Submit</button>
            </form> :
                <div className={visible ? 'quiz-menu on-screen' : 'quiz-menu'}>
                    <div className="yellow-blob-settings"></div>
                    <div className="blue-blob-settings"></div>
                    <h1 className="quiz-menu-header">Settings</h1>
                    <div className="settings-text-container">
                        <p className="settings-text">A bit too difficult? Reset quiz and go back to the homescreen to try again.</p>
                    </div>
                    <button className="reset-button" type="submit" onClick={resetQuiz}>Reset</button>
                </div>}

        </div>
    )
}

