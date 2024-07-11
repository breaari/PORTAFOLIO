import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export const Left = () => {
    return (
        <div className="bg-azuloscuro text-blanco absolute left-0 top-[25%] rounded-tr-md rounded-br-md px-3 py-5 text-3xl mq980:text-2xl">
            <a href="https://wa.me/5491136002250" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="mb-2" />
            </a>
            <a href="https://github.com/breaari" target="_blank" rel="noopener noreferrer">
                <FaGithub className="my-2"/>
            </a>
            <a href="https://www.linkedin.com/in/ariana-brea" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="my-2"/>
            </a>
            <a href="mailto:aru.brea@gmail.com" target="_blank" rel="noopener noreferrer">
                <MdOutlineMailOutline className="mt-2"/>
            </a>
        </div>
    )
}