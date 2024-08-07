// eslint-disable-next-line import/no-extraneous-dependencies
import cn from "classnames";
import { UiButtonProps } from "./types";
import s from "./UiButton.module.scss";

const UiButton = ({ theme = "primary", children, block, className, ...$attrs }: UiButtonProps) => {
  return (
    <button
      {...$attrs}
      className={cn(
        s.root,
        s[theme],
        {
          [s.block]: block,
        },
        className,
      )}
    >
      {children}
    </button>
  );
};

export default UiButton;
