import { createBrowserRouter, Navigate } from "react-router";
import Root from "../layout/Root"
import Home from "../pages/home/Home";


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
                element: <Home></Home>
            }
        ]
    }

])

export default Routes;