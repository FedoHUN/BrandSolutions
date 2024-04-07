import Vector1 from '../assets/Blue_vector.svg'
import Vector2 from '../assets/Blue_vector1.svg'
import Blue_m1 from '../assets/Blue_m1.svg'
import Blue_m2 from '../assets/Blue_m2.svg'
import Blue_m3 from '../assets/Blue_m3.svg'

function Services() {
  const packs = [{
    name: 'Balík starter',
    price: '99',
    description: 'Balík starter obsahuje: grafický návrh webovej stránky Vytvoreie webovej stránky'
  },
  {
    name: 'Balík starter +',
    price: '194',
    description: 'Balík starter + obsahuje: grafický návrh webovej stránky Vytvoreie webovej stránky nastavenie seo/design manuál'
  },
  {
    name: 'Balík pro',
    price: '199',
    description: 'Balík pro obsahuje: Kompletné vytvorenie vyrtuálnej identity'
  },
]

  return (
    <>
      <div className='bg-[#FBF6F1] flex flex-col items-center justify-start py-12 gap-12 md:hidden'>
        <img className='absolute top-[1000px] left-[0]' src={Blue_m1} />
        <img className='absolute top-[1350px] right-[0]' src={Blue_m2} />
        <img className='absolute top-[1800px] left-[0]' src={Blue_m3} />
      {packs.map ((pack) => {
          return(
            <div className='text-black w-[265px] h-[352px] rounded-xl border border-[#33B4AF] flex flex-col gap-2 justify-between items-center text-center px-4 shadow-[0_4px_4px_0_#00000040]'>
              <span className='font-[700] leading-[30px] text-[20px] mt-8'>{pack.name}</span>
              <h3 className='font-[400] leading-[54px] text-[36px]'>{pack.price}€</h3>
              <p className='font-[400] leading-[24px] text-[16px]'>{pack.description}</p>
              <button className='bg-[#333333] px-4 py-2 rounded-xl font-[700] leading-[24px] text-[16px] text-white my-4'>Objednať</button>
            </div>
          );
        })}
      </div>
      <div className='hidden md:flex flex-col bg-[#FBF6F1]'>
        <div className='w-full h-[490px] flex flex-col justify-end pb-6'>
          <h2 className='text-7xl font-semibold text-[#23B6B0] text-center'>Naše služby</h2>
        </div>
        <div className='w-full h-full max-h-screen flex flex-row justify-center gap-40 pt-20 pb-32'>
          {packs.map ((pack) => {
            return(
              <div className='text-black w-[262.5px] h-[352px] rounded-xl border border-[#33B4AF] flex flex-col gap-3 justify-between items-center text-center px-4 py-4 shadow-[0_4px_4px_0_#00000040]'>
                <span className='font-[400] leading-[24.2px] text-[20px] mt-10'>{pack.name}</span>
                <h3 className='font-[400] leading-[43.57px] text-[36px]'>{pack.price}€</h3>
                <p className='font-[400] leading-[19.36px] text-[16px]'>{pack.description}</p>
                <button className='bg-[#333333] px-4 py-2 rounded-xl font-[400] leading-[19.36px] text-[16px] text-white my-4'>Objednať</button>
              </div>
            );
          })}
          <img className='absolute right-0 mt-52' src={Vector1} />
          <img className='absolute left-0' src={Vector2} />
        </div>
      </div>
    </>
  )
}

export default Services