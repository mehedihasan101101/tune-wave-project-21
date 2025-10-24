import Nav from "../components/navBar/Nav";
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router";

const Root = () => {
    return (
        <div>
            <>
                <Nav></Nav>
                <Outlet></Outlet>
                <Footer></Footer>
            </>

        </div>
    );
};

export default Root;