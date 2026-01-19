import { createBrowserRouter, Navigate } from "react-router";
import Root from "../layout/Root"
import Home from "../pages/home/Home";
import handleApiData from "../utilities/handleApiData";
import Browse from "../pages/browser/Browse";
import YoutubePlayer from "../components/youtubePlayer/YoutubePlayer";
import SignUpForm from "../pages/signUp/SignUpForm";
import SignIn from "../pages/signIn/SignIn";
import RecoverAcc from "../pages/recoverAccount/RecoverAcc";
import Dashboard from "../pages/dashboard/Dashboard";
import SaveList from "../components/saveList/SaveList";
import UpdateInfo from "../components/updateInfoForm/UpdateInfo";
import UpdateDataForm from "../components/updateInfoForm/UpdateDataForm";
import ResetPassForm from "../components/updateInfoForm/ResetPassForm";




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
                path: "signUp",
                element: <SignUpForm></SignUpForm>
            },
            {
                path: "signIn",
                element: <SignIn></SignIn>
            },
            {
                path: "recovery",
                element: <RecoverAcc></RecoverAcc>
            },
            {
                path: "dashboard",
                element: <Dashboard></Dashboard>,
                children: [

                    {
                        index: true,
                        element: <Navigate to={"favorite"} replace={true} ></Navigate >
                    },
                    {
                        path: "favorite",
                        element: <SaveList></SaveList>
                    },
                    {
                        path: "info",
                        element: <UpdateInfo></UpdateInfo>,
                        children: [
                            {
                                index: true,
                                element: <Navigate to={"user"} replace={true} ></Navigate >
                            },
                            {
                                path: "user",
                                element: <UpdateDataForm></UpdateDataForm>
                            },
                            {
                                path: "reset",
                                element: <ResetPassForm></ResetPassForm>
                            }
                        ]
                    }]
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