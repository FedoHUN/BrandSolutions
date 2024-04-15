import Header from '../Components/Header/Header';
import Heading_mobile from '../assets/Heading_mobile.png'
import Main_text from '../assets/Main_text.png'
import Sluzby from '../assets/SLuzby.png'
import Onas_img from '../assets/O-nas.png'
import Onas_m from '../assets/O-nas_m.png'
import Sluzby_mobile from '../assets/Sluzby_mobile.png'
import { useEffect, useState} from 'react';

function Home() {
  const [visible, setVisible] = useState(0)
  const pathname = window.location.pathname;

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
      <div className='h-screen w-full bg-Mobile_bg md:hidden bg-top bg-cover bg-no-repeat pt-[80px] flex'>
        <Header />
        {pathname == '/' ? <img src={Heading_mobile} className='w-[296px] h-max ml-12 mt-16' />
        : pathname == '/Sluzby' ? <img src={Sluzby_mobile} className='w-[290px] m-auto' />
        : <img src={Onas_m} className='w-[290px] m-auto' />
      }
        
      </div>
      <div className={
        visible == 0 ? "hidden md:flex fixed top-0 items-center justify-center w-full min-h-screen max-h-screen bg-BG_image bg-center bg-no-repeat bg-cover bg-fixed duration-500 z-10 inset-x-0 mx-auto" :
        visible == 1 ? "hidden md:flex items-center justify-center w-[1450px] min-h-screen max-h-screen -top-[60%] bg-BG_image bg-center bg-no-repeat bg-cover fixed rounded-b-[60px] z-10 duration-500 inset-x-0 mx-auto XXL:-top-[70%]" : "hidden md:flex items-center justify-center w-[1120px] min-h-screen max-h-screen -top-[93%] bg-BG_image bg-center bg-no-repeat bg-cover fixed rounded-b-[40px] z-10 duration-500 inset-x-0 mx-auto XXL:-top-[95%]"
        }>
        <Header />
        {pathname == '/' ? <img src={Main_text} className={visible == 0 ? 'absolute h-[210px]' : visible == 1 ? 'absolute h-[180px] top-[70%] inset-x-0 mx-auto XXL:top-[80%]' :'hidden'} />
        : pathname == '/Sluzby' ? <img src={Sluzby} className={visible == 0 ? 'absolute h-[170px]' : visible == 1 ? 'absolute h-[140px] top-[75%] inset-x-0 mx-auto XXL:top-[80%]' :'hidden'} />
        : <img src={Onas_img} className={visible == 0 ? 'absolute h-[150px]' : visible == 1 ? 'absolute h-[120px] top-[75%] inset-x-0 mx-auto XXL:top-[80%]' :'hidden'} />
        }
      </div>
    </>
  );
}

export default Home;