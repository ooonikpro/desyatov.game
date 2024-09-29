import pipe from "lodash/fp/pipe";
import playerModel from "@entities/player/model";
import TelegramApi from "@shared/api/telegram";
import s from "./PlayerControls.module.scss";

const PlayerControls = () => {
  const prevVideo = playerModel.use(playerModel.getPrevVideo);
  const currentVideo = playerModel.use(playerModel.getCurrentVideo);
  const nextVideo = playerModel.use(playerModel.getNextVideo);

  return (
    <div className={s.root}>
      <button
        className={s.prevBtn}
        onClick={pipe(TelegramApi.vibrate, playerModel.switchToPrevVideo)}
        disabled={!prevVideo}
      >
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.13542 4.25C5.62417 4.25 6.02083 4.64667 6.02083 5.13542V28.8646C6.02083 29.0994 5.92755 29.3246 5.7615 29.4907C5.59545 29.6567 5.37024 29.75 5.13542 29.75C4.90059 29.75 4.67538 29.6567 4.50933 29.4907C4.34328 29.3246 4.25 29.0994 4.25 28.8646V5.13542C4.25 4.64667 4.64667 4.25 5.13542 4.25ZM29.75 6.55633C29.75 4.70404 27.6746 3.60967 26.146 4.658L10.914 15.1003C9.58021 16.014 9.58021 17.9832 10.914 18.8969L26.146 29.3406C27.6746 30.3875 29.75 29.2945 29.75 27.443V6.55633Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div className={s.videoDetails} onClick={pipe(TelegramApi.vibrate, playerModel.togglePlaylist)}>
        <div className={s.coverWrap}>
          <img src={currentVideo?.img} alt={currentVideo?.title} className={s.cover} loading="lazy" />
        </div>
        <div className={s.text}>
          <span className={s.label}>Упражнение</span>
          <span className={s.title}>{currentVideo?.title}</span>
        </div>
      </div>
      <button
        className={s.nextBtn}
        onClick={pipe(TelegramApi.vibrate, playerModel.switchToNextVideo)}
        disabled={!nextVideo}
      >
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M28.8646 4.25C28.3758 4.25 27.9792 4.64667 27.9792 5.13542V28.8646C27.9792 29.0994 28.0725 29.3246 28.2385 29.4907C28.4045 29.6567 28.6298 29.75 28.8646 29.75C29.0994 29.75 29.3246 29.6567 29.4907 29.4907C29.6567 29.3246 29.75 29.0994 29.75 28.8646V5.13542C29.75 4.64667 29.3533 4.25 28.8646 4.25ZM4.25 6.55633C4.25 4.70404 6.32542 3.60967 7.854 4.658L23.086 15.1003C24.4198 16.014 24.4198 17.9832 23.086 18.8969L7.854 29.3406C6.32542 30.3875 4.25 29.2945 4.25 27.443V6.55633Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default PlayerControls;
