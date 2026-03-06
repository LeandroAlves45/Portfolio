// HOOK - useIntersection.ts

import { useEffect, useRef, useState } from "react";

interface Options {
  threshold?: number;
  rootMargin?: string;
  keepWatching?: boolean;
}

export function useIntersection<T extends HTMLElement = HTMLElement>(
  options: Options = {},
): [React.RefObject<T>, boolean] {
  const { threshold = 0.1, rootMargin = "0px", keepWatching = false } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once visible unless keepWatching is set
          if (!keepWatching) observer.unobserve(element);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    // Cleanup: disconnect observer on unmount
    return () => observer.disconnect();
  }, [threshold, rootMargin, keepWatching]);

  return [ref, isVisible];
}
