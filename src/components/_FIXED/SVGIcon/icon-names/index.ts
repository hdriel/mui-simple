import filledIcons from './filled-icons.json';
import outlinedIcons from './outlined-icons.json';
import roundedIcons from './rounded-icons.json';
import sharpIcons from './sharp-icons.json';
import twoToneIcons from './twoTone-icons.json';

const allIcons = [...filledIcons, ...outlinedIcons, ...roundedIcons, ...sharpIcons, ...twoToneIcons] as const;

export type IconName = (typeof allIcons)[number];

export { filledIcons, outlinedIcons, roundedIcons, sharpIcons, twoToneIcons };
