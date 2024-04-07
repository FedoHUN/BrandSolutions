import Header from '../Components/Header/Header';
import Heading_mobile from '../assets/Heading_mobile.png'
import Main_text from '../assets/Main_text.png'
import { useEffect, useState} from 'react';

function Home() {
  const [visible, setVisible] = useState(0)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 49 && currentScrollPos <= 150) {
      setVisible(1);
    } else if (currentScrollPos > 200) {
      setVisible(2);
    } else if (currentScrollPos < 50) {
      setVisible(0);
    }
  };

  useEffect( () => {
      window.addEventListener('scroll', handleScroll);

      return () => 
        window.removeEventListener('scroll', handleScroll);
      
  })
  /*
  const inputRef = useRef(null);
   useEffect(() => {
      const height = inputRef.current.offsetHeight;
      console.log('Input height', height);
   }, [inputRef]);
*/
  return (
    <>
      <div className='h-screen w-full bg-Mobile_bg md:hidden bg-top bg-cover bg-no-repeat pt-[80px]'>
        <Header />
        <img src={Heading_mobile} className='w-[290px] ml-12 mt-16' />
      </div>
      <div className={
        visible == 0 ? "hidden md:flex fixed top-0 items-center justify-center w-full min-h-screen max-h-screen bg-BG_image bg-center bg-no-repeat bg-cover bg-fixed duration-500 z-10 inset-x-0 mx-auto" :
        visible == 1 ? "hidden md:flex items-center justify-center w-[1450px] min-h-screen max-h-screen -top-[60%] bg-BG_image bg-center bg-no-repeat bg-cover fixed rounded-b-[60px] z-10 duration-500 inset-x-0 mx-auto" : "hidden md:flex items-center justify-center w-[1120px] min-h-screen max-h-screen -top-[93%] bg-BG_image bg-center bg-no-repeat bg-cover fixed rounded-b-[40px] z-10 duration-500 inset-x-0 mx-auto"
        }>
        <Header />
        <img src={Main_text} className={visible == 0 ? 'absolute h-[210px]' : visible == 1 ? 'absolute h-[180px] top-[700px] inset-x-0 mx-auto' :'hidden'} />
      </div>
    </>
  );
}

export default Home;