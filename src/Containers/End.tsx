import Blue_m1 from '../assets/Blue_fm1.svg'
import Blue_m2 from '../assets/Blue_fm2.svg'

function End() {
  return(
    <>
      <div className="md:hidden relative flex flex-col text-left justify-center items-center text-black bg-[#FBF6F1] py-10">
        <div className="w-[296px]">
          <h1 className="text-[36px] font-[700] leading-[54px]">Vytvorme spolu<br />silný online<br /><span className="text-[#23B6B0]">Brand</span></h1>
          <p className="text-[] font-[] leading-[]">Povedzte nám svoje potreby a očakávania, my sa postaráme o zvyšok.</p>.
        </div>
        <img alt='bluedesign' src={Blue_m1} className='absolute bottom-0 left-0' />
        <img alt='bluedesign' src={Blue_m2} className='absolute bottom-[-8px] right-0' />
      </div>
    </>
  )
}

export default End