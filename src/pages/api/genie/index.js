import connectDb from "@/data/dbConn"
import { getQuizzes } from "@/data/controller"

export default async function handler(req, res) {
    connectDb().catch(() => res.status(405).json({ error: "Connection Failed!!" }))

    /** Type of Request */
    const { method } = req

    switch (method) {
        case 'GET':
            getQuizzes(req, res)
            break;
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}