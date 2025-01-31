import React from "react";
import Header from "../components/Header";
import Contexthome from "../components/Homelayout/Contexthome";
import TruckCarousel from "../components/TruckCarousel";
import Recommendations from "../components/Recommendations";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />

      <Contexthome />

      <TruckCarousel />

      <ContactForm />

      <Recommendations />

      <Footer />
    </div>
  );
};

export default Home;
