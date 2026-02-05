import { toast } from 'react-toastify';
import { IoWarningOutline } from "react-icons/io5";

const ReactToast = () => {
     toast(
        <div className=" flex items-center justify-between gap-3">
            <IoWarningOutline className="text-3xl text-primaryText"></IoWarningOutline>
            <h1 className="text-white">Please sign in to add items to your favorites.</h1>
        </div>,
        {
            className:
                " bg-mainBg/90",
            hideProgressBar: false,
            progressClassName: "bg-primaryText"
        }
    );
};

export default ReactToast;