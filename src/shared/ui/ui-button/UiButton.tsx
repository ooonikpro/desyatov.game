import cn from "classnames";
import { useRef } from "react";
import useMount from "react-use/lib/useMount";
import TelegramApi from "@shared/api/telegram";
import { UiButtonPropsType } from "./types";
import s from "./UiButton.module.scss";

const UiButton = ({ theme = "primary", size = "l", children, block, ...$attrs }: UiButtonPropsType) => {
  const ref = useRef<HTMLButtonElement>(null);

  useMount(() => {
    ref.current?.addEventListener("click", TelegramApi.vibrate);
  });

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
