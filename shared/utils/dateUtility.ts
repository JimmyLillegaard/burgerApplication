export const dateToIsoString = (date: Date) => {
  return date.toISOString().slice(0, 10);
};
