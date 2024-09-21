import addLeadingZero from "./addLeadingZero";

const getTime = (duration: number) => {
  const minutes = Math.trunc(duration / 60);
  const sec = Math.trunc((duration / 60 - minutes) * 100);

  return `${addLeadingZero(minutes)}:${addLeadingZero(sec)}`;
};

export default getTime;
