import Header from '../Components/Header';
import Gradient from '../assets/gradient.svg'
import Heading_mobile from '../assets/Heading_mobile.png'

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
    
      setDivHeight(${newHeight}px); // Corrected line
    };
*/
  return (
    <>
      <div className='h-screen w-full bg-Mobile_bg md:hidden'>
        <Header />
        <img src={Heading_mobile} className='w-[290px] ml-10 mt-16' />
      </div>
      <div className="hidden md:flex items-center justify-center w-full min-h-screen max-h-screen bg-[#FBF6F1]">
        <Header />
        <div
          className="w-[1120px] h-[700px] my-3 flex flex-col justify-center"
          //style={{ height: divHeight, transition: 'height 0.5s ease' }}
        >
          <img className='' src={Gradient} />
          <h1 className="leading-[77.45px] text-[64px] font-[400] ml-16 absolute text-white">Let us create the perfect<br />brand for you!</h1>
        </div>
      </div>
    </>
  );
}

export default Home;