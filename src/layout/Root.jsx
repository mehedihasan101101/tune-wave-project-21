import Nav from "../components/navBar/Nav";
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router";

const Root = () => {
    return (
        <div>
            <>
                <Nav></Nav>
                <main className="bg-mainBg min-h-[70vh]">
                    <Outlet></Outlet>
                </main>
                <footer className="bg-mainBg mt-10 ">

                    <Footer></Footer>

                </footer>
            </>

        </div>
    );
};

export default Root;