import Navigation from '@/components/custom/navigation'
import Home from '@/page/home'
import AboutUs from '@/page/aboutUs'
import Schedule from '@/page/schedule'
import Travel from '@/page/travel'
import Faqs from '@/page/faqs'
import ComingSoon from '@/page/coming-soon'
import Rsvp from '@/page/rsvp'
import { useEffect } from 'react'
import { useLocation} from 'react-router'
import navItems from '@/constants/navitems'
import Footer from '@/page/footer'

const scrollToSection = (sectionId: string) => {
  const sectionEl = document.getElementById(sectionId);
  const navHeight = document.getElementById('navigation-container')?.offsetHeight || 0;

  if (sectionEl) {
    const y = sectionEl.offsetTop - navHeight;
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
};

const scrollOnDocReady = (sectionId: string) => {
  if (document.readyState === 'complete') {
    setTimeout(() => scrollToSection(sectionId), 100);
  } else {
    const onLoadCallback = () => scrollToSection(sectionId);
    window.addEventListener('load', onLoadCallback);
    return () => window.removeEventListener('load', onLoadCallback);
  }
};

function App() {
  const currentPath = useLocation().pathname; 

  //Scroll to section on route change
  useEffect(() => {
    const sectionId = navItems.find(item => item.to === currentPath)?.value;
    if (sectionId) {
      return scrollOnDocReady(sectionId);
    }
  }, [currentPath]);

  //IntersectionObserver
  useEffect(() => {
    const observerOptions =  {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries, observer)=> {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');
          observer.unobserve(entry.target);
        }
      });

    }, observerOptions);

    document.querySelectorAll('.preFadeIn').forEach((section) => {
      observer.observe(section as Element);
    });

  });

  return (
    <div className="app-container h-fit w-screen">
      <Navigation />
      <main className="main-container flex flex-col items-center justify-center pb-15">
        < Home />
        <AboutUs />
        <Schedule />
        <Travel />
        <Faqs />
        <ComingSoon />
        <Rsvp />
      </main>
      <Footer />
    </div>
  )
}

export default App
