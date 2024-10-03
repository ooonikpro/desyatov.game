import {
  MouseEventHandler,
  TouchEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import playerModel from "@entities/player/model";
import TelegramApi from "@shared/api/telegram";
import getTime from "@shared/lib/getTime";
import s from "./PlayerTimeline.module.scss";

const PlayerTimeline = () => {
  const player = playerModel.use("player");
  const videoIndex = playerModel.use("currentVideoIndex");
  const isShowPlaylist = playerModel.use("isShowPlaylist");

  const [currentTime, setCurrentTime] = useState(0);
  const timesRef = useRef(0);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const cursorPosPercentage =
      ((e.pageX - e.currentTarget.offsetLeft) / e.currentTarget.clientWidth) *
      100;

    if (player)
      playerModel.setPlayerTime(
        ((player?.duration ?? 1) * cursorPosPercentage) / 100,
      );

    TelegramApi.vibrate();
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    try {
      const cursorPosPercentage =
        ((e.touches[0].pageX - e.currentTarget.offsetLeft) /
          e.currentTarget.clientWidth) *
        100;

      if (player)
        playerModel.setPlayerTime(
          ((player?.duration ?? 1) * cursorPosPercentage) / 100,
        );
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (player) {
      player.ontimeupdate = () => {
        setCurrentTime((player.currentTime / player.duration) * 100);
        timesRef.current++;

        if (timesRef.current > 15 && !playerModel.get("isShowPlaylist")) {
          playerModel.hideControls();
          timesRef.current = 0;
        }
      };
    }
  }, [player]);

  useEffect(() => {
    setCurrentTime(0);
    timesRef.current = 0;
  }, [videoIndex]);

  useEffect(() => {
    timesRef.current = 0;
  }, [isShowPlaylist]);

  return (
    <div className={s.root}>
      <span className={s.time}>{getTime(currentTime)}</span>
      <div
        className={s.timeline}
        onClick={handleClick}
        onTouchMove={handleTouchMove}
      >
        <div className={s.progress} style={{ width: currentTime + "%" }}></div>
      </div>
    </div>
  );
};

export default PlayerTimeline;
