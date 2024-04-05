import Blue_m1 from '../assets/Blue_fm1.png'
import Blue_m2 from '../assets/Blue_fm2.png'

function End() {
  return(
    <>
      <div className="md:hidden relative flex flex-col text-left justify-center items-center text-black bg-[#FBF6F1] pt-10 pb-4">
        <div className="w-[296px]">
          <h1 className="text-[36px] font-[700] leading-[54px]">Vytvorme spolu<br />silný online<br /><span className="text-[#23B6B0]">Brand</span></h1>
          <p className="text-[] font-[] leading-[]">Povedzte nám svoje potreby a očakávania, my sa postaráme o zvyšok.</p>
          <form className='pt-6 flex flex-col justify-center w-full h-full items-center ' action="https://formsubmit.co/Info@brandsolutions.sk" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://brandsolutions.sk/" />
            <input type="hidden" name="_subject" value="New submission!" />
            <div className='w-[296px]'>
              <div className='py-2 flex flex-col justify-center items-start '>
                <h2 className='text-[16px] leading-[24px] font-bold pl-1'>email <span className='font-[400]'>(povinné)</span></h2>
                <input className='w-full bg-[#FBF6F1] border border-[#333333] rounded-xl p-2' name='email' type='email' required/>
              </div>
              <div className='py-2 flex flex-col justify-center items-start '>
                <h2 className='text-[16px] leading-[24px] font-bold pl-1'>správa <span className='font-[400]'>(povinné)</span></h2>
                <textarea className='w-full bg-[#FBF6F1] border border-[#333333] rounded-xl p-2' rows={3} name='message' required/>
              </div>
            </div>
            <button type='submit' className='bg-[#333333] px-4 py-2 rounded-xl font-[700] leading-[19.36px] text-[16px] text-white my-4 w-max shadow-[0_4px_4px_0_#00000040]'>Odoslať</button>
          </form>
        </div>
        <img alt='bluedesign' src={Blue_m1} className='absolute bottom-0 left-0 h-[49.43px]' />
        <img alt='bluedesign' src={Blue_m2} className='absolute bottom-[-6px] right-0 h-[49.43px]' />
      </div>
      <div className='hidden h-[488px] md:flex flex-row justify-center bg-[#FBF6F1]'>
        <div className='w-1/2 h-full flex flex-col gap-10 justify-center items-center ml-6'>
          <h1 className='w-[550px] font-bold text-[36px] leading-[54px]'>Vytvorme spolu silný <span className='text-[#23B6B0]'>online Brand</span></h1>
          <p className='w-[550px] text-[24px] leading-[36px]'>Povedzte nám svoje potreby a očakávania, my sa postaráme o zvyšok.</p>
        </div>
        <div className='w-1/2 text-center h-full mr-6'>
          <form className='flex flex-col justify-center w-full h-full items-center ' action="https://formsubmit.co/Info@brandsolutions.sk" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://brandsolutions.sk/" />
            <input type="hidden" name="_subject" value="New submission!" />
            <div className='min-w-[493px]'>
              <div className='p-4 flex flex-col justify-center items-start '>
                <h2 className='text-[16px] leading-[24px] font-bold pl-1'>email <span className='font-[400]'>(povinné)</span></h2>
                <input className='w-full bg-[#FBF6F1] border border-[#333333] rounded-xl p-2' name='email' type='email' required/>
              </div>
              <div className='p-4 flex flex-col justify-center items-start '>
                <h2 className='text-[16px] leading-[24px] font-bold pl-1'>správa <span className='font-[400]'>(povinné)</span></h2>
                <textarea className='w-full bg-[#FBF6F1] border border-[#333333] rounded-xl p-2' rows={3} name='message' required/>
              </div>
            </div>
            <button type='submit' className='bg-[#333333] px-4 py-2 rounded-xl font-[700] leading-[19.36px] text-[16px] text-white my-4 w-max shadow-[0_4px_4px_0_#00000040]'>Odoslať</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default End