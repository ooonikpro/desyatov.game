import isNumber from "@shared/lib/isNumber";
import cn from "classnames";
import {
  ChangeEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
  type WheelEvent,
} from "react";
import { RouletteItemType, UiRulerPropsType } from "./types";
import s from "./UiRuler.module.scss";
import { useRoulette } from "./useRoulette";

const MAX_WEIGHT_K = 5;

const getRoulette = (value: number) => {
  const roulette: RouletteItemType[] = [];
  const start = value < MAX_WEIGHT_K ? 0 : +(value - MAX_WEIGHT_K).toFixed(1);
  const end = start
    ? +(value + MAX_WEIGHT_K).toFixed(0)
    : +(value + MAX_WEIGHT_K).toFixed(0) + 5;
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

const getNewValueOnWheel = (delta: number, value: number) => {
  if (delta < 0) return (value * 10 + 1) / 10;

  if (value > 0 && delta > 0) return (value * 10 - 1) / 10;

  return 0;
};

const UiRuler = ({
  onChange,
  value,
  measurement,
  gap = 10,
}: UiRulerPropsType) => {
  const roulette = useMemo(
    () => getRoulette(Math.floor(value)),
    [Math.floor(value)],
  );

  const rouletteRef = useRef<HTMLDivElement | null>(null);
  const { translateValue, initialTranslate } = useRoulette({
    rouletteRef,
    gap,
    roulette,
    value,
  });

  const [viewValue, setViewValue] = useState<string>(`${value}`);

  useEffect(() => {
    setViewValue(`${value}`);
  }, [value]);

  const onWheel = (e: WheelEvent<HTMLDivElement>) => {
    const newValue = getNewValueOnWheel(e.deltaY, value);
    onChange(newValue);
  };

  const setNewValueFromInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (isNumber(newValue)) onChange(parseFloat(newValue));
  };

  return (
    <div className={s.ruler}>
      <label className={s.pickedValue}>
        <input
          className={s.input}
          type="text"
          onInput={setNewValueFromInput}
          value={viewValue}
        />
        <span className={s.measurement}>{measurement}</span>
      </label>

      <div className={s.cursor} />

      <div
        ref={rouletteRef}
        onWheel={onWheel}
        className={s.roulette}
        style={{ gap }}
      >
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
