import GymPlaylistItem from "@entities/gym/ui/gym-playlist-item";
import s from "./GymPlayList.module.scss";

const data = [
  {
    id: 1,
    title: "Тяга к груди",
    img: "https://ooonikpro.github.io/desyatov-trainer.online/images/atlet.webp",
    duration: 121,
    isComplete: true,
  },
  {
    id: 2,
    title: "Хаммер",
    img: "https://ooonikpro.github.io/desyatov-trainer.online/images/myasonabor.webp",
    duration: 30,
  },
  {
    id: 3,
    title: "Приседания со штангой",
    img: "https://ooonikpro.github.io/desyatov-trainer.online/images/krugloyagodichnoe.webp",
    duration: 300,
  },
];

const GymPlaylist = ({ name, playlist = data }: { name: string; playlist?: typeof data }) => {
  return (
    <div className={s.root}>
      <h5 className={s.name}>{name}</h5>
      <div className={s.list}>
        {playlist.map((item) => (
          <GymPlaylistItem
            key={item.id}
            img={item.img}
            title={item.title}
            duration={item.duration}
            isComplete={item.isComplete}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default GymPlaylist;
