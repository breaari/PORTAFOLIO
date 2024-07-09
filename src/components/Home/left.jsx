import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export const Left = () => {
    return (
        <div className="bg-azuloscuro text-blanco absolute left-0 top-[50%] rounded-tr-md rounded-br-md px-3 py-5 text-[25px] space-y-2">
            <FaWhatsapp />
            <FaGithub />
            <FaLinkedinIn />
            <MdOutlineMailOutline />
        </div>
    )
}