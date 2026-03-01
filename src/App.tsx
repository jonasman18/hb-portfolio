import { useEffect, useRef, useCallback } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Footer from './pages/Footer';

function App() {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const initNeuralNetwork = () => {
      console.log('Attempting to initialize neural network');
      const bg = bgRef.current;
      if (!bg) return console.error('Background container not found');
      console.log('Background container found');

      const canvas = document.createElement('canvas');
      canvas.className = 'neural-network-canvas';
      bg.appendChild(canvas);
      const ctx = canvas.getContext('2d');
      if (!ctx) return console.error('Canvas 2D context not supported');

      const points: Array<{ x: number; y: number; vx: number; vy: number }> = [];
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      for (let i = 0; i < 100; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        });
      }

      function animate() {
        requestAnimationFrame(animate);
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(94, 129, 206, 0.9)';
        points.forEach(point => {
          point.x += point.vx;
          point.y += point.vy;
          if (point.x > canvas.width || point.x < 0) point.vx *= -1;
          if (point.y > canvas.height || point.y < 0) point.vy *= -1;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
          ctx.fill();

          points.forEach(other => {
            const dx = point.x - other.x;
            const dy = point.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) {
              ctx.beginPath();
              ctx.strokeStyle = 'rgba(94, 129, 206, 0.6)';
              ctx.lineWidth = 1.5;
              ctx.moveTo(point.x, point.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          });
        });
      }

      animate();

      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    };

    initNeuralNetwork();
  }, []);

  
  // Observer réciproque : entre → affiche, sort → cache
  const slideObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-in');
        entry.target.classList.remove('opacity-0', '-translate-x-24', 'translate-x-24');
      } else {
        // Quand on sort (vers le haut ou bas), on remet l'état initial
        entry.target.classList.remove('animate-slide-in');
        // On remet le décalage selon la direction (optionnel, ici on remet aléatoire ou fixe)
        entry.target.classList.add(entry.target.getBoundingClientRect().top < 0 ? 'translate-x-24' : '-translate-x-24');
        entry.target.classList.add('opacity-0');
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(slideObserver, {
      threshold: 0.25,           // déclenche quand ~25% visible
      rootMargin: '-10% 0px -10% 0px' // un peu de marge haut/bas
    });

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [slideObserver]);

  return (
    <div className="min-h-screen bg-navy-dark text-gray-100 relative">
      <div ref={bgRef} className="absolute inset-0 neural-network-bg"></div>
      <Navbar />
      <div className="space-y-20 py-10 relative z-10 px-4 sm:px-6 lg:px-8">
        <section
          ref={el => { sectionsRef.current[0] = el; }}
          id="home"
          className="min-h-screen flex items-center justify-center opacity-0 -translate-x-24 transition-all duration-1200 ease-out"
        >
          <Home />
        </section>

        <section
          ref={el => { sectionsRef.current[1] = el; }}
          id="about"
          className="min-h-screen flex items-center justify-center opacity-0 translate-x-24 transition-all duration-1200 ease-out"
        >
          <About />
        </section>

        <section
          ref={el => { sectionsRef.current[2] = el; }}
          id="skills"
          className="min-h-screen flex items-center justify-center opacity-0 -translate-x-24 transition-all duration-1200 ease-out"
        >
          <Skills />
        </section>

        <section
          ref={el => { sectionsRef.current[3] = el; }}
          id="projects"
          className="min-h-screen flex items-center justify-center opacity-0 translate-x-24 transition-all duration-1200 ease-out"
        >
          <Projects />
        </section>

        <section
          ref={el => { sectionsRef.current[4] = el; }}
          id="contact"
          className="min-h-screen flex items-center justify-center opacity-0 -translate-x-24 transition-all duration-1200 ease-out"
        >
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;