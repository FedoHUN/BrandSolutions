import PPM_img from '../assets/PPM_image.png'

function WhyUs(){
  return(
    <>
      <div className="w-full h-[489px] flex md:hidden flex-col justify-evenly items-center bg-[#23B6B0] px-8">
        <h1 className="leading-[48px] font-[700] text-center text-white text-[32px] ">Prečo práve my?</h1>
        <p className="leading-[21px] font-[400] text-justify text-white text-[14px] "><span className="font-bold inline-block ml-6"> Naša práca</span> nie je len o grafickom dizajne; je to o vytváraní vizuálneho jazyka, ktorý hovorí príbeh vašej značky. Sledujeme najnovšie trendy a technológie, aby sme vám mohli ponúknuť <span className="font-bold">kreatívne riešenia</span>, ktoré odlišia vašu značku od konkurencie.
        </p>
        <p className="leading-[21px] font-[400] text-justify text-white text-[14px] "><span className="font-bold inline-block ml-6">Vaša spokojnosť</span> je pre nás na prvom mieste. Sme tu pre vás na každom kroku cesty, poskytujeme <span className="font-bold">pravidelné aktualizácie</span> a sme otvorení vašej spätnej väzbe, aby sme zabezpečili, že konečný výsledok presne splní vaše očakávania.
        </p>
        <button className='bg-[#333333] px-4 py-2 rounded-xl font-[400] leading-[19.36px] text-[16px] text-white my-4 w-max'>Objednať</button>
      </div>
      <div className="hidden md:flex justify-between w-full bg-[#f3dbc3]">
        <div className="bg-[#23B6B0] w-1/2 flex flex-col justify-center gap-12 items-center">
          <h2 className='text-white font-[700] leading-[48px] text-[32px] mt-10 text-center'>Prečo práve my?</h2>
          <p className="max-w-xl leading-[23px] font-[400] text-justify text-white text-[20px] "><span className="font-bold inline-block ml-6"> Naša práca</span> nie je len o grafickom dizajne; je to o vytváraní vizuálneho jazyka, ktorý hovorí príbeh vašej značky. Sledujeme najnovšie trendy a technológie, aby sme vám mohli ponúknuť <span className="font-bold">kreatívne riešenia</span>, ktoré odlišia vašu značku od konkurencie.
          </p>
          <p className="max-w-xl leading-[23px] font-[400] text-justify text-white text-[18px] "><span className="font-bold inline-block ml-6">Vaša spokojnosť</span> je pre nás na prvom mieste. Sme tu pre vás na každom kroku cesty, poskytujeme <span className="font-bold">pravidelné aktualizácie</span> a sme otvorení vašej spätnej väzbe, aby sme zabezpečili, že konečný výsledok presne splní vaše očakávania.
          </p>
          <button className='bg-[#333333] px-4 py-2 rounded-xl font-[400] leading-[19.36px] text-[16px] text-white my-4 w-max shadow-[0_4px_4px_0_#00000040]'>Objednať</button>
        </div>
        <img className='w-1/2' src={PPM_img} />
      </div>
    </>
  )
}

export default WhyUs