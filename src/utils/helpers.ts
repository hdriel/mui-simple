import { get } from 'lodash-es';
import { alpha, darken, lighten } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import toHex from 'colornames-es';

export function isValidDate(d): null | Date {
    return d instanceof Date && +d && !isNaN(+d) ? d : null;
}

export function isValidDateValue(timestamp: number | Date | string): boolean {
    return !!new Date(timestamp).getTime();
}

export function setDisplayName(component, name): void {
    component.displayName = name;
}

export function setDefaultValue(obj: Record<string, any>, propName: string, defaultValue: any): Record<string, any> {
    return {
        ...obj,
        [propName]: obj[propName] === undefined ? defaultValue : obj[propName],
    };
}

export function getCapitalLetters(str): undefined | [string, string?] {
    const chars =
        str
            ?.split(' ')
            .filter((v) => !!v)
            .map((word) => word[0].toUpperCase()) ?? undefined;

    if (!chars) return undefined;

    const [firstChar, secondChar] = [chars?.[0], chars?.slice(-1)];
    return chars.length > 1 ? [firstChar, secondChar] : [firstChar];
}

export function stringToColor(string): string | undefined {
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

export function numberToPx(field): string {
    return typeof field === 'number' ? `${field}px` : field;
}

export function numberToEm(field, rem = false): string {
    return typeof field === 'number' ? `${field}${rem ? 'rem' : 'em'}` : field;
}

export function isDefined(value): boolean {
    return value !== undefined && value !== null;
}

export function useCustomColor(color, options?): [string | undefined, string | undefined] {
    const theme = useTheme();
    return getCustomColor({ theme, customColor: color }, options);
}

interface getCustomColorOptionsProps {
    field?: string | undefined;
    muiLevel?: string;
    opacity?: number;
    darken?: number;
    lighten?: number;
}

export function getCustomColor(
    props,
    {
        field = undefined,
        muiLevel = 'main',
        opacity = 1,
        darken: _darken,
        lighten: _lighten,
    }: getCustomColorOptionsProps = {}
): [string | undefined, string | undefined] {
    const customColor = (field && props?.[field]) ?? props?.customColor;
    if (!customColor) return [undefined, undefined];
    if (Array.isArray(customColor)) return customColor as [string, string];
    if (customColor === 'inherit') return [undefined, 'inherit'];

    let color =
        get(props, `theme.palette.${customColor as string}.${muiLevel}`) ??
        get(props, `theme.palette.${customColor as string}`) ??
        toHex(customColor) ??
        customColor;

    if (!isValidColor(color)) return [undefined, undefined];
    const isMuiColor = color && color !== customColor;

    color = isDefined(opacity) ? alpha(color, opacity) : color;
    color = isDefined(_darken) ? darken(color, _darken) : color;
    color = isDefined(_lighten) ? lighten(color, _lighten) : color;

    return [color, isMuiColor ? customColor : undefined];
}

const isValidColor = (color): boolean => CSS.supports('color', color);

export const copyToClipboard = (value): boolean => {
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
} = {}): string {
    const chars = [numbers && NUMBERS, lowercase && LOWERCASE, uppercase && UPPERCASE, symbol && SYMBOL]
        .filter(Boolean)
        .join('');

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    return password;
}

export async function sleep(delay = 0): Promise<void> {
    return await new Promise((resolve) => setTimeout(resolve, delay));
}

export function loadScript(src, element, id): void {
    if (!element) return;

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    element.appendChild(script);
}

export function getTextWidth(text): { offsetWidth: number; scrollWidth: number } {
    const element = document.createElement('span');
    element.textContent = text;
    document.body.appendChild(element);
    const { offsetWidth, scrollWidth } = element;
    element.parentElement?.removeChild(element);
    return { offsetWidth, scrollWidth };
}
