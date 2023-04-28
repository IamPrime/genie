import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(MONGODB_URI)

        if (connection.readyState == 1) {
            console.log("BlueBlood Database Connected!!")
        }
    } catch (errors) {
        return Promise.reject(errors)
    }
}

export default connectDb
