import React, { Component } from "react";

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

        let stats, remark, score;

        if (playerStats) {
            stats = playerStats.stats;
            score = playerStats.score; 

            if (score <= 30) {
                remark = "Nugget Alert!! More practice will refine you."
            } else if (score > 30 && score <= 50) {
                remark = "Platinum Alert!! You have practiced alot."
            }
        }

        if (!playerStats) {
            return <div>Please Take a Quiz!!</div>;
        }

        return (
            <>
                <section className="grid justify-center items-center mt-7 mb-7 bg-purple-200 rounded-lg py-10 border-2 border-amber-300">
                    <p>Score: {playerStats.score}</p>
                    <p>Number of Questions: {playerStats.numOfQuestions}</p>
                    <p>Number of Answered Questions: {playerStats.numOfAnsweredQuestions}</p>
                    <p>Correct Answers: {playerStats.correctAnswers}</p>
                    <p>Wrong Answers: {playerStats.wrongAnswers}</p>
                    <p>Used Toss Up: {playerStats.usedTossUp}</p>
                    <p>Used Hints: {playerStats.usedHints}</p>
                </section>
            </>
        );
    }
}

export default QuizSummary;
