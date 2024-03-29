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
      <div className="hidden md:visible w-full h-[489px] bg-[#f3dbc3]">
        <div className="bg-[#23B6B0] w-[710px] h-[489px] flex flex-col justify-around items-center">
          <h2 className='text-white font-[400] leading-[38.73px] text-[32px] mt-10 text-center'>Prečo práve my?</h2>
          <button className='bg-[#333333] px-4 py-2 rounded-xl font-[400] leading-[19.36px] text-[16px] text-white my-4 w-max'>Objednať</button>
        </div>
      </div>
    </>
  )
}

export default WhyUs