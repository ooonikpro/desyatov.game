import React, { ForwardedRef } from "react";

export type GymExpandedBlockPropsType = {
  color?: "primary" | "secondary";
  classes?: {
    root?: string;
    content?: string;
  };
  titleNode: React.ReactNode | React.ReactNode[];
  iconNode: React.ReactNode | React.ReactNode[];
  textNode?: React.ReactNode | React.ReactNode[];
  children: React.ReactNode | React.ReactNode[];
  // eslint-disable-next-line no-unused-vars
  actionNode: (onClick: () => void) => React.ReactNode | React.ReactNode[];
};

export type GymExpandedBlockRefType = ForwardedRef<{
  open: () => void;
  close: () => void;
}>;
