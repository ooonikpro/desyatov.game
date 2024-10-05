import cn from "classnames";
import {
  ChangeEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
  WheelEvent,
} from "react";
import { RouletteItemType, UiRulerPropsType } from "./types";
import s from "./UiRuler.module.scss";
import { useRoulette } from "./useRoulette";

const MAX_WEIGHT_K = 10;

const getRoulette = (value: number) => {
  const roulette: RouletteItemType[] = [];
  const start = value < MAX_WEIGHT_K ? 0 : +(value - MAX_WEIGHT_K).toFixed(1);
  const end = +(value + MAX_WEIGHT_K).toFixed(0);
  for (let i = start; i <= end; i++) {
    let count = 0;
    while (count < 10) {
      roulette.push({
        value: parseFloat(`${(i * 10 + count) / 10}`),
        type: count === 0 ? "int" : "float",
      });
      count++;
    }
  }
  return roulette;
};

const validValue = (value: string) => !Number.isNaN(+value);
const getNewValueOnWheel = (delta: number, value: number) => {
  if (delta < 0) return (value * 10 + 1) / 10;
  else if (value > 0 && delta > 0) return (value * 10 - 1) / 10;
  else return 0;
};

const UiRuler = ({ onChange, value, measurement }: UiRulerPropsType) => {
  const [roulette, setRoulette] = useState(getRoulette(value));
  const [inputError, setInputError] = useState<boolean>(false);

  const rouletteRef = useRef<HTMLDivElement | null>(null);
  const { gap, initialTranslate } = useRoulette(rouletteRef);

  const [viewValue, setViewValue] = useState<string>(`${value}`);
  const translateValue = useMemo<number>(
    () => (value * 10 - roulette[0].value * 10) * (gap + 3),
    [value, roulette, gap],
  );

  console.log(rouletteRef.current?.children.length);
  useEffect(() => {
    setViewValue(`${value}`);
    setRoulette(getRoulette(value));
  }, [value]);

  function onWheel(e: WheelEvent<HTMLDivElement>) {
    const newValue = getNewValueOnWheel(e.deltaY, value);
    onChange(newValue);
  }

  function setNewValueFromInput(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    if (!newValue) onChange(0);
    else if (validValue(newValue)) {
      onChange(parseFloat(newValue));
      setInputError(false);
    } else setInputError(true);
    setViewValue(newValue);
  }

  return (
    <div className={s.ruler}>
      <label className={s.pickedValue}>
        <input
          className={cn(s.input, { [s.inputError]: inputError })}
          type="text"
          onChange={setNewValueFromInput}
          value={viewValue}
        />
        <span className={s.measurement}>{measurement}</span>
      </label>

      <div className={s.cursor} />

      <div ref={rouletteRef} onWheel={onWheel} className={s.roulette}>
        {roulette.map((el) => (
          <div
            style={{
              transform: `translateX(calc(${initialTranslate}px + ${translateValue} * -1px))`,
            }}
            className={cn(s.rouletteItem, {
              [s.int]: el.type === "int",
              [s.float]: el.type === "float",
            })}
            key={el.value}
          />
        ))}
      </div>
    </div>
  );
};

export default UiRuler;
