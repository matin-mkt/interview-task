import { useEffect, useState, useRef } from "react";

export function useHeadsObserver() {
  const observer = useRef();
  const [activeId, setActiveId] = useState("");

  const observeElements = () => {
    const elements = document.querySelectorAll("h1, h2, h3, h4");
    elements.forEach((elem) => observer.current.observe(elem));
  };

  useEffect(() => {
    const handleObsever = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: "0% 0% -80% 0px",
    });

    return () => observer.current?.disconnect();
  }, []);
  return { activeId, observeElements };
}
