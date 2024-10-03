import PlayerControls from "@entities/player/ui/player-controls";
import PlayerLayout from "@entities/player/ui/player-layout";
import PlayerPlaylist from "@entities/player/ui/player-playlist";
import PlayerTimeline from "@entities/player/ui/player-timeline";
import PlayerVideo from "@entities/player/ui/player-video";

const VideoPlayerWidget = () => {
  return (
    <PlayerLayout
      video={<PlayerVideo />}
      timeline={<PlayerTimeline />}
      controls={<PlayerControls />}
      playlist={<PlayerPlaylist />}
    />
  );
};

export default VideoPlayerWidget;
