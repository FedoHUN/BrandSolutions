function Team(){
  return (
    <>
      <div className='flex flex-col text-center justify-center items-center w-full bg-[#23B6B0]'>
        <h2 className="font-semibold text-[40px] leading-[60px] text-[#FBF6F1] mt-6 mb-8 md:mb-4">Náš tím</h2>
        <div className="flex flex-col md:flex-row justify-center items-center text-[14px] leading-[21px] gap-10">
          <div className="flex flex-col justify-center items-center w-[296px] md:w-[265px] mb-6">
            <div className="w-[147px] h-[240px] bg-[#FBF6F1] rounded-2xl"></div>
            <span className="font-semibold mt-6 md:mt-3 mb-2" >Samuel Fonfer</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare, ex ut facilisis auctor, odio risus semper nibh, ullamcorper posuere erat ligula a mi.</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[296px] md:w-[265px] mb-12 md:mb-6">
            <div className="w-[147px] h-[240px] bg-[#FBF6F1] rounded-2xl"></div>
            <span className="font-semibold mt-6 md:mt-3 mb-2" >Máté Vojtko</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare, ex ut facilisis auctor, odio risus semper nibh, ullamcorper posuere erat ligula a mi.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team;