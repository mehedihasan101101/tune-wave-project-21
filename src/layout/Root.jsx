import Nav from "../components/navBar/Nav";
import Footer from "../components/footer/Footer"
import { Outlet, useLocation } from "react-router";
import { useContext } from "react";
import { PrimaryContext } from "../context/Context";
import LoadingScreen from "../components/loadingScreen/LoadingScreen";
import { ToastContainer } from 'react-toastify';

const Root = () => {
    const { loading } = useContext(PrimaryContext);
    const { pathname } = useLocation();



    if (loading) {
        return (
            <div className={`h-screen flex  justify-center`}>
                <LoadingScreen></LoadingScreen>
            </div>
        )
    }

    return (
        <>

            <div>

                <Nav></Nav>
                <main className={`bg-mainBg ${pathname == "/Dashboard" ? "min-h-[60vh]" : "min-h-[70vh]"} flex flex-col items-center justify-center`}>
                    <Outlet></Outlet>
                </main>
                <footer className="bg-mainBg mt-10">

                    <Footer></Footer>

                </footer>

                <ToastContainer position="top-right"
                    autoClose={2000}
                    newestOnTop={true}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme=""
                    ></ToastContainer>
            </div></>

    );
};

export default Root;