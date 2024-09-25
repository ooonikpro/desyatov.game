export type PlayerVideoType = {
  id: number;
  title: string;
  img: string;
  video: string;
  duration: number;
  isComplete: boolean;
};

export type PlayerModelStateType = {
  isShowPlaylist: boolean;
  isShowControls: boolean;
  isOpenVideoPlayer: boolean;
  isVideoEnded: boolean;
  playlist: Array<PlayerVideoType>;
  currentVideoIndex: number | null;
  player: HTMLVideoElement | null;
};

export type PlayerModelMethodsType = {
  showPlayer: () => void;
  hidePlayer: () => void;
  showControls: () => void;
  hideControls: () => void;
  hidePlaylist: () => void;
  togglePlaylist: () => void;
  showPlaylist: () => void;
  play: () => void;
  pause: () => void;
  playPause: () => void;
  getPrevVideo: () => PlayerVideoType | undefined;
  getCurrentVideo: () => PlayerVideoType | undefined;
  getNextVideo: () => PlayerVideoType | undefined;
  switchToPrevVideo: () => void;
  switchToNextVideo: () => void;
  // eslint-disable-next-line no-unused-vars
  setVideo: (index: number) => void;
  // eslint-disable-next-line no-unused-vars
  setPlayer: (player: HTMLVideoElement) => void;
  // eslint-disable-next-line no-unused-vars
  setPlayerTime: (time: number) => void;
  fetchPlaylist: () => void;
  markCurrentVideoAsCompleted: () => void;
};
