import Nav from "../components/navBar/Nav";
import Footer from "../components/footer/Footer"
import { Outlet, useLocation, useMatches } from "react-router";
import { useContext, useEffect } from "react";
import { PrimaryContext } from "../context/Context";
import LoadingScreen from "../components/loadingScreen/LoadingScreen";

const Root = () => {
    const { loading, setLoading } = useContext(PrimaryContext);
    const { pathname } = useLocation();

    // Screen Loader setup
    const matches = useMatches();

    const routesWithLoader = ["0-0", "home-page", "browser-page", "browser-page-2", "browser-page-3"]; //to add loading at any page just need to add route id in this array
    const currentRouteId = matches[matches.length - 1].id;
    const isLoadingAllowed = routesWithLoader.includes(currentRouteId) //check if loading is allowed in the current route

    useEffect(() => {
        //if loading is forbidden 
        if (loading === true && !isLoadingAllowed) {
            setLoading(false)
        }
        // if loading is allowed
        if (isLoadingAllowed) {
            setLoading(true)
            const timer = setTimeout(() => {
                setLoading(false)
            }, 500)
            return () => clearTimeout(timer);
        }
    }, [currentRouteId]) //end of screen loading setup


    return (
        <>
            {
                loading && (
                    <div className={`h-screen flex  justify-center`}>
                        <LoadingScreen></LoadingScreen>
                    </div>
                )
            }
            <div className={`${loading ? "hidden" : ""}`}>

                <Nav></Nav>
                <main className={`bg-mainBg ${pathname == "/Dashboard" ? "min-h-[60vh]" : "min-h-[70vh]"} flex flex-col items-center justify-center`}>
                    <Outlet></Outlet>
                </main>
                <footer className="bg-mainBg mt-10">

                    <Footer></Footer>

                </footer>


            </div></>

    );
};

export default Root;