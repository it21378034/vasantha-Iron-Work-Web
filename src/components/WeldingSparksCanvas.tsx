import React, { useEffect, useRef } from 'react';

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
}

export const WeldingSparksCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const sparks: Spark[] = [];
    const colors = [
      '#ff8c00', // vibrant orange
      '#ffaa00', // bright golden amber
      '#ffffff', // intense welding arc white
      '#00d4ff', // high heat electric blue spark
      '#ff5500'  // fiery red-orange
    ];

    // Weld origin point near right side center of hero canvas
    const getWeldOrigin = () => {
      return {
        x: width > 768 ? width * 0.72 : width * 0.5,
        y: height > 768 ? height * 0.45 : height * 0.4
      };
    };

    const createSpark = (origin: { x: number; y: number }): Spark => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 5.5;
      return {
        x: origin.x + (Math.random() - 0.5) * 10,
        y: origin.y + (Math.random() - 0.5) * 10,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (Math.random() * 1.5), // slight upwards burst buoyancy
        size: 0.8 + Math.random() * 2.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        life: 0,
        maxLife: 25 + Math.random() * 45
      };
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const origin = getWeldOrigin();

      // Emit new sparks periodically to emulate active arc welding
      if (Math.random() < 0.65) {
        const sparkCount = Math.floor(1 + Math.random() * 4);
        for (let i = 0; i < sparkCount; i++) {
          sparks.push(createSpark(origin));
        }
      }

      // Draw faint welding arc glow aura
      const glowGradient = ctx.createRadialGradient(
        origin.x, origin.y, 2,
        origin.x, origin.y, 140
      );
      glowGradient.addColorStop(0, 'rgba(255, 170, 0, 0.25)');
      glowGradient.addColorStop(0.3, 'rgba(255, 100, 0, 0.12)');
      glowGradient.addColorStop(0.7, 'rgba(0, 200, 255, 0.05)');
      glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(origin.x, origin.y, 140, 0, Math.PI * 2);
      ctx.fill();

      // Update and draw sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.08; // gravity effect pulling sparks down
        s.vx *= 0.98; // atmospheric drag
        s.life++;
        s.alpha = 1 - s.life / s.maxLife;

        if (s.life >= s.maxLife || s.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = s.color;
        ctx.fillStyle = s.color;

        // Draw spark particle with motion trail line
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Motion trail
        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.size * 0.8;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 2, s.y - s.vy * 2);
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
