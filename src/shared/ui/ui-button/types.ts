import type React from "react";

export type UiButtonProps = {
  theme?: "primary" | "link" | "black";
  children: React.ReactNode;
  block?: boolean;
  size?: "m" | "l";
} & React.HTMLAttributes<HTMLButtonElement>;
