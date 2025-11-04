import { createBrowserRouter, Navigate } from "react-router";
import Root from "../layout/Root"
import Home from "../pages/home/Home";
import handleApiData from "../utilities/handleApiData";


const Routes = createBrowserRouter([
    {
        path: "",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Navigate to={"Home"}></Navigate>
            },

            {
                path: "home",
                loader: handleApiData,
                element: <Home></Home>
            }
        ]
    }

])

export default Routes;