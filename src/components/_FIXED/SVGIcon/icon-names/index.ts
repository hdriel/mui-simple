import filledIcons from './filled-icons';
import outlinedIcons from './outlined-icons';
import roundedIcons from './rounded-icons';
import sharpIcons from './sharp-icons';
import twoToneIcons from './twoTone-icons';

const allIcons = [...filledIcons, ...outlinedIcons, ...roundedIcons, ...sharpIcons, ...twoToneIcons] as const;

export type IconName = (typeof allIcons)[number];

export { filledIcons, outlinedIcons, roundedIcons, sharpIcons, twoToneIcons };
