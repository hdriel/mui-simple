export function getCapitalLetters(str) {
  const chars =
    str
      ?.split(" ")
      .filter((v) => !!v)
      .map((word) => word[0].toUpperCase()) ?? undefined;

  return chars && [chars[0], chars.slice(-1)];
}

export function stringToColor(string) {
  if (!string) return undefined;

  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
