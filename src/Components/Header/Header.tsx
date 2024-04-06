import navIcon from '../../assets/Hamburger_nav.svg';
import BS_logo from '../../assets/bs_mobile_logo.png';
import {useState, useEffect} from 'react';
import { HiXMark } from "react-icons/hi2";
import Nav_logo from '../../assets/Nav_logo.svg'
import IG_logo from '../../assets/ig_icon.svg'
import IN_logo from '../../assets/in_icon.svg'
import FB_logo from '../../assets/FB_icon.svg'
import './Header.css'

function Header() {
  const [nav, setNav] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)
  const [pc_nav, setpc_nav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > prevScrollPos){
        setVisible(false)
    }else{
        setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
    return(
      console.log(currentScrollPos)
    )
  }

  const handleScroll_pc = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > 875){
        setpc_nav(true)
    }else{
        setpc_nav(false)
    }

    setPrevScrollPos(currentScrollPos)
  }

  useEffect( () => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('scroll', handleScroll_pc);

      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('scroll', handleScroll_pc)
      }
  })

  return (
    <>
      <nav className={visible ? 'w-screen flex flex-row justify-between px-8 py-1 md:hidden text-white bg-Mobile_nav bg-top bg-cover bg-no-repeat z-30 rounded-b-3xl fixed top-0 duration-100' : 'w-screen flex flex-row justify-between px-8 py-1 md:hidden text-white bg-Mobile_nav bg-top bg-cover bg-no-repeat z-30 rounded-b-3xl fixed -top-[60px] duration-100'} >
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
       <nav className={!pc_nav ? "hidden md:fixed z-20 top-0 start-0 w-full text-black md:flex justify-center" : "hidden md:fixed z-20 top-0 start-0 w-full text-black md:flex justify-center bg-Nav_bg bg-no-repeat bg-bottom bg-cover"}>
          <div className="flex flex-row items-center justify-center font-[400] text-[32px] leading-[38.73px] text-[#FBF6F1] gap-20 w-[1120px] h-[62px] py-4">
            <a className="cursor-pointer navText">Služby</a>
            <a className="cursor-pointer navText">Kontakt</a>
            <a className="cursor-pointer navText">Cenník</a>
            <a className="cursor-pointer navText">O nás</a>
          </div>

       </nav>
    </>
  )
}

export default Header