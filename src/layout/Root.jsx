import Nav from "../components/navBar/Nav";
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router";
import { useContext } from "react";
import { PrimaryContext } from "../context/Context";
import LoadingScreen from "../components/loadingScreen/LoadingScreen";

const Root = () => {
    const { loading} = useContext(PrimaryContext);


    if (loading) {
        return (
            <>

                <div className="h-screen flex items-center justify-center">
                    <LoadingScreen></LoadingScreen>
                </div>
            </>
        )
    }
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