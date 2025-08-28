import { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";

const ParticleCard = ({
  children,
  className = "",
  glowColor = "132,0,255",
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
}) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const el = cardRef.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    if (enableTilt) {
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      gsap.to(el, { rotateX, rotateY, duration: 0.1, ease: "power2.out", transformPerspective: 1000 });
    }

    if (enableMagnetism) {
      const magnetX = (x - centerX) * 0.05;
      const magnetY = (y - centerY) * 0.05;
      gsap.to(el, { x: magnetX, y: magnetY, duration: 0.3, ease: "power2.out" });
    }
  }, [enableTilt, enableMagnetism]);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    const el = cardRef.current;
    gsap.to(el, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.3, ease: "power2.out" });
  }, []);

  const handleClick = useCallback((e) => {
    if (!cardRef.current || !clickEffect) return;
    const el = cardRef.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const maxDistance = Math.max(
      Math.hypot(x, y),
      Math.hypot(x - rect.width, y),
      Math.hypot(x, y - rect.height),
      Math.hypot(x - rect.width, y - rect.height)
    );

    const ripple = document.createElement("div");
    ripple.style.cssText = `
      position: absolute;
      width: ${maxDistance * 2}px;
      height: ${maxDistance * 2}px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(${glowColor},0.4) 0%, rgba(${glowColor},0.2) 30%, transparent 70%);
      left: ${x - maxDistance}px;
      top: ${y - maxDistance}px;
      pointer-events: none;
      z-index: 1000;
    `;
    el.appendChild(ripple);
    gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.8, ease: "power2.out", onComplete: () => ripple.remove() });
  }, [glowColor, clickEffect]);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("click", handleClick);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("click", handleClick);
    };
  }, [handleMouseMove, handleMouseLeave, handleClick]);

  return (
    <div ref={cardRef} className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default ParticleCard;
