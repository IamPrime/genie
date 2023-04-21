import Head from "next/head";
import Link from "next/link";
import { auth } from "../../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default function HowTo() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  if (loading) return (
    <div className="text-purple-700 font-bold flex items-center justify-center">
      L.O.A.D.I.N.G.....
    </div>
  )
  if (!user) route.push("/auth/Login");

  if (user) {
    return (
      <>
        <Head>
          <title>Genie | Quiz Instructions</title>
        </Head>
        <section className="bg-gradient-to-r from-pink-500 to-purple-500 leading-relaxed p-10 text-amber-300 rounded-tl-3xl rounded-br-3xl mx-40 my-10">
          <div className="grid justify-center items-center ">
            <article className="prose md:prose-lg lg:prose-xl dark:prose-invert">
              <h1>How to play with the Genie</h1>
              <h3>Ensure to read the instructions before you start</h3>
              <div>
                <ul className="list-outside">
                  <li>
                    <strong>Game Duration: &nbsp;</strong>15 total minutes is
                    allowed for each quiz type.
                  </li>
                  <li>
                    <strong>Questions Available: &nbsp;</strong> 15 total
                    questions for each quiz type.
                  </li>
                  <li>
                    <strong>Answer Options: &nbsp;</strong>Every question
                    contains 4 options.
                    {/** We can add a screenshot here */}
                  </li>
                  <li>
                    <strong>Your Answer: &nbsp;</strong>Select the options you
                    think best answers the question.
                    {/** We can add a screenshot here */}
                  </li>
                  <li>
                    <strong>Lifeline: &nbsp;</strong>Each quiz has 2 lifelines
                    namely:
                    <ul className="list-inside">
                      <li>
                        <strong>Toss-Up: &nbsp;</strong> Two (2)
                      </li>
                      <li>
                        <strong>Hints: &nbsp;</strong> Five (5)
                      </li>
                    </ul>
                  </li>
                  <li>
                    You are free to quit (retire) from the quiz at any time.
                    <ul className="list-inside">
                      <li>
                        Your score will be revealed and the quiz will be over.
                      </li>
                    </ul>
                  </li>
                  <li>Timer: Starts as soon as the game loads.</li>
                </ul>
              </div>
            </article>
          </div>
          <div className="flex justify-between items-center">
            <span>
              <Link
                className="text-white font-bold"
                href={"/private/Dashboard"}
              >
                Take me back
              </Link>
            </span>
            <span>
              <Link
                className="text-white font-bold"
                href={"/private/quiz/Play"}
              >
                Continue
              </Link>
            </span>
          </div>
        </section>
      </>
    );
  }
}
