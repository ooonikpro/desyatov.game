import { type MutableRefObject, useEffect, useState } from "react";
import { RouletteItemType } from "./types";

type RouletteRef = MutableRefObject<HTMLElement | null>;

interface IUseRouletteArgs {
  rouletteRef: RouletteRef;
  gap: number;
  roulette: RouletteItemType[];
  value: number;
}

const getTranslateValue = ({
  value,
  roulette,
  gap,
}: Omit<IUseRouletteArgs, "rouletteRef">) =>
  (value * 10 - roulette[0].value * 10) * (gap + 3);

export const useRoulette = ({
  rouletteRef,
  gap,
  roulette,
  value,
}: IUseRouletteArgs) => {
  const [translateValue, setTranslateValue] = useState(
    getTranslateValue({ value, roulette, gap }),
  );

  const [initialTranslate, setInitialTranslate] = useState<number>(0);

  useEffect(() => {
    setTranslateValue(getTranslateValue({ value, roulette, gap }));
  }, [value, roulette, gap]);

  useEffect(() => {
    setInitialTranslate((rouletteRef.current?.clientWidth ?? 0) / 2 - 1);
  }, []);

  return { translateValue, initialTranslate };
};
