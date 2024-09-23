import { ChangeEventHandler } from "react";
import TelegramApi from "@shared/api/telegram";
import UiConditionalRender from "@shared/ui/ui-conditional-render";
import s from "./UiMobileSelect.module.scss";

const UiMobileSelect = ({
  options,
  value,
  onChange,
  label,
}: {
  options: Array<string>;
  value: string;
  label?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (val: string) => void;
}) => {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    TelegramApi.vibrate();
    onChange(e.target.value);
  };

  return (
    <label className={s.root}>
      <select value={value} onChange={handleChange} className={s.select}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className={s.displayValue}>
        <span className={s.value}>{value}</span>
        <UiConditionalRender condition={Boolean(label)}>
          <span className={s.label}>{label}</span>
        </UiConditionalRender>
      </span>
    </label>
  );
};

export default UiMobileSelect;
