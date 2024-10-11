import { RouletteItemType } from "../types";

const MAX_SHIFT = 5;

const addNumbersAfterComma = (int: number, roulette: RouletteItemType[]) => {
  let numberAfterComma = 0;
  while (numberAfterComma < 10) {
    roulette.push({
      value: int + +`0.${numberAfterComma}`,
      type: numberAfterComma === 0 ? "int" : "float",
    });
    numberAfterComma++;
  }
};

const generateRoulette = (value: number) => {
  const roulette: RouletteItemType[] = [];
  const start = value < MAX_SHIFT ? 0 : +(value - MAX_SHIFT).toFixed(1);
  const end = start
    ? +(value + MAX_SHIFT).toFixed(0)
    : +(value + MAX_SHIFT).toFixed(0) + 5;
  for (let i = start; i <= end; i++) addNumbersAfterComma(i, roulette);
  return roulette;
};

export default generateRoulette;
