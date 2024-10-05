import { type MutableRefObject, useMemo } from "react";

const getElementsWidth = (children: HTMLCollection) =>
  [...children].reduce((prev, curr) => prev + curr.clientWidth, 0);

export const useRoulette = (
  rouletteRef: MutableRefObject<HTMLElement | null>,
) => {
  const initialTranslate = useMemo(
    () => (rouletteRef.current?.clientWidth || 0) / 2 - 1,
    [rouletteRef.current],
  );

  const gap = useMemo(() => {
    const element = rouletteRef.current;
    if (!element) return 0;
    else {
      const children = element.children;
      return (
        (element.scrollWidth - getElementsWidth(children) - initialTranslate) /
        (children.length - 1)
      );
    }
  }, [rouletteRef.current]);
  
  return { gap, initialTranslate };
};
