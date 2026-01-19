import { Outlet } from "react-router";



const UpdateInfoForm = () => {



    return (
        <div className="h-full flex flex-col">
            <h1 className="text-center text-3xl font-bold text-primaryText">Personal Area</h1>
            <Outlet></Outlet>
        </div >

    );
};

export default UpdateInfoForm;