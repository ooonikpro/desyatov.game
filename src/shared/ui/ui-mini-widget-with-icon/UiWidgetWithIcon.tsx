import React from "react";
import s from "./UiWidgetWithIcon.module.scss";

const UiWidgetWithIcon = ({
  title,
  icon,
  value,
}: {
  title: React.ReactNode;
  icon: React.ReactNode;
  value: React.ReactNode;
}) => {
  return (
    <div className={s.root}>
      <h4 className={s.title}>{title}</h4>
      <div className={s.icon}>{icon}</div>
      <div className={s.value}>{value}</div>
    </div>
  );
};

export default UiWidgetWithIcon;
