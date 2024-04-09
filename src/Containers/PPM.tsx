import B1 from '../assets/Sluzby_b1.svg'
import B2 from '../assets/Sluzby_b2.svg'
import M1 from '../assets/Sluzby_m1.png'
import M2 from '../assets/Sluzby_m2.png'
import M3 from '../assets/Sluzby_m3.png'

function PPM(){
  return (
    <>
    <div className='relative flex flex-col text-center justify-center items-center w-full gap-8 bg-[#FBF6F1] pb-8'>
      <div className="md:h-[480px]"></div>
      <h2 className='text-[#23B6B0] font-bold text-[40px] leading-[60px]'>Prečo práve my?</h2>
      <p className='text-[20px] leading-[30px] w-[296px] lg:w-[1120px]'><span className='font-bold'>Naša práca</span> nie je len o grafickom dizajne; je to o vytváraní vizuálneho jazyka, ktorý hovorí <span className='font-semibold'>príbeh vašej značky.</span> Sledujeme najnovšie <span className='font-semibold'>trendy a technológie</span>, aby sme vám mohli ponúknuť <span className='font-semibold'>kreatívne riešenia</span>, ktoré odlišia vašu značku od konkurencie.</p>
      <p className='text-[20px] leading-[30px] w-[296px] lg:w-[1120px]'><span className='font-bold'>Komplexné služby:</span> Od <span className='font-semibold'>loga</span> po kompletnú vizuálnu identitu a od webdizajnu po jeho technické zrealizovanie – ponúkame všetko, čo potrebujete pre <span className='font-semibold'>úspešný online aj offline vzhľad vašej firmy</span>. Náš multidisciplinárny tím zabezpečí, že každý aspekt vašej značky bude pôsobiť koherentne a profesionálne.</p>
      <p className='text-[20px] leading-[30px] w-[296px] lg:w-[1120px]'><span className='font-bold'>Vaša spokojnosť</span> je pre nás na prvom mieste. Sme tu pre vás na každom kroku cesty, poskytujeme <span className='font-bold'>pravidelné aktualizácie</span> a sme otvorení vašej spätnej väzbe, aby sme zabezpečili, že konečný výsledok presne splní <span className='font-semibold'>vaše očakávania</span>.</p>
      <img src={B2} className='hidden md:flex absolute right-0 top-[780px]' />
      <img src={B1} className='hidden md:flex absolute left-0 top-[550px]' />
      <img src={M1} className='md:hidden absolute left-0 top-[240px]'/>
      <img src={M2} className='md:hidden absolute right-0 top-[600px]'/>
      <img src={M3} className='md:hidden absolute left-0 top-[1000px]'/>
      <button className='bg-[#333333] px-4 py-2 rounded-xl font-[400] leading-[19.36px] text-[16px] text-white mb-2 w-max shadow-[0_4px_4px_0_#00000040]'>Objednať</button>
    </div>
    </>
  )
}

export default PPM;