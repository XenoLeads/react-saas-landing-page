import { useCallback, useRef } from "react";
import Header from "./Header";
import Hero from "./Hero";
import SocialProofLogoBar from "./SocialProofLogoBar";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Footer from "./Footer";

function App() {
  const hero_ref = useRef(null);
  const features_ref = useRef(null);
  const how_it_works_ref = useRef(null);
  const about_ref = useRef(null);
  const scroll_to = useCallback(event => {
    const section_name = event.currentTarget.dataset.scrollTo;
    let section_ref = null;
    switch (section_name.toLowerCase()) {
      case "hero": {
        section_ref = hero_ref.current;
        break;
      }
      case "features": {
        section_ref = features_ref.current;
        break;
      }
      case "how-it-works": {
        section_ref = how_it_works_ref.current;
        break;
      }
      case "about": {
        section_ref = about_ref.current;
        break;
      }
    }
    section_ref.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Header scroll_to={scroll_to} />
      <Hero ref={hero_ref} />
      <SocialProofLogoBar />
      <Features ref={features_ref} />
      <HowItWorks ref={how_it_works_ref} />
      <Testimonials />
      <CTA />
      <Footer ref={about_ref} />
    </div>
  );
}

export default App;
