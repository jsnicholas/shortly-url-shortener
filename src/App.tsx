import Navbar from "./components/navbar";
import Hero from "./components/hero";
import URLform from "./components/url-form";
import ShortenedCard from "./components/shortened-section";
import Info from "./components/info";
import CTA from "./components/cta";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Hero />
      <URLform />
      <ShortenedCard />
      <Info />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
