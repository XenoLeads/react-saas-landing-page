import { useCallback, useRef, useEffect } from "react";
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

  // Smooth Fade In on Scroll Setup
  const elements = useRef(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const section = element.dataset.section;
          switch (section) {
            case "hero": {
              console.log(element);
              const stagger = Number(element.dataset.stagger || 0);
              const children = [...element.children];
              children.map((child, index) => {
                child.style.animationDelay = `${stagger * index}ms`;
                child.classList.add("animate-top-fade-in");
              });
              break;
            }
            case "how-it-works-steps": {
              const step_elements = [...element.children];
              const step_elements_children = step_elements.map(el => [...el.children]);
              const stagger = Number(element.dataset.stagger || 0);
              step_elements_children.map((child, child_index) => {
                child.map((el, el_index) => {
                  el.style.animationDelay = `${stagger * (el_index + child_index) + stagger * child_index}ms`;
                  el.classList.add("animate-left-fade-in");
                });
              });
              break;
            }
          }
        }
      });
    });

    elements.current.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const register = useCallback(el => (el ? elements.current.add(el) : elements.current.delete(el)), []);

  return (
    <div className="w-full overflow-hidden">
      <Header scroll_to={scroll_to} />
      <Hero ref={hero_ref} register={register} />
      <SocialProofLogoBar />
      <Features ref={features_ref} />
      <HowItWorks ref={how_it_works_ref} register={register} />
      <Testimonials />
      <CTA />
      <Footer ref={about_ref} />
    </div>
  );
}

export default App;
