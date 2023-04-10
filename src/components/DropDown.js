import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Link from "next/link";

function DropDown() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth);
    if (!user) route.push("../HomePage");
    if (user) {
        return (
            <div className="bg-white rounded-md shadow-lg py-2 w-48 divide-y divide-gray-100 ">
                <div class="block px-4 py-2 text-gray-800">
                    <div>{user.displayName}</div>
                </div>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <Link href={"/private/Dashboard"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Dashboard</Link>
                    </li>
                    <li>
                        <Link href={"/"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Notifications</Link>
                    </li>
                </ul>
                <div>
                    <button onClick={() => auth.signOut()} className="w-48 px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Out</button>
                </div>
            </div>
        );
    }
}

export default DropDown;
