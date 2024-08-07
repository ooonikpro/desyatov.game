import type React, { ClassAttributes } from "react";

export type UiButtonProps = {
  theme?: "primary";
  children: React.ReactNode;
  className?: string;
  block?: boolean;
} & ClassAttributes<HTMLButtonElement>;
