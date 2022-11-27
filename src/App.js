import Navbar from "./components/navbar";
import Hero from "./components/hero";
import URLform from "./components/url-form";
import Info from "./components/info";
import CTA from "./components/cta";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <URLform />
      <Info />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
