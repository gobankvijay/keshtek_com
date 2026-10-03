import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProofStrip from './components/ProofStrip.jsx';
import Services from './components/Services.jsx';
import Audiences from './components/Audiences.jsx';
import Approach from './components/Approach.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <Services />
        <Audiences />
        <Approach />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
