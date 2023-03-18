import { auth } from "../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default function Dashboard() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) return <h1>L.O.A.D.I.N.G....</h1>;
    if (!user) route.push("/auth/Login");
    if (user) {
        return (
            <>
                <h2>{user.displayName} Genie is glad you are here!!</h2>
                <button onClick={() => auth.signOut()}>Sign Out</button>
            </>
        );
    }
}
