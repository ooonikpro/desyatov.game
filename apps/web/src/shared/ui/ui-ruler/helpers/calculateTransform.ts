import { DirectionType, RouletteItemType } from "../types";

interface IGetTranslateValue {
  gap: number;
  itemWidth: number;
  roulette: RouletteItemType[];
  value: number;
}

export const getTranslateValue = ({ value, roulette, gap, itemWidth }: IGetTranslateValue) =>
  (value * 10 - roulette[0].value * 10) * (gap + itemWidth);

export const transformValue = (direction: DirectionType, translateValue: number) => {
  const func = direction === "horizontal" ? "translateX" : "translateY";
  return `${func}(calc(${translateValue} * 1px))`;
};

export const calcInitialTranslate = (ref: HTMLElement | null, dir: DirectionType) => {
  if (dir === "horizontal") return (ref?.clientWidth ?? 0) / 2 - 2;
  return (ref?.clientHeight ?? 0) / 2 - 9.5;
};
