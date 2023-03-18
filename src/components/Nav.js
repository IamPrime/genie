import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

export default function Nav() {
    const [user, loading] = useAuthState(auth);

    return (
        <nav className="flex justify-between items-center py-10">
            <Link href={"/"}>Logo</Link>
            <ul>
                {(
                    <Link href={"/auth/Login"}>
                        <a className="py-2 px-4 text-lg bg-purple-800 text-amber-300 rounded-lg font-medium ml-8">
                            Login
                        </a>
                    </Link>
                ) && !user}
                {user && (
                    <Link href={"/private/Dashboard"}>
                        <img src={user.photoURL} alt="Avatar" />
                    </Link>
                )}
            </ul>
        </nav>
    );
}
