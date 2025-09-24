// Vérifie si la classe est déjà déclarée
if (typeof NeuralNetworkBackground !== 'undefined') {
  console.log('NeuralNetworkBackground already declared, skipping');
} else {
  class NeuralNetworkBackground {
    constructor() {
      console.log('Initializing NeuralNetworkBackground');
      this.canvas = document.createElement('canvas');
      this.canvas.className = 'neural-network-canvas';
      this.bg = document.querySelector('.neural-network-bg');
      if (!this.bg) {
        console.error('Neural network background container not found');
        return;
      }
      console.log('Container found, adding canvas');
      this.bg.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
      if (!this.ctx) {
        console.error('Canvas 2D context not supported');
        return;
      }
      console.log('Canvas initialized, starting animation');
      this.points = [];
      this.init();
      this.animate();
    }

    init() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      for (let i = 0; i < 50; i++) {
        this.points.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        });
      }
    }

    animate() {
      requestAnimationFrame(() => this.animate());
      if (!this.ctx) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = 'rgba(46, 64, 102, 0.7)';
      this.points.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;
        if (point.x > this.canvas.width || point.x < 0) point.vx *= -1;
        if (point.y > this.canvas.height || point.y < 0) point.vy *= -1;
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        this.ctx.fill();

        this.points.forEach(other => {
          const dx = point.x - other.x;
          const dy = point.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'rgba(46, 64, 102, 0.3)';
            this.ctx.lineWidth = 1;
            this.ctx.moveTo(point.x, point.y);
            this.ctx.lineTo(other.x, other.y);
            this.ctx.stroke();
          }
        });
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, initializing neural network');
    new NeuralNetworkBackground();
  });

  window.addEventListener('resize', () => {
    const bg = document.querySelector('.neural-network-bg');
    if (bg) {
      const canvas = bg.querySelector('.neural-network-canvas');
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    }
  });
}