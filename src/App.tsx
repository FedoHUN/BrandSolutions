import Home from './Containers/Home'
import Services from './Containers/Services'
import Footer from './Components/Footer';
import WhyUs from './Containers/WhyUs';
import Form from './Containers/End';
import Sidebar from './Components/Sidebar';

function App() {

  return (
    <>
      <Sidebar />
      <Home />
      <Services />
      <WhyUs />
      <Form />
      <Footer />
    </>
  )
}

export default App
