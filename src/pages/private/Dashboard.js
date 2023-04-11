import { auth } from "../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import QuizzeD from './QuizzeD';

export default function Dashboard() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) return <h1>L.O.A.D.I.N.G....</h1>;
    if (!user) route.push("../HomePage");
    if (user) {
        return (
            <>
                <QuizzeD />
            </>
        );
    }
}
