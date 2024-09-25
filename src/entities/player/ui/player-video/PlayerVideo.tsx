import { useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import playerModel from "@entities/player/model";
import TelegramApi from "@shared/api/telegram";
import pipe from "@shared/lib/pipe";
import s from "./PlayerVideo.module.scss";

const PlayerVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const video = playerModel.use(playerModel.getCurrentVideo);

  const handleClick = () => {
    if (playerModel.get("isShowPlaylist")) {
      playerModel.togglePlaylist();
      return;
    }

    if (!playerModel.get("isShowControls")) {
      playerModel.showControls();
      return;
    }

    playerModel.playPause();
  };

  const handlers = useSwipeable({
    onSwipedLeft: playerModel.switchToPrevVideo,
    onSwipedRight: playerModel.switchToNextVideo,
    onSwipedDown: () => {
      if (!playerModel.get("isShowPlaylist")) {
        playerModel.hidePlaylist();
        return;
      }

      playerModel.hidePlayer();
    },
    onSwipedUp: playerModel.hidePlaylist,
  });

  useEffect(() => {
    if (videoRef.current) playerModel.setPlayer(videoRef.current);
  }, []);

  return (
    <div {...handlers} className={s.root} onClick={pipe(TelegramApi.vibrate, handleClick)}>
      <video
        ref={videoRef}
        src={video?.video}
        className={s.video}
        disablePictureInPicture
        disableRemotePlayback
        playsInline
        webkit-playsInline
      />
      ;
    </div>
  );
};

export default PlayerVideo;
