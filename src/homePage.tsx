import Home from './Containers/Home'
import Services from './Containers/Services'
import Footer from './Components/Footer';
import WhyUs from './Containers/WhyUs';
import Form from './Containers/End';
import Sidebar from './Components/Sidebar';

function homePage() {

  return (
    <>
      <Home />
      <Sidebar />
      <Services />
      <WhyUs />
      <Form />
      <Footer />
    </>
  )
}

export default homePage
