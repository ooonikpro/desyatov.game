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
import isNumber from "@shared/lib/isNumber";

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
  else if (value > 0 && delta > 0) return (value * 10 - 1) / 10;
  else return 0;
};

const UiRuler = ({
  onChange,
  value,
  measurement,
  gap = 10,
}: UiRulerPropsType) => {
  const intValue = useMemo(() => Math.floor(value), [value]);
  const roulette = useMemo(() => getRoulette(intValue), [intValue]);
  const [inputError, setInputError] = useState<boolean>(false);

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

  function onWheel(e: WheelEvent<HTMLDivElement>) {
    const newValue = getNewValueOnWheel(e.deltaY, value);
    onChange(newValue);
  }

  function setNewValueFromInput(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    if (!newValue) onChange(0);
    else if (isNumber(newValue)) {
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
