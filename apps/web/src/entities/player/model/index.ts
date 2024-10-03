import createModel from "@shared/lib/createModel";

import mockData from "./mock";
import { PlayerModelMethodsType, PlayerModelStateType } from "./types";

const playerModel = createModel<PlayerModelStateType, PlayerModelMethodsType>(
  (set, get) => {
    const setPlaylist = (playlist: PlayerModelStateType["playlist"]) =>
      set((state) => (state.playlist = playlist));
    const setPlayerTime = (time: number) => {
      const player = get().player;

      if (player) {
        player.currentTime = time;
      }
    };

    const setIsShowControls = (val: boolean) =>
      set((state) => (state.isShowControls = val));
    const setIsShowPlaylist = (val: boolean) =>
      set((state) => (state.isShowPlaylist = val));

    const pause = () => {
      setTimeout(() => get().player?.pause());
      setIsShowControls(true);
    };
    const play = () => {
      setTimeout(() => get().player?.play());
      setIsShowControls(true);
    };

    const playPause = () => {
      if (get().player?.paused) play();
      else pause();
    };

    const getPrevVideo = () => {
      const { playlist, currentVideoIndex } = get();

      return playlist[(currentVideoIndex ?? 0) - 1];
    };

    const getCurrentVideo = () => {
      const { playlist, currentVideoIndex } = get();

      return playlist[currentVideoIndex ?? 0];
    };

    const getNextVideo = () => {
      const { playlist, currentVideoIndex } = get();

      return playlist[(currentVideoIndex ?? 0) + 1];
    };

    const setVideo = (index: PlayerModelStateType["currentVideoIndex"]) => {
      set((state) => (state.currentVideoIndex = index));
      setPlayerTime(0);
      setTimeout(() => setIsShowPlaylist(false), 200);
    };

    const markCurrentVideoAsCompleted = () => {
      const currentIndex = get().currentVideoIndex ?? 0;
      const playlist = get().playlist;

      if (currentIndex !== null && playlist.length) {
        set((state) => (state.playlist[currentIndex].isComplete = true));
      }
    };

    return {
      state: {
        isShowPlaylist: false,
        isShowControls: true,
        isVideoEnded: false,
        isOpenVideoPlayer: false,
        playlist: [],
        currentVideoIndex: null,
        player: null,
      },

      methods: {
        pause,
        play,
        playPause,
        setPlayer: (player: HTMLVideoElement) => {
          player.onended = () => {
            markCurrentVideoAsCompleted();
          };

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          set((state) => (state.player = player));
        },
        setPlayerTime,
        showPlayer: () => set((state) => (state.isOpenVideoPlayer = true)),
        hidePlayer: () => {
          pause();
          setIsShowPlaylist(false);
          setIsShowControls(false);
          set((state) => (state.isOpenVideoPlayer = false));
        },
        showControls: () => setIsShowControls(true),
        hideControls: () => setIsShowControls(false),
        getPrevVideo,
        getCurrentVideo,
        getNextVideo,
        switchToPrevVideo: () => {
          const currentVideoIndex = get().currentVideoIndex ?? 0;

          if (getPrevVideo()) setVideo(currentVideoIndex - 1);

          play();
        },
        switchToNextVideo: () => {
          const currentVideoIndex = get().currentVideoIndex ?? 0;

          if (getNextVideo()) setVideo(currentVideoIndex + 1);

          play();
        },
        setVideo,
        fetchPlaylist: () => {
          Promise.resolve().then(() => setPlaylist(mockData));
        },
        markCurrentVideoAsCompleted,
        hidePlaylist: () => setIsShowPlaylist(false),
        togglePlaylist: () => setIsShowPlaylist(!get().isShowPlaylist),
        showPlaylist: () => setIsShowPlaylist(true),
      },
    };
  },
);

export default playerModel;
