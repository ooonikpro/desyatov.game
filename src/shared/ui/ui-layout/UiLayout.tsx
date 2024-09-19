import cn from "classnames";
import React, { useEffect, useState } from "react";

import s from "./UiLayout.module.scss";

const UiLayout = ({ children, bottomNavigation }: { children: React.ReactNode; bottomNavigation: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <div className={s.root}>
      <div className={cn(s.container, { [s.show]: isMounted })}>
        <div className={s.content}>{children}</div>
      </div>
      <div className={cn(s.navigation, { [s.show]: isMounted })}>{bottomNavigation}</div>
    </div>
  );
};

export default UiLayout;
