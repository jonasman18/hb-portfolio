import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Footer from './pages/Footer';

function App() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initNeuralNetwork = () => {
      console.log('Attempting to initialize neural network');
      const bg = bgRef.current;
      if (!bg) {
        console.error('Background container not found via ref');
        return;
      }
      console.log('Background container found via ref');
      const canvas = document.createElement('canvas');
      canvas.className = 'neural-network-canvas';
      bg.appendChild(canvas);
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error('Canvas 2D context not supported');
        return;
      }
      console.log('Canvas initialized');

      // Typage explicite pour points
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

  return (
    <div className="min-h-screen bg-navy-dark text-gray-100 relative">
      <div ref={bgRef} className="absolute inset-0 neural-network-bg"></div>
      <Navbar />
      <div className="space-y-20 py-10 relative z-10 px-4 sm:px-6 lg:px-8"> {/* Paddings adaptatifs */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Home />
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center">
          <About />
        </section>
        <section id="skills" className="min-h-screen flex items-center justify-center">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default App;