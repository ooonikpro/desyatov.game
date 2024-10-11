import getStyleProperty from "@shared/lib/getStyleProperty";
import cn from "classnames";
import {
  UIEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
  type WheelEvent,
} from "react";
import { generateRoulette, getValueOnWheel } from "./helpers/";
import { RulerRoulettePropsType } from "./types";
import s from "./UiRuler.module.scss";

const RulerRoulette = ({ value, onChange }: RulerRoulettePropsType) => {
  const roulette = useMemo(
    () => generateRoulette(Math.floor(value)),
    [Math.floor(value)],
  );

  const rouletteRef = useRef<HTMLDivElement | null>(null);

  let gap = getStyleProperty(rouletteRef.current, "--gap");

  const [translateValue, setTranslateValue] = useState(0);

  const onWheel = (e: WheelEvent<HTMLDivElement>) => {
    const newValue = getValueOnWheel(e.deltaY, value);
    onChange(newValue);
  };

  useEffect(() => {
    gap = getStyleProperty(rouletteRef.current, "--gap");
    const initialTranslate = (rouletteRef.current?.clientWidth ?? 0) / 2 - 1;
    // getTranslateValue({ value, roulette, gap }) * -1 +
    const translate = initialTranslate;
    setTranslateValue(translate);
  }, []);

  useEffect(() => {
    rouletteRef.current?.scrollTo({
      left: (value - roulette[0].value) * 10 * (gap + 3),
    });
  }, [value]);

  const onScroll: UIEventHandler<HTMLDivElement> = (e) => {
    const newValue = value + 0.1;
    if (newValue === value) return;
    onChange(newValue);
  };

  useEffect(() => {
    rouletteRef.current?.scrollTo({
      left: roulette[0].value
        ? (rouletteRef.current?.clientWidth ?? 0) / 2 - 1
        : 0,
    });
  }, [roulette]);

  useEffect(() => {
    // const initialTranslate = (rouletteRef.current?.clientWidth ?? 0) / 2 - 1;
    // const translate =
    //   getTranslateValue({ value, roulette, gap }) * -1 + initialTranslate;
    // setTranslateValue(translate);
  }, [value, roulette]);

  return (
    <div
      ref={rouletteRef}
      onWheel={onWheel}
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
