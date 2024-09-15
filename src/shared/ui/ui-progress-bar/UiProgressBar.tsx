import cn from "classnames";
import s from "./UiProgressBar.module.scss";

const UiProgressBar = ({ size = "s", value = 0 }: { size: "xs" | "s" | "m"; value: number }) => {
  return (
    <div className={cn(s.root, s[size])}>
      <div className={s.inner} style={{ transform: `translateX(${value - 100}%)` }}></div>
    </div>
  );
};

export default UiProgressBar;
