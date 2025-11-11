import { createBrowserRouter, Navigate } from "react-router";
import Root from "../layout/Root"
import Home from "../pages/home/Home";
import handleApiData from "../utilities/handleApiData";
import Browse from "../pages/browser/Browse";
import YoutubePlayer from "../components/youtubePlayer/YoutubePlayer";



const Routes = createBrowserRouter([
    {
        path: "",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Navigate to={"home"} replace={true}></Navigate>
            },

            {
                path: "home",
                loader: handleApiData,
                element: <Home></Home>
            },
            {
                path: "home/:category",
                loader: handleApiData,
                element: <Browse></Browse>,
                children: [
                    {
                        path: ":songId",
                        element: <YoutubePlayer></YoutubePlayer>
                    }
                ]
            },
            {
                path: "home/album/:category/:singer",
                loader: handleApiData,
                element: <Browse></Browse>,
                children: [

                    {
                        path: ":songId",
                        element: <YoutubePlayer></YoutubePlayer>
                    }
                ]
            }
        ]
    }

])

export default Routes;