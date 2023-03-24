import Nav from "./Nav";
import Footer from "./Footer";
import QuizHome from "../pages/private/QuizzeD";

export default function Layout({ children }) {
    return (
        <div className="mx-10">
            <Nav />
            <main>{children}</main>
            <Footer/>
        </div>
    )
}