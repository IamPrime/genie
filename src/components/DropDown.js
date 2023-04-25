import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Link from "next/link";

function DropDown() {
    const route = useRouter();
    const [user] = useAuthState(auth);

    const { ADMIN_URI } = process.env

    if (route.isFallback) {
        return (
            <div className="flex justify-center items-center bg-gray-900 h-screen">
                <div className="bg-white flex space-x-2 p-5 rounded-full justify-center items-center">
                    <div className="bg-blue-600 p-2 w-4 h-4 rounded-full"></div>
                    <div className="bg-green-600 p-2 w-4 h-4 rounded-full"></div>
                    <div className="bg-red-600 p-2 w-4 h-4 rounded-full"></div>
                </div>
            </div>
        )
    }
    if (!user) route.push("/auth/Login");

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
                    <li>
                        {/**<Link href={{ pathname: '/private/chat/[id]', query: { id: 'id' } }}>Discussions</Link>*/}
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
