export const isSongAlreadyExists = (arrToCheck, song) =>
  arrToCheck.some((item) => item.id === song.id && item.name === song.name);
