import Header from "./Header";
import Hero from "./Hero";
import SocialProofLogoBar from "./SocialProofLogoBar";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Footer from "./Footer";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <Hero />
      <SocialProofLogoBar />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
