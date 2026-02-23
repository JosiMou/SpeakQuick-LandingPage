import { useEffect, useState, useCallback, RefObject } from "react";

export function useScrollProgress<T extends HTMLElement>(
  containerRef: RefObject<T | null>
): number {
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const scrollableDistance = container.offsetHeight - window.innerHeight;

    if (scrollableDistance <= 0) {
      setProgress(0);
      return;
    }

    const scrolled = -rect.top;
    const raw = scrolled / scrollableDistance;
    const clamped = Math.max(0, Math.min(1, raw));

    setProgress((prev) => {
      if (Math.abs(clamped - prev) > 0.0005) return clamped;
      return prev;
    });
  }, [containerRef]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      update();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [containerRef, update]);

  return progress;
}
