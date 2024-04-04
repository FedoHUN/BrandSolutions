import navIcon from '../assets/Hamburger_nav.svg';
import BS_logo from '../assets/bs_mobile_logo.png';
import {useState} from 'react';
import Sluzby from '../assets/Služby.png'
import Onas from '../assets/O nás.png'
import Cennik from '../assets/Cenník.png'
import Kontakt from '../assets/Kontakt.png'

function Header() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      <nav className='w-full flex flex-row justify-between px-8 py-4 md:hidden text-white'>
        <img className='w-[136px] h-[51.91px]' src={BS_logo} />
        <img onClick={handleNav} src={navIcon} />
        <div onClick={handleNav} className={nav? 'w-full h-screen absolute' : 'hidden'}></div>
        <div className={nav ? 'left-0 top-0 w-[60%] h-full border-r border-r-[#c4bab0] bg-[#FBF6F1] ease-in-out duration-500 fixed z-10' : 'top-0 w-[60%] h-full ease-in-out duration-500 fixed left-[-100%] z-10' }>
        <h1 className="w-full text-2xl text-black font-bold m-4">Brand Solutions</h1>
        <ul className="uppercase p-4 text-black">
          <li className="p-4 border-b border-gray-600 hover:bg-gray-600">Služby</li>
          <li className="p-4 border-b border-gray-600 hover:bg-gray-600">O nás</li>
          <li className="p-4 border-b border-gray-600 hover:bg-gray-600">Cenník</li>
          <li className="p-4 border-gray-600 hover:bg-gray-600">Kontakt</li>
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