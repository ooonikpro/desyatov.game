import cn from "classnames";
import React, { forwardRef } from "react";

import s from "./UiGrid.module.scss";

const createGridElement = (gridClassName: string) => {
  // eslint-disable-next-line react/display-name
  return forwardRef(
    (
      {
        className,
        children,
      }: { className?: string; children: React.ReactNode | React.ReactNode[] },
      ref: React.LegacyRef<HTMLDivElement> | undefined,
    ) => (
      <div ref={ref} className={cn(gridClassName, className)}>
        {children}
      </div>
    ),
  );
};

const UiGrid = {
  Container: createGridElement(s.container),
  Column50: createGridElement(s["column-50"]),
  Column100: createGridElement(s["column-100"]),
};

export default UiGrid;
