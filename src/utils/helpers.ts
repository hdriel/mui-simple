import { get } from 'lodash-es';
import { alpha, darken, lighten } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import toHex from 'colornames-es';
// const toHex = () => undefined;

export function getCapitalLetters(str) {
    const chars =
        str
            ?.split(' ')
            .filter((v) => !!v)
            .map((word) => word[0].toUpperCase()) ?? undefined;

    if (!chars) return undefined;

    const [firstChar, secondChar] = [chars?.[0], chars?.slice(-1)];
    return chars.length > 1 ? [firstChar, secondChar] : [firstChar];
}

export function stringToColor(string) {
    if (!string) return undefined;

    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

export function numberToPx(field) {
    return typeof field === 'number' ? `${field}px` : field;
}

export function isDefined(value) {
    return value !== undefined && value !== null;
}

export function useCustomColor(color, options?) {
    const theme = useTheme();
    return getCustomColor({ theme, customColor: color }, options);
}

interface getCustomColorOptionsProps {
    field: string | undefined;
    muiLevel: string;
    opacity: number;
    darken: number;
    lighten: number;
}
export function getCustomColor(
    props,
    {
        field = undefined,
        muiLevel = 'main',
        opacity = 1,
        darken: _darken,
        lighten: _lighten,
    }: getCustomColorOptionsProps = {} as getCustomColorOptionsProps
) {
    const customColor = props?.[field] ?? props?.customColor;
    if (!customColor) return [];
    if (Array.isArray(customColor)) return customColor;
    if (customColor === 'inherit') return [undefined, 'inherit'];

    let color =
        get(props, `theme.palette.${customColor}.${muiLevel}`) ??
        get(props, `theme.palette.${customColor}`) ??
        toHex(customColor) ??
        customColor;

    if (!isValidColor(color)) return [];
    const isMuiColor = color && color !== customColor;

    color = isDefined(opacity) ? alpha(color, opacity) : color;
    color = isDefined(_darken) ? darken(color, _darken) : color;
    color = isDefined(_lighten) ? lighten(color, _lighten) : color;

    return [color, isMuiColor ? customColor : undefined];
}

const isValidColor = (color) => CSS.supports('color', color);

export const copyToClipboard = (value) => {
    if (!value) return false;

    const textField = document.createElement('textarea');
    textField.innerText = value;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();

    return true;
};

const NUMBERS = '0123456789';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const SYMBOL = '!@#$%^&*()';

export function generatePassword({
    length = 12,
    numbers = true,
    lowercase = true,
    uppercase = true,
    symbol = true,
} = {}) {
    const chars = [numbers && NUMBERS, lowercase && LOWERCASE, uppercase && UPPERCASE, symbol && SYMBOL]
        .filter(Boolean)
        .join('');

    let password = '';

    for (let i = 0; i <= length; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    return password;
}

export function sleep(delay = 0) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

export function loadScript(src, element, id) {
    if (!element) return;

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    element.appendChild(script);
}

export function getTextWidth(text) {
    const element = document.createElement('span');
    element.textContent = text;
    document.body.appendChild(element);
    const { offsetWidth, scrollWidth } = element;
    element.parentElement.removeChild(element);
    return { offsetWidth, scrollWidth };
}
