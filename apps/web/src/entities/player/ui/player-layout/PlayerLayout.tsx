import cn from "classnames";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import playerModel from "@entities/player/model";
import UiCloseButton from "@shared/ui/ui-close-button";
import UiConditionalRender from "@shared/ui/ui-conditional-render";
import s from "./PlayerLayout.module.scss";

const PlayerLayout = ({
  video,
  timeline,
  controls,
  playlist,
}: {
  video: React.ReactNode;
  timeline: React.ReactNode;
  controls: React.ReactNode;
  playlist: React.ReactNode;
}) => {
  const [isShowCloseBtn, setIsShowCloseBtn] = useState(false);
  const isOpenPlayer = playerModel.use("isOpenVideoPlayer");
  const isShowControls = playerModel.use("isShowControls");

  const isShowPlaylist = playerModel.use("isShowPlaylist");

  const handlers = useSwipeable({
    onSwipedDown: playerModel.togglePlaylist,
  });

  const handleClose = () => {
    setIsShowCloseBtn(false);

    playerModel.hidePlayer();
  };

  const handleTransitionEnd = () => {
    if (isOpenPlayer) setIsShowCloseBtn(true);
  };

  return (
    <div
      className={cn(s.root, { [s.open]: isOpenPlayer })}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className={s.video}>{video}</div>

      <div className={cn(s.controls, { [s.show]: isShowControls })}>
        {timeline}
        {controls}
      </div>

      <div
        {...handlers}
        className={cn(s.playlist, { [s.show]: isShowPlaylist })}
      >
        <span className={s.playlistLine}></span>
        <div className={s.playlistScroll}>{playlist}</div>
      </div>

      <UiConditionalRender condition={isShowCloseBtn && isShowControls}>
        <UiCloseButton onClick={handleClose} className={s.closeBtn} />
      </UiConditionalRender>
    </div>
  );
};

export default PlayerLayout;
