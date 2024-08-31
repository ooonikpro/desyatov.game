import cn from "classnames";
import React, { useEffect, useState } from "react";

import s from "./UiLayout.module.scss";

const UiLayout = ({ children, bottomNavigation }: { children: React.ReactNode; bottomNavigation: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <div className={s.root}>
      <div className={cn(s.content, { [s.show]: isMounted })}>{children}</div>
      <div className={cn(s.navigation, { [s.show]: isMounted })}>{bottomNavigation}</div>
    </div>
  );
};

export default UiLayout;
