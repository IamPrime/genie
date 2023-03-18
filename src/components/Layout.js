import Nav from "./Nav";

export default function Layout({ children }) {
    return (
        <div className="mx-10">
            <Nav />
            <main>{children}</main>
        </div>
    )
}