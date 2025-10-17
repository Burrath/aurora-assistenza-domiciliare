import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ElderlyCare } from "./components/ElderlyCare";
import { Ambulance } from "./components/Ambulance";
import { Patronato } from "./components/Patronato";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ElderlyCare />
      <Ambulance />
      <Patronato />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
