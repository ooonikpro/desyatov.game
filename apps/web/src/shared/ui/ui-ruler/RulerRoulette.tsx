import getStyleProperty from "@shared/lib/getStyleProperty";
import cn from "classnames";
import { useMemo, useRef, type WheelEvent } from "react";
import { generateRoulette, getTranslateValue, getValueOnWheel } from "./helpers/";
import { RulerRoulettePropsType } from "./types";
import s from "./UiRuler.module.scss";

const RulerRoulette = ({ value, onChange }: RulerRoulettePropsType) => {
  const roulette = useMemo(
    () => generateRoulette(Math.floor(value)),
    [Math.floor(value)],
  );

  const rouletteRef = useRef<HTMLDivElement | null>(null);

  const gap = getStyleProperty(rouletteRef.current, '--gap');

  const translateValue =
    getTranslateValue({ value, roulette, gap }) +
    (rouletteRef.current?.clientWidth ?? 0) / 2 -
    1;

  const onWheel = (e: WheelEvent<HTMLDivElement>) => {
    const newValue = getValueOnWheel(e.deltaY, value);
    onChange(newValue);
  };

  return (
    <div ref={rouletteRef} onWheel={onWheel} className={s.roulette}>
      {roulette.map((el) => (
        <div
          style={{
            transform: `translateX(calc(${translateValue} * -1px))`,
          }}
          className={cn(s.rouletteItem, {
            [s.int]: el.type === "int",
            [s.float]: el.type === "float",
          })}
          key={el.value}
        />
      ))}
    </div>
  );
};

export default RulerRoulette;
