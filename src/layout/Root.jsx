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





    return (
        <>
            {loading && (
                <div className={`h-screen flex  justify-center`}>
                    <LoadingScreen></LoadingScreen>
                </div>
            )}
            <div>

                <Nav></Nav>
                <main className={`bg-mainBg ${pathname == "/Dashboard" ? "min-h-[50vh]" : "min-h-[70vh]"} flex flex-col items-center justify-center`}>
                    <Outlet></Outlet>
                </main>
                <footer className="bg-mainBg ">

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