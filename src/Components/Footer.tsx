import BS_logo from '../assets/BS_Logo.png'
import Logo_mobile from '../assets/BS_footer_mobile.png'
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return(
    <>
      <div className='md:hidden bg-[#333333] flex flex-col justify-evenly items-center text-[#FBF6F1] text-center h-[267px]'>
        <img className='h-[29px] mt-4' alt="BrandSolutions" src={Logo_mobile}/>
        <div>
          <span className='leading-[30px] text-[20px] font-[700]'>Kontakt<br /></span>
          <span className='leading-[17px] text-[14px] font-[400]'>+421 917 280 069<br /> info@brandsolutions.sk</span>
        </div>
        <div className='flex flex-col text-center items-center justify-center gap-1'>
          <span className='leading-[36px] text-[24px] font-[700]'>socials</span>
            <div className='flex flex-row justify-center items-center gap-4 text-3xl text-[#23B6B0]'>
                <BsFacebook />
                <BsLinkedin />
                <BsInstagram />
            </div>
        </div>
      </div>
      <div className="hidden w-full bg-[#333333] h-[244px] md:flex flex-row justify-evenly items-center text-white">
        <img className='h-[77px] w-[265px]' src={BS_logo}/>
        <div className='flex flex-col text-center items-center justify-center pr-36'>
          <h3 className='text-[24px] leading-[29.05px] font-[400]'>Kontakt</h3>
          <span className='text-[16px] leading-[19.36px] font-[400]'>+421 917 280 069</span>
          <span className='text-[16px] leading-[19.36px] font-[400]'>info@brandsolutions.sk</span>
        </div>
        <div className='flex flex-col text-center items-center justify-center gap-2'>
          <h3 className='text-[24px] leading-[29.05px] font-[400]'>Socials</h3>
          <div className='flex flex-row gap-3  text-3xl text-[#23B6B0]'>
            <BsFacebook className='cursor-pointer' />
            <BsLinkedin className='cursor-pointer' />
            <BsInstagram className='cursor-pointer' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer