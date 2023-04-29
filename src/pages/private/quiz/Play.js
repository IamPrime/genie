import React, { Component } from "react";
import Head from "next/head";
import { auth } from "../../../../utils/firebase";
import router from "next/router";
import { FcPrevious, FcNext, FcAlarmClock } from "react-icons/fc";
import { GiCancel, GiLifeInTheBalance, GiCardRandom } from "react-icons/gi";
import questions from "@/assets/questions/questions.json";
import isEmpty from "@/utils/is-empty";
import { alertService } from "@/utils";
import { Alert } from "@/components";


const MAX_HINTS = 5;
const MAX_TOSS_UP = 2;

class Play extends Component {
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
    hints: MAX_HINTS,
    tossUp: MAX_TOSS_UP,
    usedTossUp: false,
    time: {},
    prevRandNumbers: [],
    nextBtnDisabled: false,
    prevBtnDisabled: true,
    randomNumber: null,
    user: null
  };

  componentDidMount() {
    // Check if user is authenticated
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        // Redirect to login page
        router.push('/auth/Login');
      }
    });
    const { questions } = this.state;
    this.displayQuestions(questions);
    this.startTimer();
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

      this.setState(
        {
          currentQuestion,
          nextQuestion,
          prevQuestion,
          answer,
          numOfQuestions: questions.length,
          prevRandNumbers: [],
        },
        () => {
          this.showOptions();
          this.handleDisabledButton();
        }
      );
    }
  };

  handleOptionClick = (e) => {
    if (e.currentTarget.innerHTML === this.state.answer) {
      this.correctAnswer();
    } else {
      this.wrongAnswer();
    }
  };

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
    if (window.confirm("Do You Want To Quit?")) {
      window.location.href = "/private/Dashboard";
    }
  };

  correctAnswer = () => {
    alertService.success("Correct Answer...");
    this.setState(
      (prevState) => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        currentQuestionIdx: prevState.currentQuestionIdx + 1,
        numOfAnsweredQuestions: prevState.numOfAnsweredQuestions + 1,
      }),
      () => {
        if (this.state.nextQuestion === undefined) {
          this.handleQuizEnd();
        } else {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.prevQuestion
          );
        }
      }
    );
  };

  wrongAnswer = () => {
    navigator.vibrate(1000);
    alertService.error("Wrong Answer...");
    this.setState(
      (prevState) => ({
        wrongAnswers: prevState.wrongAnswers + 1,
        currentQuestionIdx: prevState.currentQuestionIdx + 1,
        numOfAnsweredQuestions: prevState.numOfAnsweredQuestions + 1,
      }),
      () => {
        if (this.state.nextQuestion === undefined) {
          this.handleQuizEnd();
        } else {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.prevQuestion
          );
        }
      }
    );
  };

  /**
   * Used to reset the visibility of the options
   * that have been hidden by the lifeline buttons - Tossup and Hints
   */
  showOptions = () => {
    const options = document.querySelectorAll(".option");

    options.forEach((option) => {
      const styledOption = option;
      styledOption.style.visibility = "visible";
    });

    this.setState({
      usedTossUp: false,
    });
  };

  handleHintsClick = () => {
    if (this.state.hints > 0) {
      const options = Array.from(document.querySelectorAll(".option"));
      let indexOfAnswer;

      options.forEach((option, index) => {
        if (option.innerHTML === this.state.answer) {
          indexOfAnswer = index;
        }
      });

      while (true) {
        const randomNumber = Math.round(Math.random() * 3);

        if (
          randomNumber !== indexOfAnswer &&
          !this.state.prevRandNumbers.includes(randomNumber)
        ) {
          options.forEach((option, index) => {
            if (index === randomNumber) {
              option.style.visibility = "hidden";
              this.setState((prevState) => ({
                hints: prevState.hints - 1,
                prevRandNumbers: prevState.prevRandNumbers.concat(randomNumber),
              }));
            }
          });
          break;
        }
        if (this.state.prevRandNumbers.length >= 3) break;
      }
    }
  };

  handleTossUpClick = () => {
    if (this.state.tossUp > 0 && this.state.usedTossUp == false) {
      const options = document.querySelectorAll(".option");
      const randomNumbers = [];
      let indexOfAnswer;

      options.forEach((option, index) => {
        if (option.innerHTML === this.state.answer) {
          indexOfAnswer = index;
        }
      });

      let count = 0;
      do {
        const randomNumber = Math.round(Math.random() * 3);
        if (randomNumber !== indexOfAnswer) {
          if (
            randomNumbers.length < 2 &&
            !randomNumbers.includes(randomNumber) &&
            !randomNumbers.includes(indexOfAnswer)
          ) {
            randomNumbers.push(randomNumber);
            count++;
          } else {
            while (true) {
              const newRandNumber = Math.round(Math.random() * 3);
              if (
                !randomNumbers.includes(newRandNumber) &&
                newRandNumber !== indexOfAnswer
              ) {
                randomNumbers.push(newRandNumber);
                count++;
                break;
              }
            }
          }
        }
      } while (count < 2);
      options.forEach((option, index) => {
        if (randomNumbers.includes(index)) {
          option.style.visibility = "hidden";
        }
      });
      this.setState((prevState) => ({
        tossUp: prevState.tossUp - 1,
        usedTossUp: true,
      }));
    }
  };

  startTimer = () => {
    // Count down is equal to 5 minutes or 300,000 milliseconds
    let countDownTimer = new Date().getTime() + 300000;

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownTimer - now;

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intervalId);
        this.setState(
          {
            time: { minutes: 0, seconds: 0 },
          },
          () => {
            /**alert("Quiz Timed Out!!");
                    window.location.href = '/private/Dashboard';*/
            this.handleQuizEnd();
          }
        );
      } else {
        this.setState({
          time: { minutes, seconds },
        });
      }
    }, 1000);
  };

  handleDisabledButton = () => {
    //Disable Previous Button
    if (
      this.state.prevQuestion === undefined ||
      this.state.currentQuestionIdx === 0
    ) {
      this.setState({
        prevBtnDisabled: true,
      });
    } else {
      this.setState({
        prevBtnDisabled: false,
      });
    }

    // Disable Next Button
    if (
      this.state.nextQuestion === undefined ||
      this.state.currentQuestionIdx + 1 === this.state.numOfQuestions
    ) {
      this.setState({
        nextBtnDisabled: true,
      });
    } else {
      this.setState({
        nextBtnDisabled: false,
      });
    }
  };
  handleQuizEnd = () => {
    alert("You have reached the last question");

    const { score, numOfQuestions, numOfAnsweredQuestions, correctAnswers, wrongAnswers, tossUp, hints } = this.state;

    const playerStats = {
      score,
      numOfQuestions,
      //numOfAnsweredQuestions,
      numOfAnsweredQuestions: correctAnswers + wrongAnswers,
      correctAnswers,
      wrongAnswers,
      usedTossUp: 2 - tossUp,
      usedHints: 5 - hints,
    };

    sessionStorage.setItem("playerStats", JSON.stringify(playerStats));

    const dashboardUrl = "/private/Dashboard";
    const redirectToDashboard = () => {
      window.location.href = dashboardUrl;
    };


    setTimeout(redirectToDashboard, 1000);
  };

  render() {
    const { currentQuestion, currentQuestionIdx, hints, tossUp, numOfQuestions, time, user } = this.state;

    if (user) {
      return (
        <>
          <Head>
            <title>Genie | Advert</title>
          </Head>
          <section className="bg-gradient-to-r from-pink-300 to-purple-100 p-5 mt-16 text-amber-600">
            {/** Lifeline, Hints and Timer */}
            <div className="flex justify-between items-center pb-2">
              <div className="inline-flex items-center cursor-grabbing hover:bg-pink-200 hover:rounded-lg">
                <span onClick={this.handleTossUpClick}>
                  <GiLifeInTheBalance className="text-pink-900 h-7 w-7" />
                </span>
                <div className="px-1">{tossUp}</div>
              </div>
              <div className="inline-flex items-center cursor-grabbing hover:bg-purple-200 hover:rounded-lg">
                <span onClick={this.handleHintsClick}>
                  <GiCardRandom className="text-purple-900 h-7 w-7" />
                </span>
                <div className="px-1">{hints}</div>
              </div>
            </div>
            <div className="flex justify-between items-center pb-2">
              <div>
                <span>
                  {currentQuestionIdx + 1} of {numOfQuestions}
                </span>
              </div>
              <div className="inline-flex items-center">
                <span>
                  <FcAlarmClock />
                </span>
                <div className="px-1">
                  {time.minutes} : {time.seconds}
                </div>
              </div>
            </div>
            {/** Quiz Question and Answer Options */}
            <div className="grid justify-center items-center p-7 mb-5">
              <div className="question container">
                <h1 className="flex justify-center items-center cursor-grab mb-5 font-bold text-lg hover:text-xl sm:text-base">
                  {currentQuestion.question}
                </h1>
              </div>
              <div className="answers container grid items-center">
                <div className="options flex justify-between items-center gap-20 m-3">
                  <button
                    onClick={this.handleOptionClick}
                    className="option md:w-60 flex items-center justify-center cursor-pointer bg-pink-300 rounded-full min-w-40 h-7 px-3 py-5 hover:bg-pink-500 text-pink-900"
                  >
                    {currentQuestion.optionA}
                  </button>
                  <button
                    onClick={this.handleOptionClick}
                    className="option md:w-60 flex items-center justify-center cursor-pointer bg-purple-300 rounded-full min-w-40 h-7 px-3 py-5 hover:bg-purple-500 text-purple-900"
                  >
                    {currentQuestion.optionB}
                  </button>
                </div>
                <div className="options flex justify-between items-center gap-20 m-3">
                  <button
                    onClick={this.handleOptionClick}
                    className="option md:w-60 flex items-center justify-center cursor-pointer bg-pink-300 rounded-full min-w-40 h-7 px-3 py-5 hover:bg-pink-500 text-pink-900"
                  >
                    {currentQuestion.optionC}
                  </button>
                  <button
                    onClick={this.handleOptionClick}
                    className="option md:w-60 flex items-center justify-center cursor-pointer bg-purple-300 rounded-full min-w-40 h-7 px-3 py-5 hover:bg-purple-500 text-purple-900"
                  >
                    {currentQuestion.optionD}
                  </button>
                </div>
              </div>
            </div>
            {/** Popup Alert */}
            <Alert />
            {/** Buttons | Previous, Next and Quit */}
            <div className="flex justify-center space-x-2 mb-7">
              <button
                onClick={this.handlePrevButtonClick}
                type="button"
                disabled={this.state.prevBtnDisabled}
                className="inline-flex items-center rounded bg-blue-700 px-6 pt-2.5 pb-2 text-xs disabled:opacity-30 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
              >
                <FcPrevious />
                <span className="px-1">Previous</span>
              </button>
              <button
                onClick={this.handleQuitButtonClick}
                type="button"
                className="inline-flex items-center rounded cursor-help bg-red-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]"
              >
                <GiCancel />
                <span className="px-1">Quit</span>
              </button>
              <button
                onClick={this.handleNextButtonClick}
                type="button"
                disabled={this.state.nextBtnDisabled}
                className="inline-flex items-center rounded bg-green-700 px-6 pt-2.5 pb-2 text-xs disabled:opacity-60 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]"
              >
                <span className="px-1">Next</span>
                <FcNext />
              </button>
            </div>
          </section>
        </>
      );
    }
  }
}

export default Play;