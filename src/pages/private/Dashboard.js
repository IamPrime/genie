import { auth } from "../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import QuizzeD from './QuizzeD';

export default function Dashboard() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) return <h1>L.O.A.D.I.N.G....</h1>;
    if (!user) route.push("/auth/Login");
    if (user) {
        return (
            <>
                <div className="flex justify-between items-center md:mx-auto bg-purple-800 rounded-lg text-amber-300 px-7 mt-7 mb-7 h-10">
                    <div className="flex items-center">
                        <h2 className="pr-3"><strong>{user.displayName}</strong></h2>
                        <div className="flex gap-1"><h3>Genie</h3> is glad you are here!!</div>
                    </div>
                    <button onClick={() => auth.signOut()} className="rounded-full bg-red-500 px-6">Sign Out</button>
                </div>
                <QuizzeD />
            </>
        );
    }
}
