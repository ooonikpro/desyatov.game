import type React from "react";

export type UiButtonProps = {
  theme?: "primary";
  children: React.ReactNode;
  block?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;
