import isNumber from "@shared/lib/isNumber";
import { ChangeEvent } from "react";
import RulerRoulette from "./RulerRoulette";
import { UiRulerPropsType } from "./types";
import s from "./UiRuler.module.scss";

const UiRuler = ({ onChange, value, measurement }: UiRulerPropsType) => {
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
          value={value}
        />
        <span className={s.measurement}>{measurement}</span>
      </label>

      <div className={s.cursor} />

      <RulerRoulette value={value} onChange={onChange} />
    </div>
  );
};

export default UiRuler;
