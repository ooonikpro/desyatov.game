import getStyleProperty from "@shared/lib/getStyleProperty";
import cn from "classnames";
import { TouchEventHandler, useEffect, useMemo, useRef, useState } from "react";
import { generateRoulette, getTranslateValue } from "./helpers/";
import { RulerRoulettePropsType } from "./types";
import s from "./UiRuler.module.scss";

const RulerRoulette = ({ value, onChange }: RulerRoulettePropsType) => {
  const roulette = useMemo(
    () => generateRoulette(Math.floor(value)),
    [Math.floor(value)],
  );

  const rouletteRef = useRef<HTMLDivElement | null>(null);

  let gap = getStyleProperty(rouletteRef.current, "--gap");

  const lastTouch = useRef<number | null>(null);
  const onTouchMove: TouchEventHandler = (e) => {
    const newTouch = e.changedTouches[0].screenX;
    if (lastTouch.current === null) {
      lastTouch.current = newTouch;
      return;
    }
    const dif = newTouch > lastTouch.current ? 1 : -1;
    lastTouch.current = newTouch;

    const newValue =
      dif < 0 ? (value * 10 + 1) / 10 : value === 0 ? 0 : (value * 10 - 1) / 10;
    onChange(newValue);
  };

  const onTouchEnd = () => {
    lastTouch.current = null;
  };

  const [translateValue, setTranslateValue] = useState(0);

  useEffect(() => {
    const initialTranslate = (rouletteRef.current?.clientWidth ?? 0) / 2 - 2;
    const translateValue =
      getTranslateValue({ value, roulette, gap }) * -1 + initialTranslate;
    setTranslateValue(translateValue);
  }, [value, roulette]);

  useEffect(() => {
    gap = getStyleProperty(rouletteRef.current, "--gap");
    const initialTranslate = (rouletteRef.current?.clientWidth ?? 0) / 2 - 1;
    const translateValue =
      getTranslateValue({ value, roulette, gap }) * -1 + initialTranslate;
    setTranslateValue(translateValue);
  }, []);

  return (
    <div
      ref={rouletteRef}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
      className={s.roulette}
    >
      {roulette.map((el) => (
        <div
          style={{
            transform: `translateX(calc(${translateValue} * 1px))`,
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
