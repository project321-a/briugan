import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { DealRoom } from './components/DealRoom';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <DealRoom />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
