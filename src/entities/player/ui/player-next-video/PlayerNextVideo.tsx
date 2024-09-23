import s from "./PlayerNextVideo.module.scss";

const PlayerNextVideo = ({ img, title }: { img: string; title: string }) => {
  return (
    <div className={s.root}>
      <div className={s.coverWrap}>
        <img src={img} alt={title} className={s.cover} loading="lazy" />
      </div>
      <div className={s.text}>
        <span className={s.next}>Дальше</span>
        <span className={s.title}>{title}</span>
      </div>
      <button className={s.nextBtn}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.409 9.35306C21.8893 9.60847 22.2911 9.98975 22.5712 10.456C22.8514 10.9223 22.9994 11.4561 22.9994 12.0001C22.9994 12.544 22.8514 13.0778 22.5712 13.5441C22.2911 14.0104 21.8893 14.3916 21.409 14.6471L8.597 21.6141C6.534 22.7371 4 21.2771 4 18.9681V5.03306C4 2.72306 6.534 1.26406 8.597 2.38506L21.409 9.35306Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default PlayerNextVideo;
