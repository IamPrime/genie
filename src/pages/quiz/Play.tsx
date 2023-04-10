import React from "react";
import Head from "next/head";
import { FcPrevious, FcNext, FcAlarmClock } from "react-icons/fc";
import { GiCancel, GiLifeInTheBalance, GiCardRandom } from "react-icons/gi";
import questions from "@/assets/questions/questions.json";
import isEmpty from "@/utils/is-empty";
import { alertService } from "@/utils";
import { Alert } from "@/components";


interface Props { }

interface State {
    questions: any[];
    currentQuestion: any;
    nextQuestion: any;
    prevQuestion: any;
    answer: any;
    numOfQuestions: number;
    numOfAnsweredQuestions: number;
    currentQuestionIdx: number;
    score: number;
    correctAnswers: number;
    wrongAnswers: number;
    hints: number;
    tossUp: number;
    usedTossUp: boolean;
    time: any;
}

class Play extends React.Component<{}, State> {
    state = {
        questions,
        currentQuestion: {},
        nextQuestion: {},
        prevQuestion: {},
        answer: '',
        numOfQuestions: 0,
        numOfAnsweredQuestions: 0,
        currentQuestionIdx: 0,
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        hints: 5,
        tossUp: 2,
        usedTossUp: false,
        time: {}
    };

    componentDidMount = () => {
        const { questions, currentQuestion, nextQuestion, prevQuestion } = this.state;

        this.displayQuestions(questions, currentQuestion, nextQuestion, prevQuestion);
    }

