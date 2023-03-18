import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

export default function Nav() {
    const [user, loading] = useAuthState(auth);

    return (
        <nav className="flex justify-between items-center py-10">
            <Link href={"/"}>Logo</Link>
            <ul className="flex items-center gap-10">
                <a className="text-lg font-medium" href="#">
                    About
                </a>
                {!user && (
                    <div>
                        <Link href={"/auth/Login"} className="py-2 px-4 text-lg bg-purple-800 text-amber-300 rounded-lg font-medium ml-8">
                            Join now
                        </Link>
                    </div>
                )}
                {user && (
                    <div>
                        <Link href={"/private/Dashboard"}>
                            <img
                                referrerPolicy="no-referrer"
                                className="w-12 rounded-full"
                                src={user.photoURL}
                                alt="Avatar"
                            />
                        </Link>
                    </div>
                )}
            </ul>
        </nav>
    );
}
