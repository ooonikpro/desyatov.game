import cn from "classnames";
import React from "react";
import UiCloseButton from "@shared/ui/ui-close-button";
import s from "./PlayerLayout.module.scss";

const PlayerLayout = ({
  video,
  timeline,
  controls,
}: {
  video: React.ReactNode;
  timeline: React.ReactNode;
  controls: React.ReactNode;
}) => {
  const handleClose = () => {};

  return (
    <div className={s.root}>
      <div className={s.video}>{video}</div>
      <div className={s.timeline}>{timeline}</div>
      <div className={cn(s.controls, { [s.show]: false })}>{controls}</div>
      <UiCloseButton onClick={handleClose} className={s.closeBtn} />
    </div>
  );
};

export default PlayerLayout;
