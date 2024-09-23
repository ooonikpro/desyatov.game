import cn from "classnames";
import s from "./UiProgressBar.module.scss";

const UiProgressBar = ({
  isVertical = false,
  size = "s",
  value = 0,
  className,
}: {
  isVertical?: boolean;
  size: "xs" | "s" | "m";
  value: number;
  className?: string;
}) => {
  const diff = isVertical ? 0 : -100;

  return (
    <div className={cn(s.root, s[size], { [s.vertically]: isVertical, [s.horizontally]: !isVertical }, className)}>
      <div className={s.inner} style={{ transform: `translate${isVertical ? "Y" : "X"}(${value + diff}%)` }}></div>
    </div>
  );
};

export default UiProgressBar;
