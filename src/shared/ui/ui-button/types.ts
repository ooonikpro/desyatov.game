import type React from "react";

export type UiButtonProps = {
  theme?: "primary" | "link";
  children: React.ReactNode;
  block?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;
