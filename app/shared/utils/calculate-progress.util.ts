export const calculateProgress = (percent: number, maxWidth: number) =>
  Math.floor((maxWidth * percent) / 100)
