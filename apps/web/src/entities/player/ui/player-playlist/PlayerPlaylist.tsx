import { useMemo } from "react";
import playerModel from "@entities/player/model";
import PlayerPlaylistItem from "../player-playlist-item";
import s from "./PlayerPlaylist.module.scss";

const PlayerPlaylist = () => {
  const playlist = playerModel.use("playlist");
  const currentIndex = playerModel.use("currentVideoIndex");

  useMemo(() => playerModel.fetchPlaylist(), []);

  return (
    <div className={s.root}>
      <div className={s.list}>
        {playlist.map((item, index) => (
          <PlayerPlaylistItem
            key={item.id}
            {...item}
            position={index}
            isActive={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerPlaylist;
