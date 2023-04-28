/** These are helper functions
 * Used to consume the apis
 */

/** BASE_URL for working with Frontend */
//const BASE_URL = 'http://localhost:3000/Admin'

/** BASE_URL for working with backend */
const BASE_URL = 'https://admin-iamprime.vercel.app'

/** Get all quizzes from the database */
export const getAllQuizzes = async () => {
    const response = await fetch(`${BASE_URL}/api/genie`)

    const json = await response.json()

    return json
}

/** Get quiz by Id */
export const getQuizId = async (quizId) => {
    const response = await fetch(`${BASE_URL}/api/genie/${quizId}`)

    const json = await response.json()

    return json
}

/** Post Quiz */
export async function postQuiz(quizData) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(quizData)
        }

        const response = await fetch(`${BASE_URL}/api/genie`, Options)
        const json = await response.json()

        return json

    } catch (error) {
        return error
    }
}