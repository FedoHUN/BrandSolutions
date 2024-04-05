import navIcon from '../assets/Hamburger_nav.svg';
import BS_logo from '../assets/bs_mobile_logo.png';
import {useState} from 'react';
import Sluzby from '../assets/Služby.png'
import Onas from '../assets/O nás.png'
import Cennik from '../assets/Cenník.png'
import Kontakt from '../assets/Kontakt.png'
import { HiXMark } from "react-icons/hi2";
import Nav_logo from '../assets/Nav_logo.svg'
import IG_logo from '../assets/ig_icon.svg'
import IN_logo from '../assets/in_icon.svg'
import FB_logo from '../assets/FB_icon.svg'

function Header() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      <nav className='w-screen flex flex-row justify-between px-8 py-4 md:hidden text-white bg-Mobile_nav bg-top bg-cover bg-no-repeat  fixed top-0 z-30 rounded-b-xl shadow-[0_4px_4px_0_#00000040]'>
        <img className='w-[136px] h-[48px]' src={BS_logo} />
        {!nav ? <img onClick={handleNav} className='w-[48px]' src={navIcon} /> : <HiXMark onClick={handleNav} className='w-[48px] h-full' />}
        <div onClick={handleNav} className={nav? 'w-full h-screen absolute' : 'hidden'}></div>
        <div className={nav ? 'left-0 top-0 w-[60%] h-full border-r border-r-[#2c2c2c] bg-[#333333] ease-in-out duration-500 fixed z-30' : 'top-0 w-[60%] h-full ease-in-out duration-500 fixed left-[-100%] z-[]' }>
        <img src={Nav_logo} className='p-6'/>
        <ul className="uppercase p-4 text-[#FBF6F1] text-[32px] leading-[48px] font-[600]">
          <li className="py-4 border-b border-[#23B6B0] hover:bg-gray-600 hover:rounded-xl">Služby</li>
          <li className="py-4 border-b border-[#23B6B0] hover:bg-gray-600 hover:rounded-xl">O nás</li>
          <li className="py-4 border-b border-[#23B6B0] hover:bg-gray-600 hover:rounded-xl">Cenník</li>
          <li className="py-4 border-b border-[#23B6B0] hover:bg-gray-600 hover:rounded-xl">Kontakt</li>
          <li className="py-4 hover:bg-gray-600 hover:rounded-xl">Socials</li>
          <div className='flex flex-row gap-2'>
            <img className='hover:bg-[#404949] rounded-full '  src={IN_logo} />
            <img className='hover:bg-[#404949] rounded-full '  src={IG_logo} />
            <img className='hover:bg-[#404949] rounded-full '  src={FB_logo} />
          </div>
        </ul>
        
      </div>
      </nav>
       <nav className="hidden md:fixed z-20 top-0 start-0 w-full text-black md:flex justify-center">
          <div className="flex flex-row items-center justify-center font-[400] text-[32px] leading-[38.73px] text-[#FBF6F1] gap-20 w-[1120px] h-[62px] pt-4">
            <a className="cursor-pointer"><img className='h-[48px]' src={Sluzby}/></a>
            <a className="cursor-pointer"><img className='h-[48px]' src={Onas}/></a>
            <a className="cursor-pointer"><img className='h-[48px]' src={Cennik}/></a>
            <a className="cursor-pointer"><img className='h-[48px]' src={Kontakt}/></a>
          </div>

       </nav>
    </>
  )
}

export default Header