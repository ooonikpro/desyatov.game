import s from "./PlayerVideo.module.scss";

const PlayerVideo = ({ src }: { src: string }) => {
  return (
    <div className={s.root}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video src={src} className={s.video} />;
    </div>
  );
};

export default PlayerVideo;
