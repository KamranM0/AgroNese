import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";

function useMediaQuery(query) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return match;
}
export function useMediaQueries() {
  const lg = useMediaQuery("(min-width: 1100px)");

  return { lg };
}
