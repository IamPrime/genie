import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaSpinner } from "react-icons/fa";

function DropDown() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth);
    if (route.isFallback) {
        return (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        );
      }
    if (!user) route.push("/");
    if (user) {
        return (
            <div className="bg-white rounded-b-lg shadow-lg w-48 divide-y divide-gray-100 cursor-auto">
                <div class="block px-4 py-2 text-gray-800">
                    <div>{user.displayName}</div>
                </div>
                <ul class="text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <Link href={"/private/Dashboard"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Dashboard</Link>
                    </li>
                    <li>
                        <Link href={"/private/Profile"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</Link>
                    </li>
                    <li>
                        <Link href={"/Categories"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Categories</Link>
                    </li>
                </ul>
                <div>
                    <button onClick={() => auth.signOut()} className="w-48 rounded-b-lg px-4 bg-gray-800 text-white text-center font-bold py-2">Sign Out</button>
                </div>
            </div>
        );
    }
}

export default DropDown;
