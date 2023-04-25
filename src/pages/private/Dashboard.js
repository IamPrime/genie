import { auth } from "../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import QuizzeD from './QuizzeD';

export default function Dashboard() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) return (
        <div className="flex justify-center items-center bg-gray-900 h-screen">
            <div className="bg-white flex space-x-2 p-5 rounded-full justify-center items-center">
                <div className="bg-blue-600 p-2 w-4 h-4 rounded-full"></div>
                <div className="bg-green-600 p-2 w-4 h-4 rounded-full"></div>
                <div className="bg-red-600 p-2 w-4 h-4 rounded-full"></div>
            </div>
        </div>
    )

    if (!user) route.push("/");
    if (user) {
        return (
            <>
                <div>
                    <QuizzeD />
                </div>
            </>
        );
    }
}
