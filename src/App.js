import Header from './components/Header';
import Contexthome from './components/Homelayout/Contexthome';
import TruckCarousel from './components/TruckCarousel/index';
import Recommendations from './components/Recommendations';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header  />

      <section
        id="inicio"
        className="pt-24 pb-20 bg-cover bg-center relative"
      >
        <div className="absolute inset-0 -z-10 h-full w-full  bg-white bg-gradient-to-r from-[#0f172a]  to-[#334155]"></div>
        <Contexthome />
      </section>

      <section id="productos" className="pt-24 pb-20   bg-gray-500">
        <TruckCarousel />
      </section>

      <section id="sobreNosotros" className="pt-24 pb-20 g-white bg-gradient-to-r from-[#0f172a]  to-[#334155]">
        <ContactForm />
      </section>

      <section id="Recommendations" className="pt-24 pb-20 g-white  bg-gray-500">
        <Recommendations />
      </section>

      <Footer className="bg-blue-800 text-white" />
    </div>
  );
}

export default App;
