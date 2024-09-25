const getTime = (duration: number) => {
  if (Number.isNaN(duration)) return "00:00";

  const minutes = Math.floor(duration / 60)
    .toString()
    .padStart(2, "0");

  const sec = Math.ceil(duration % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${sec}`;
};

export default getTime;
