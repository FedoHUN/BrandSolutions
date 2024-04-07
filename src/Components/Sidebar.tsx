import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="fixed z-10 top-1/2 -translate-y-1/2 pl-1.5 md:pl-4 md:gap-8 gap-4 flex flex-col text-xl md:text-3xl text-[#C4C4C4]">
      <a className="hover:text-[#333333] transition-colors duration-400 cursor-pointer"><BsFacebook /></a>
      <a className="hover:text-[#333333] transition-colors duration-400 cursor-pointer"><BsInstagram /></a>
      <a className="hover:text-[#333333] transition-colors duration-400 cursor-pointer"><BsLinkedin /></a>
    </div>
  )
}

export default Sidebar;