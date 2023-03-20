import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";


export default function Nav() {
    const [user, loading] = useAuthState(auth);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-purple-800 rounded-md  text-amber-300">
            <div className="container-fluid p-4 flex justify-between items-center">
                <Link className="navbar-brand mt-2 mt-lg-0" href={"/"}>
                    <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                        height="15" alt="some logo" loading="lazy" />
                </Link>
                <div className="d-flex align-items-center">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex items-center gap-10">
                        <Link href={"/About"} className="text-lg font-medium">
                            About
                        </Link>
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
                </div>
            </div>
        </nav>
    );
}
