import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="fixed z-10 top-1/2 -translate-y-1/2 pl-4 gap-4 flex flex-col text-3xl text-[#C4C4C4]">
      <a className="hover:text-[#333333] cursor-pointer"><BsFacebook /></a>
      <a className="hover:text-[#333333] cursor-pointer"><BsInstagram /></a>
      <a className="hover:text-[#333333] cursor-pointer"><BsLinkedin /></a>
    </div>
  )
}

export default Sidebar;