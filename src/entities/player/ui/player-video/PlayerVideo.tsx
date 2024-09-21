import s from "./PlayerVideo.module.scss";

const PlayerVideo = ({ src }) => {
  return (
    <div className={s.root}>
      <video src={src} className={s.video} />;
    </div>
  );
};

export default PlayerVideo;
