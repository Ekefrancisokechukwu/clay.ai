// ScrollProvider.tsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { useLocation } from "react-router-dom";

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top smoothly on route change
  useEffect(() => {
    const lenis = new Lenis();
    lenis.scrollTo(0, { immediate: false });
  }, [location.pathname]);

  return <>{children}</>;
};
