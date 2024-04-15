import B1 from '../assets/Sluzby_b1.svg'
import B2 from '../assets/Sluzby_b2.svg'
import B3 from '../assets/Sluzby_b3.svg'
import B4 from '../assets/Sluzby_b4.svg'
import M1 from '../assets/Sluzby_m1.png'
import M2 from '../assets/Sluzby_m2.png'
import M3 from '../assets/Sluzby_m3.png'

function Packages() {
  const packs = [
    {
      title: 'Balík STARTER',
      description: 'Balík starter obsahuje grafický návrh webovej stránky na základe vaších požiadaviek a následné prevedenie grafického vizuálu do funkčnej podoby webovej stránky. V cene sú zahrnuté 3 konzultácie',
      price: "99€"
    },
    {
      title: 'Balík STARTER +',
      description: 'Balík Starter + obsahuje grafický návrh webovej stránky na základe vaších požiadaviek a následné prevedenie grafického vizuálu do funkčnej podoby webovej stránky. Oproti balíku starter je v cene zahrnutá možnosť vytvorenia design manuálu alebo nastavenie seo oprimálizacie pre váš web. V cene je zahrnutých 5 konzultácií',
      price: "149€",
      bg: "bg-[#23B6B0]",
      color: 'text-[#FBF6F1]'
    },
    {
      title: 'Balík Pro',
      description: 'Balík Pro obsahuje grafický návrh webovej stránky na základe vaších požiadaviek, design manuálu, prevedenie grafického vizuálu do funkčnej podoby webovej stránky, nastavenie seo optimalizácie . Balík Pro je vhodný pre ľudí, ktorí chcú aby ich firma bola viditeľná naprieš online svtetom. V cene je zahrnutých 10 konzultácií',
      price: "199€"
    },
  ]

  return(
    <>
    <div className="relative flex flex-col gap-6 md:gap-24 justify-center items-center bg-[#FBF6F1]">
      <div className="md:h-[480px]"></div>
      <img src={B2} className='hidden md:flex absolute right-0 top-[750px]' />
      <img src={B3} className='hidden md:flex absolute left-0 top-[1600px]' />
      <img src={B4} className='hidden md:flex absolute right-0 top-[1750px]' />
      <img src={B1} className='hidden md:flex absolute left-0 top-[600px]' />
      <img src={M1} className='md:hidden absolute left-0 top-[260px]'/>
      <img src={M2} className='md:hidden absolute right-0 top-[1470px]'/>
      <img src={M3} className='md:hidden absolute left-0 top-[1800px]'/>
      {packs.map((pack) =>{
        return(
        <div className={`w-full flex flex-col justify-center items-center pt-4 ${pack.bg} ${pack.color}`}>
          <h2 className="font-bold text-[36px] leading-[54px] text-center my-6">{pack.title}</h2>
          <p className='text-[20px] leading-[30px] text-center w-[295px] md:w-[637px]'>{pack.description}</p>
          <p className="text-[20px] leading-[30px] text-center">od <span className="text-[36px] leading-[54px]">{pack.price}</span></p>
          <button className='bg-[#333333] px-4 py-2 rounded-3xl font-[400] leading-[19.36px] text-[16px] text-white my-10 md:my-8'>Objednať</button>
        </div>
      );})}
    </div>
    </>
  )
}

export default Packages