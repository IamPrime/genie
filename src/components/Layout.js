import Navbar from "./Navbar";
import Footer from "./Footer"

export default function Layout({children}){
    return (
        <div>
            <Navbar />
            <main className="mb-10 mt-28">{children}</main>
            <Footer/>
        </div>
    );
}