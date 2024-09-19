import cn from "classnames";
import React from "react";

import s from "./UiBlock.module.scss";

const UiBlock = ({
  color = "secondary",
  children,
  className,
  ...$attrs
}: {
  color?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div {...$attrs} className={cn(s.root, s[color], className)}>
      {children}
    </div>
  );
};

export default UiBlock;
