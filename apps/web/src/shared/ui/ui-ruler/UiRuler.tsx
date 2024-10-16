import isNumber from "@shared/lib/isNumber";
import cn from "classnames";
import { ChangeEvent, useEffect, useState } from "react";
import {
  convertValueFromInput,
  removeZeroAtBegin
} from "./helpers/transformInputValue";
import RulerRoulette from "./RulerRoulette";
import { UiRulerPropsType } from "./types";
import s from "./UiRuler.module.scss";

const UiRuler = ({
  onChange,
  value,
  measurement,
  direction = "vertical",
}: UiRulerPropsType) => {
  const [viewValue, setViewValue] = useState(`${value}`);
  const setNewValueFromInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim();
    if (isNumber(newValue)) {
      const convertedValue = convertValueFromInput(newValue);
      onChange(parseFloat(convertedValue) || 0);
      setViewValue(removeZeroAtBegin(convertedValue));
    }
  };

  useEffect(() => {
    setViewValue(`${value}`);
  }, [value]);

  return (
    <div className={cn(s.ruler, s[direction])}>
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

      <RulerRoulette {...{ value, onChange, direction }} />
    </div>
  );
};

export default UiRuler;
