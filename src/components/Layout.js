import Navbar from "./Navbar";
import Footer from "./Footer"

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <main className="mt-32 mb-32">{children}</main>
            <Footer />
        </div>
    );
}