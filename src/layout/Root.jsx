import Nav from "../components/navBar/Nav";
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router";

const Root = () => {
    return (
        <div>
            <>
                <Nav></Nav>
                <main className="bg-mainBg min-h-screen">
                    <Outlet></Outlet>
                </main>

                <Footer></Footer>
            </>

        </div>
    );
};

export default Root;