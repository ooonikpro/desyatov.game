import s from "./PlayerTimeline.module.scss";

const PlayerTimeline = ({ nextVideo }) => {
  return (
    <div className={s.root}>
      <span className={s.time}>00:15</span>
      <div className={s.timeline}>
        <div className={s.progress}></div>
      </div>
      {nextVideo}
    </div>
  );
};

export default PlayerTimeline;
