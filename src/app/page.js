import Hero from "@/components/pages/home/Hero";
import Ticker from "@/components/pages/home/Ticker";
import About from "@/components/pages/home/About";
import Services from "@/components/pages/home/Services";
import Portfolio from "@/components/pages/home/Portfolio";
import Skills from "@/components/pages/home/Skills";
import Process from "@/components/pages/home/Process";
import Testimonials from "@/components/pages/home/Testimonials";
import CTA from "@/components/pages/home/CTA";
import LetsCta from "@/components/pages/home/LetsCta";
import GlobalEffects from "@/components/ui/GlobalEffects"; 

export const metadata = {
  title:
    "Sohel Malek | Professional Web Designer & WordPress Developer in Gujarat",
  description:
    "Expert web designer & WordPress developer crafting modern, responsive websites to grow your business online. View portfolio & services.",
};

export default function Home() {
  return (
    <>
      <GlobalEffects />
      <main id="one1" className="maininner relative">
        <Hero /> 
        <Ticker />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <Process />
        <Testimonials />
        <CTA />
        <Testimonials />
        <LetsCta />
        {/* <Footer />  */}
      </main>
    </>
  );
}
