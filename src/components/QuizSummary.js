import React, { Component } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import Link from "next/link";

class QuizSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerStats: null,
        };
    }

    componentDidMount() {
        const playerStats = JSON.parse(sessionStorage.getItem("playerStats"));
        this.setState({ playerStats });
    }

    render() {
        const { playerStats } = this.state;

        if (!playerStats) {
            return (
                <section className="grid justify-center items-center mt-7 mb-7 bg-purple-600 rounded-lg py-10 border-2 border-amber-300">
                    <div>Please Take A Quiz!!</div>
                </section>
            );
        }

        const stats = playerStats.stats;
        const score = (playerStats.score / playerStats.numOfQuestions) * 100;
        let remark;

        if (score <= 25) {
            remark = "Copper Alert!! More practice will refine you.";
        } else if (score > 25 && score <= 50) {
            remark = "Zinc Alert!! You should practice more.";
        } else if (score > 50 && score <= 75) {
            remark = "Silver Alert!! You can do better.";
        } else if (score > 75 && score <= 90) {
            remark = "Gold Alert!! Your hardwork is paying off.";
        } else if (score > 90 && score <= 99) {
            remark = "Platinum Alert!! You are a Genius.";
        } else if (score > 99 && score <= 100) {
            remark = "Diamond Alert!! You are the best.";
        }

        return (
            <>
                <section className="grid justify-center items-center mt-7 mb-7 font-medium bg-sky-300 rounded-lg py-10 border-2 border-amber-300">
                    <div>
                        <div className="flex items-center justify-center">
                            <BsPatchCheckFill className="w-20 h-20" />
                        </div>
                        <div className="flex items-center justify-center">
                            <h1>{remark}</h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <h2>Your Score: {score.toFixed(0)}&#37;</h2>
                        </div>
                        <div className="flex items-center justify-center">
                            <div>Total number of questions: </div>
                            <div>{playerStats.numOfQuestions}</div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div>Number of attempted questions: </div>
                            <div>{playerStats.numOfAnsweredQuestions}</div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div>Number of correct answers: </div>
                            <div>{playerStats.correctAnswers}</div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div>Number of wrong answers: </div>
                            <div>{playerStats.wrongAnswers}</div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div>Number of tossups used: </div>
                            <div>{playerStats.usedTossUp}</div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div>Number of hints used: </div>
                            <div>{playerStats.usedHints}</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center right-0 bottom-0 mt-3">
                        <button className="bg-green-400 rounded-md px-3 py-1">
                            <Link href={'/private/quiz/Play'}>Play Again</Link>
                        </button>
                    </div>
                </section>
            </>
        );
    }
}

export default QuizSummary;
