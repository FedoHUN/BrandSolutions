function Packages() {
  const packs = [
    {
      title: 'Balík Starter',
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
    <div className="flex flex-col gap-24 justify-center items-center bg-[#FBF6F1]">
      <div className="h-[490px]"></div>
      {packs.map((pack) =>{
        return(
        <div className={`w-full flex flex-col justify-center items-center ${pack.bg} ${pack.color}`}>
          <h2 className="font-bold text-[36px] leading-[54px] text-center my-4">{pack.title}</h2>
          <p className='text-[20px] leading-[30px] text-center w-[637px]'>{pack.description}</p>
          <p className="text-[20px] leading-[30px] text-center">od <span className="text-[36px] leading-[54px]">{pack.price}</span></p>
          <button className='bg-[#333333] px-4 py-2 rounded-3xl font-[400] leading-[19.36px] text-[16px] text-white my-8'>Objednať</button>
        </div>
      );})}
    </div>
    </>
  )
}

export default Packages