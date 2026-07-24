import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Location from "./components/Location";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grow bg-black">
        <Hero />
        <Services />
        <Gallery />
        <ContactForm />
        <Location />
      </main>
      <Footer />
    </>
  );
}
