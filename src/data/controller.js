/** Controller */
import Quiz from "@/model/quiz"

//get:http://localhost:3000/api/admin
export async function getQuizzes(req, res) {
    try {
        const quizzes = await Quiz.find({})

        if (!quizzes) return res.status(404).json({ error: "Data Not Found!" })
        res.status(200).json(quizzes)

    } catch (error) {
        return res.status(404).json({ error: "Error | While Fetching Quiz Data" })
    }
}

//get:http://localhost:3000/api/admin?quizId=[_id]
export async function getQuiz(req, res) {
    try {
        const { quizId } = req.query

        if (quizId) {
            const quiz = await Quiz.findById(quizId)
            res.status(200).json(quiz)
        } else {
            return res.status(404).json({ error: "Quiz Not Found || ID Not Found" })
        }
    } catch (error) {
        return res.status(404).json({ error: "Error | While Fetching Quiz With ID" })
    }
}
