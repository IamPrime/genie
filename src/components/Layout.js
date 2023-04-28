import Navbar from "./Navbar";
import Footer from "./Footer";
import {useLocation} from "react-dom"

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <main className="mb-32">{children}</main>
            <Footer/>
        </div>
    );
}