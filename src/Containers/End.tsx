import Blue_m1 from '../assets/Blue_fm1.png'
import Blue_m2 from '../assets/Blue_fm2.png'

function End() {
  return(
    <>
      <div className="md:hidden relative flex flex-col text-left justify-center items-center text-black bg-[#FBF6F1] py-10">
        <div className="w-[296px]">
          <h1 className="text-[36px] font-[700] leading-[54px]">Vytvorme spolu<br />silný online<br /><span className="text-[#23B6B0]">Brand</span></h1>
          <p className="text-[] font-[] leading-[]">Povedzte nám svoje potreby a očakávania, my sa postaráme o zvyšok.</p>.
        </div>
        <img alt='bluedesign' src={Blue_m1} className='absolute bottom-0 left-0 h-[49.43px]' />
        <img alt='bluedesign' src={Blue_m2} className='absolute bottom-[-6px] right-0 h-[49.43px]' />
      </div>
      <div className='h-[488px] flex flex-row bg-[#FBF6F1]'>
        <div className='w-1/2 h-full flex flex-col gap-10 justify-center items-center'>
          <h1 className='w-[550px] font-bold text-[36px] leading-[54px]'>Vytvorme spolu silný <span className='text-[#23B6B0]'>online Brand</span></h1>
          <p className='w-[550px] text-[24px] leading-[36px]'>Povedzte nám svoje potreby a očakávania, my sa postaráme o zvyšok.</p>
        </div>
        <div className='w-1/2'></div>
      </div>
    </>
  )
}

export default End