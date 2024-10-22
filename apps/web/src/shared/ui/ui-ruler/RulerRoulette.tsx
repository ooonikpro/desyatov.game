import getStyleProperty from "@shared/lib/getStyleProperty";
import cn from "classnames";
import { TouchEventHandler, useEffect, useMemo, useRef, useState } from "react";
import {
  calcInitialTranslate,
  generateRoulette,
  getTranslateValue,
  transformValue,
} from "./helpers/";
import { RulerRoulettePropsType } from "./types";
import s from "./UiRuler.module.scss";

const RulerRoulette = ({
  value,
  onChange,
  direction,
}: RulerRoulettePropsType) => {
  const roulette = useMemo(
    () => generateRoulette(Math.floor(value)),
    [Math.floor(value)],
  );

  const rouletteRef = useRef<HTMLDivElement | null>(null);

  let gap = getStyleProperty(rouletteRef.current, "--gap");
  let itemWidth = getStyleProperty(rouletteRef.current, "--item-width");

  const lastTouch = useRef<number | null>(null);
  const onTouchMove: TouchEventHandler = (e) => {
    const dirKey = direction === "horizontal" ? "screenX" : "screenY";
    const newTouch = e.changedTouches[0][dirKey];
    if (lastTouch.current === null) {
      lastTouch.current = newTouch;
      return;
    }
    const dif = newTouch > lastTouch.current ? 1 : -1;
    lastTouch.current = newTouch;

    const newValue =
      dif < 0 ? (value * 10 + 1) / 10 : value === 0 ? 0 : (value * 10 - 1) / 10;
    onChange(+newValue.toFixed(1));
  };

  const onTouchEnd = () => {
    lastTouch.current = null;
  };

  const [translateValue, setTranslateValue] = useState(0);

  useEffect(() => {
    const initialTranslate = calcInitialTranslate(
      rouletteRef.current,
      direction!,
    );
    const translateValue =
      getTranslateValue({ value, roulette, gap, itemWidth }) * -1 + initialTranslate;
    setTranslateValue(translateValue);
  }, [value, roulette]);

  useEffect(() => {
    gap = getStyleProperty(rouletteRef.current, "--gap");
    itemWidth = getStyleProperty(rouletteRef.current, "--item-width");
    const initialTranslate = calcInitialTranslate(
      rouletteRef.current,
      direction!,
    );
    const translateValue =
      getTranslateValue({ value, roulette, gap, itemWidth }) * -1 + initialTranslate;
    setTranslateValue(translateValue);
  }, []);

  return (
    <div
      ref={rouletteRef}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
      className={cn(s.roulette, s[direction!])}
    >
      {roulette.map((el) => (
        <div
          data-value={el.value}
          style={{
            transform: transformValue(direction!, translateValue),
          }}
          className={cn(s.rouletteItem)}
          key={el.value}
        />
      ))}
    </div>
  );
};

export default RulerRoulette;
