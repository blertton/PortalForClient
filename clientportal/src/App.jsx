import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import FAQ from "./components/faq";
import Features from "./components/features";
import Pricing from "./components/pricing";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
