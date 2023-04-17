import { auth } from "../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";


export default function Dashboard() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) return (
        <div className="text-purple-700 font-bold flex items-center justify-center">
            A.D.M.I.N.I.S.T.R.A.T.O.R......
        </div>
    );

    if (!user) route.push("/");

    if (user) {
        return (
            <div className="flex items-center justify-center bg-purple-400 text-amber-500">
                Welcome to your Dashboard
            </div>
        );
    }
}
