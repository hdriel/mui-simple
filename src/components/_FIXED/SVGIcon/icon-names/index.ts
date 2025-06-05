import filledIcons from './filled-icons';
import outlinedIcons from './outlined-icons';
import roundedIcons from './rounded-icons';
import sharpIcons from './sharp-icons';
import twoToneIcons from './twoTone-icons';
import { number } from 'prop-types';

export type FILLED_ICONS_TYPE = (typeof filledIcons)[number];
export type OUTLINED_ICONS_TYPE = (typeof outlinedIcons)[number];
export type ROUNDED_ICONS_TYPE = (typeof roundedIcons)[number];
export type SHARP_ICONS_TYPE = (typeof sharpIcons)[number];
export type TWO_TONE_ICONS_TYPE = (typeof twoToneIcons)[number];

export type IconName =
    | FILLED_ICONS_TYPE
    | OUTLINED_ICONS_TYPE
    | ROUNDED_ICONS_TYPE
    | SHARP_ICONS_TYPE
    | TWO_TONE_ICONS_TYPE;

export { filledIcons, outlinedIcons, roundedIcons, sharpIcons, twoToneIcons };
