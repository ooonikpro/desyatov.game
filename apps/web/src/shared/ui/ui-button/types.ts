import type React from "react";

export type UiButtonPropsType = {
  theme?: "primary" | "link" | "black";
  children: React.ReactNode;
  block?: boolean;
  size?: "m" | "l";
} & React.HTMLAttributes<HTMLButtonElement>;
