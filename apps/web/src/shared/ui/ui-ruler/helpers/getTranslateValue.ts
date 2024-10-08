import { RouletteItemType } from "../types";

interface IGetTranslateValue {
  gap: number;
  roulette: RouletteItemType[];
  value: number;
}

const getTranslateValue = ({
  value,
  roulette,
  gap,
}: IGetTranslateValue) =>
  (value * 10 - roulette[0].value * 10) * (gap + 3);

export default getTranslateValue;
