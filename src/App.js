import "./App.css";
import CTA from "./components/CTA";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Feature />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
