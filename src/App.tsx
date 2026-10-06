import { CountdownBar } from "./components/CountdownBar";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MaisProdutos } from "./components/MaisProdutos";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Sponsors } from "./components/Sponsors";
import "./App.css";

function App() {
  return (
    <>
      <CountdownBar />
      <Navbar />
      <Hero />
      <Sponsors />
      <Features />
      <Cta />
      <Pricing />
      <MaisProdutos />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
