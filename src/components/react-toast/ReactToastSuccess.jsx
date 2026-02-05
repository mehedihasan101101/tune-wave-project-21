import { toast } from 'react-toastify';
import { FaCheckCircle } from "react-icons/fa";

const ReactToastSuccess = () => {
    toast(
        <div className=" flex items-center justify-between gap-3">
            <FaCheckCircle className="text-4xl text-primaryText"></FaCheckCircle>
            <h1 className="text-white">Track  saved! Access it in your Library in Dashboard.</h1>
        </div>,
        {
            className:
                " bg-mainBg/90",
            hideProgressBar: false,
            progressClassName: "bg-primaryText"
        }
    );
};

export default ReactToastSuccess;