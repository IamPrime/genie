import Head from "next/head";
import Link from "next/link";

export default function HowTo() {
    return (
        <>
            <Head>
                <title>Genie | Quiz Instructions</title>
            </Head>
            <section className="leading-relaxed p-10 bg-purple-800 text-amber-300 rounded-lg my-10">
                <div className="grid justify-center items-center ">
                    <article className="prose md:prose-lg lg:prose-xl dark:prose-invert">
                        <h1>How to play with the Genie</h1>
                        <h3>Ensure to read the instructions before you start</h3>
                        <p>
                            <ul className="list-outside">
                                <li><strong>Game Duration: &nbsp;</strong>15 total minutes is allowed for each quiz type.</li>
                                <li><strong>Questions Available: &nbsp;</strong> 15 total questions for each quiz type.</li>
                                <li>
                                    <strong>Answer Options: &nbsp;</strong>Every question contains 4 options.
                                    {/** We can add a screenshot here */}
                                </li>
                                <li><strong>Your Answer: &nbsp;</strong>Select the options you think best answers the question.
                                    {/** We can add a screenshot here */}
                                </li>
                                <li><strong>Lifeline: &nbsp;</strong>Each quiz has 2 lifelines namely:
                                    <ul className="list-inside">
                                        <li><strong>Toss-Up: &nbsp;</strong> Two (2)</li>
                                        <li><strong>Hints: &nbsp;</strong> Five (5)</li>
                                    </ul>
                                </li>
                                <li>
                                    You are free to quit (retire) from the quiz at any time.
                                    <ul className="list-inside">
                                        <li>Your score will be revealed and the quiz will be over.</li>
                                    </ul>
                                </li>
                                <li>Timer: Starts as soon as the game loads.</li>
                            </ul>
                        </p>
                    </article>
                </div>
                <div className="flex justify-between items-center">
                    <span>
                        <Link href={"/private/Dashboard"}>Take me back</Link>
                    </span>
                    <span>
                        <Link href={"/quiz/Play"}>Continue</Link>
                    </span>
                </div>
            </section>
        </>
    );
}