import React from "react";
import UiConditionalRender from "@shared/ui/ui-conditional-render";
import s from "./InterviewLayout.module.scss";

const InterviewLayout = ({
  progress,
  title,
  subtitle,
  children,
  secondaryAction,
  primaryAction,
}: {
  progress?: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  secondaryAction?: React.ReactNode;
  primaryAction: React.ReactNode;
}) => {
  return (
    <div className={s.root}>
      <div className={s.progressWrapper}>{progress}</div>

      <div className={s.body}>
        <div className={s.content}>
          <h2 className={s.title}>{title}</h2>

          <UiConditionalRender condition={Boolean(subtitle)}>
            <p className={s.subtitle}>{subtitle}</p>
          </UiConditionalRender>

          {children}
        </div>
      </div>

      <div className={s.actions}>
        {secondaryAction}
        {primaryAction}
      </div>
    </div>
  );
};

export default InterviewLayout;
