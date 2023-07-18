import Navbar from "./components/navbar";
import Hero from "./components/hero";
import LinkInput from "./components/linkInput";
import Info from "./components/info";
import CTA from "./components/cta";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Hero />
      <LinkInput />
      <Info />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
