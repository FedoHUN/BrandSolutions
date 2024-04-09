import navIcon from '../../assets/Hamburger_nav.svg';
import BS_logo from '../../assets/bs_mobile_logo.png';
import {useState} from 'react';
import { HiXMark } from "react-icons/hi2";
import Nav_logo from '../../assets/Nav_logo.svg'
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import './Header.css'
import { NavLink } from 'react-router-dom';

function Header() {
  const subPages = [
    {
      text: 'Domov',
      path: '/',
    },
    {
      text: 'Služby',
      path: '/Sluzby',
    },
    {
      text: 'O nás',
      path: '/O-nas',
    },
    {
      text: 'Kontakt',
      path: '/Kontakt',
    },
  ]
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      <nav className='w-screen flex flex-row justify-between px-8 py-1 md:hidden text-white bg-Mobile_nav bg-top bg-cover bg-no-repeat z-30 rounded-b-3xl fixed top-0 duration-100'>
        <img className='w-[136px] h-[48px]' src={BS_logo} />
        {!nav ? <img onClick={handleNav} className='w-[48px]' src={navIcon} /> : <HiXMark onClick={handleNav} className='w-[48px] h-full' />}
        <div onClick={handleNav} className={nav? 'w-full h-screen absolute' : 'hidden'}></div>
        <div className={nav ? 'left-0 top-0 w-[60%] h-full border-r border-r-[#2c2c2c] bg-[#333333] ease-in-out duration-500 fixed z-30' : 'top-0 w-[60%] h-full ease-in-out duration-500 fixed left-[-100%] z-[]' }>
        <img src={Nav_logo} className='p-6'/>
        <div className="p-4 text-[#FBF6F1] text-[32px] leading-[48px] font-[600] flex flex-col">
          {subPages.map((subPage) => (
              <NavLink key={subPage.path} to={`${subPage.path}`}
              className={({isActive}) => {
                return isActive ? "py-4 border-b border-[#23B6B0] hover:bg-gray-600 hover:rounded-xl" : "py-4 border-b border-[#23B6B0] hover:bg-gray-600 hover:rounded-xl"
              }}>
                {subPage.text}
              </NavLink>
            ))}
            <span className="py-4 hover:bg-gray-600 hover:rounded-xl">Socials</span>
            <div className='flex flex-row gap-5 text-[#23B6B0]'>
            <BsLinkedin />
            <BsInstagram />
            <BsFacebook />
          </div>
        </div>
      </div>
      </nav>
       <nav className="hidden md:fixed z-20 top-0 start-0 w-full text-black md:flex justify-center">
          <div className="flex flex-row items-center justify-center font-[400] text-[32px] leading-[38.73px] text-[#FBF6F1] gap-20 w-[1120px] h-[62px] py-4">
            {subPages.map((subPage) => (
              <NavLink key={subPage.path} to={`${subPage.path}`}
              className={({isActive}) => {
                return isActive ? 'navActive cursor-pointer' : 'navText cursor-pointer'
              }}>
                {subPage.text}
              </NavLink>
            ))}
          </div>

       </nav>
    </>
  )
}

export default Header