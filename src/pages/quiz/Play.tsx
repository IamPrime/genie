import React, { Component } from "react";
import Head from "next/head";
import { FcPrevious, FcNext, FcAlarmClock } from "react-icons/fc";
import { GiCancel, GiLifeInTheBalance, GiCardRandom } from "react-icons/gi";
import questions from '../../assets/questions/questions.json';
import { isEmpty } from "@firebase/util";


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
        questions: [],
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
        const { questions } = this.state;
        this.displayQuestions(questions);
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

    handleNextButtonClick = () => {
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


    render() {
        const { currentQuestion } = this.state;

        return (
            <div>
                <Head><title>Genie | Quiz 1</title></Head>
                <section className="bg-gray-300 rounded-lg p-5 border-solid border-2 border-amber-300 mt-10">
                    <div className="flex justify-between items-center pb-4">
                        <p className="inline-flex items-center">
                            <span>
                                <GiLifeInTheBalance />
                            </span>
                            <p className="px-1">2</p>
                        </p>
                        <p className="inline-flex items-center">
                            <span>
                                <GiCardRandom />
                            </span>
                            <p className="px-1">2</p>
                        </p>
                    </div>
                    <div className="flex justify-between items-center pb-4">
                        <p>
                            <span>1 of 15</span>
                        </p>
                        <p className="inline-flex items-center">
                            <span>
                                <FcAlarmClock />
                            </span>
                            <p className="px-1">7:00</p>
                        </p>
                    </div>
                    <div className="grid justify-center items-center p-7">
                        <div className="question container">
                            <h1>What year was Google Founded?</h1>
                        </div>
                        <div className="answers container grid items-center">
                            <div className="flex justify-between items-center gap-20 m-3">
                                <p className="flex items-center justify-center bg-blue-400 rounded-full min-w-40 h-7 p-3">1997</p>
                                <p className="flex items-center justify-center bg-blue-400 rounded-full min-w-40 h-7 p-3">1998</p>
                            </div>
                            <div className="flex justify-between items-center gap-20 m-3">
                                <p className="flex items-center justify-center bg-blue-400 rounded-full min-w-40 h-7 p-3">2008</p>
                                <p className="flex items-center justify-center bg-blue-400 rounded-full min-w-40 h-7 p-3">2000</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-2">
                        <button
                            type="button"
                            className="inline-flex items-center rounded bg-gray-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
                            <FcPrevious />
                            <span className="px-1">Previous</span>
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center rounded bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]">
                            <GiCancel />
                            <span className="px-1">Quit</span>
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center rounded bg-green-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]">
                            <span className="px-1">Next</span>
                            <FcNext />
                        </button>
                    </div>

                </section>
            </div>
        );
    }
}
export default Play;
