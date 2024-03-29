import navIcon from '../assets/Hamburger_nav.svg'
import BS_logo from '../assets/bs_mobile_logo.png'

function Header() {

  return (
    <>
      <nav className='w-full flex flex-row justify-between px-8 py-4 md:hidden'>
        <img className='w-[136px] h-[51.91px]' src={BS_logo} />
        <img src={navIcon} />
      </nav>
       <nav className="hidden md:fixed z-20 top-0 start-0 w-full text-black md:flex justify-center">
          <div className="flex flex-row items-center justify-center font-[400] text-[32px] leading-[38.73px] text-[#FBF6F1] gap-20 bg-BG_image w-[1120px] h-[62px]">
            <a className="hover:text-[#093533] cursor-pointer">Sluzby</a>
            <a className="hover:text-[#093533] cursor-pointer">O nas</a>
            <a className="hover:text-[#093533] cursor-pointer">Kontakt</a>
            <a className="hover:text-[#093533] cursor-pointer">Cennik</a>
          </div>

       </nav>
    </>
  )
}

export default Header