    displayQuestions = (
        questions = this.state.questions,
        currentQuestion = {},
        nextQuestion = {},
        prevQuestion = {},
        answer = " "
    ) => {
        let { currentQuestionIdx } = this.state;
        if (!isEmpty(questions)) {
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIdx];
            nextQuestion = questions[currentQuestionIdx + 1];
            prevQuestion = questions[currentQuestionIdx - 1];
            const answer = currentQuestion.answer;

            this.setState({
                currentQuestion,
                nextQuestion,
                prevQuestion,
                answer,
                numOfQuestions: questions.length,
                usedTossUp: false,
            });
        }
    };

    handleOptionClick = (e) => {
        if (e.target.innerHTML == this.state.answer) {
            this.correctAnswer();
        } else {
            this.wrongAnswer();
        }
    }

    handleNextButtonClick = () => {
        /**Call button sound here */
        if (this.state.nextQuestion !== undefined) {
            this.setState(
                (prevState) => ({
                    currentQuestionIdx: prevState.currentQuestionIdx + 1,
                }),
                () => {
                    this.displayQuestions(
                        this.state.questions,
                        this.state.currentQuestion,
                        this.state.nextQuestion,
                        this.state.prevQuestion
                    );
                }
            );
        }
    };

    handlePrevButtonClick = () => {
        /**Call button sound here */
        if (this.state.prevQuestion !== undefined) {
            this.setState(
                (prevState) => ({
                    currentQuestionIdx: prevState.currentQuestionIdx - 1,
                }),
                () => {
                    this.displayQuestions(
                        this.state.questions,
                        this.state.currentQuestion,
                        this.state.nextQuestion,
                        this.state.prevQuestion
                    );
                }
            );
        }
    };

    handleQuitButtonClick = () => {
        /**Call button sound here */
        if (window.confirm('Do You Want To Quit?')) {
            window.location.href = '/private/Dashboard';
        }
    }

    correctAnswer = () => {
        alertService.success('Correct Answer...')
        this.setState(
            prevState => ({
                score: prevState.score + 1,
                correctAnswers: prevState.correctAnswers + 1,
                currentQuestionIdx: prevState.currentQuestionIdx + 1,
                numOfAnsweredQuestions: prevState.numOfAnsweredQuestions + 1
            }),
            () => {
                this.displayQuestions(
                    this.state.questions,
                    this.state.currentQuestion,
                    this.state.nextQuestion,
                    this.state.prevQuestion
                )
            }
        )
    }

    wrongAnswer = () => {
        navigator.vibrate(1000);
        alertService.error('Wrong Answer...')
        this.setState(
            prevState => ({
                wrongAnswers: prevState.wrongAnswers + 1,
                currentQuestionIdx: prevState.currentQuestionIdx + 1,
                numOfAnsweredQuestions: prevState.numOfAnsweredQuestions + 1
            }),
            () => {
                this.displayQuestions(
                    this.state.questions,
                    this.state.currentQuestion,
                    this.state.nextQuestion,
                    this.state.prevQuestion
                )
            }
        )
    }

    handleHintsClick = () => {
        console.log('Hints Clicked!');
    }


    render() {
        const { currentQuestion, currentQuestionIdx, hints, tossUp, numOfQuestions } = this.state;

        return (
            <>
                <Head><title>Genie | Quiz 1</title></Head>
                <section className="bg-gray-300 rounded-lg p-5 border-solid border-2 border-amber-300 mt-10">
                    {/** Lifeline, Hints and Timer */}
                    <div className="flex justify-between items-center pb-4">
                        <div
                            className="inline-flex items-center cursor-grabbing bg-gradient-to-r hover:from-sky-500 hover:to-amber-300 hover:rounded-lg"
                        >
                            <span>
                                <GiLifeInTheBalance className="text-green-500 h-7 w-7 hover:text-sky-500" />
                            </span>
                            <div className="px-1">{tossUp}</div>
                        </div>
                        <div
                            className="inline-flex items-center cursor-grabbing bg-gradient-to-r hover:from-sky-500 hover:to-amber-300 hover:rounded-lg"
                            onClick={this.handleHintsClick}
                        >
                            <span>
                                <GiCardRandom className="text-green-500 h-7 w-7" />
                            </span>
                            <div className="px-1">{hints}</div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pb-4">
                        <div>
                            <span>{currentQuestionIdx + 1} of {numOfQuestions}</span>
                        </div>
                        <div className="inline-flex items-center">
                            <span>
                                <FcAlarmClock />
                            </span>
                            <div className="px-1">7:00</div>
                        </div>
                    </div>
                    {/** Quiz Question and Answer Options */}
                    <div className="grid justify-center items-center p-7 mb-5">
                        <div className="question container">
                            <h1
                                className="flex justify-center items-center cursor-grab mb-5 font-bold text-lg hover:text-xl sm:text-base"
                            >
                                {currentQuestion.question}
                            </h1>
                        </div>
                        <div className="answers container grid items-center">
                            <div className="options flex justify-between items-center gap-20 m-3">
                                <div
                                    onClick={this.handleOptionClick}
                                    className="md:w-60 flex items-center justify-center cursor-pointer bg-blue-400 rounded-full min-w-40 h-7 px-3 py-5 hover:bg-sky-700"
                                >
                                    {currentQuestion.optionA}
                                </div>
                                <div
                                    onClick={this.handleOptionClick}
                                    className="md:w-60 flex items-center justify-center cursor-pointer bg-blue-400 rounded-full min-w-40 h-7 px-3 py-5 hover:bg-sky-700"
                                >
                                    {currentQuestion.optionB}
                                </div>
                            </div>
                            <div className="options flex justify-between items-center gap-20 m-3">
                                <div
                                    onClick={this.handleOptionClick}
                                    className="md:w-60 flex items-center justify-center cursor-pointer bg-blue-400 rounded-full min-w-40 h-7 px-3 py-5 hover:bg-sky-700"
                                >
                                    {currentQuestion.optionC}
                                </div>
                                <div
                                    onClick={this.handleOptionClick}
                                    className="md:w-60 flex items-center justify-center cursor-pointer bg-blue-400 rounded-full min-w-40 h-7 px-3 py-5 hover:bg-sky-700"
                                >
                                    {currentQuestion.optionD}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/** Buttons | Previous, Next and Quit */}
                    <div className="flex justify-center space-x-2 mb-7">
                        <button
                            onClick={this.handlePrevButtonClick}
                            type="button"
                            className="inline-flex items-center rounded bg-gray-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
                            <FcPrevious />
                            <span className="px-1">Previous</span>
                        </button>
                        <button
                            onClick={this.handleQuitButtonClick}
                            type="button"
                            className="inline-flex items-center rounded cursor-help bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]">
                            <GiCancel />
                            <span className="px-1">Quit</span>
                        </button>
                        <button
                            onClick={this.handleNextButtonClick}
                            type="button"
                            className="inline-flex items-center rounded bg-green-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]">
                            <span className="px-1">Next</span>
                            <FcNext />
                        </button>
                    </div>
                </section>
                {/** Popup Alert */}
                <Alert />
            </>
        );
    }
}
export default Play;
