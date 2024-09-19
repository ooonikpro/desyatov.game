import cn from "classnames";
import { useEffect, useRef } from "react";
import TelegramApi from "@shared/api/telegram";
import { UiButtonProps } from "./types";
import s from "./UiButton.module.scss";

const UiButton = ({ theme = "primary", size = "l", children, block, ...$attrs }: UiButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref.current?.addEventListener("click", TelegramApi.vibrate);
  }, []);

  return (
    <button
      ref={ref}
      {...$attrs}
      className={cn(
        s.root,
        s[theme],
        s[size],
        {
          [s.block]: block,
        },
        $attrs.className,
      )}
    >
      {children}
    </button>
  );
};

export default UiButton;
