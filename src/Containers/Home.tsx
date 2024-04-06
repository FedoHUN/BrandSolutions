import Header from '../Components/Header/Header';
import Heading_mobile from '../assets/Heading_mobile.png'
import Main_text from '../assets/Main_text.png'

function Home() {
  // State to hold the dynamic height of the div
  //const [divHeight, setDivHeight] = useState('900px');
  /*
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the new height based on the scroll position
      const windowHeight = window.innerHeight;
      const scrolledHeight = window.scrollY;
      const newHeight = Math.max(100, 900 - scrolledHeight * (800 / (windowHeight / 2)));
    
      setDivHeight(${newHeight}px); // Corrected line
    };
*/
  return (
    <>
      <div className='h-screen w-full bg-Mobile_bg md:hidden bg-top bg-cover bg-no-repeat pt-[80px]'>
        <Header />
        <img src={Heading_mobile} className='w-[290px] ml-12 mt-16' />
      </div>
      <div className="hidden md:flex items-center justify-center w-full min-h-screen max-h-screen bg-BG_image bg-center bg-no-repeat bg-fixed bg-cover">
        <Header />
        <img src={Main_text} className='absolute h-[210px] left-[255px]' />
      </div>
    </>
  );
}

export default Home;