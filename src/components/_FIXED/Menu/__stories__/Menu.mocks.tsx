import { action } from 'storybook/actions';
import { MenuOption } from '../Menu';

export const optionLongList: MenuOption[] = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
    'Option 9',
    'Option 10',
];

export const options: MenuOption[] = [
    { id: 'o1', label: 'Profile', onClick: action('onClickOption') },
    { id: 'o2', label: 'My account', onClick: action('onClickOption') },
    {
        id: 'o3',
        label: 'Logout',
        onClick: action('onClickOption'),
    },
    { divider: true },
    {
        id: 'o3',
        label: 'return true',
        onClick: () => {
            action('onClickOption');
            return true;
        },
    },
];

export const shortcutOptions: MenuOption[] = [
    {
        id: 'o1',
        label: 'Cut',
        icon: 'ContentCut',
        onClick: action('onClickOption'),
        shortcut: 'Ctrl+X',
    },
    {
        id: 'o2',
        label: 'Copy',
        icon: 'ContentCopy',
        onClick: action('onClickOption'),
        shortcut: 'Ctrl+C',
    },
    {
        id: 'o3',
        label: 'Logout',
        icon: 'ContentPaste',
        onClick: action('onClickOption'),
        shortcut: 'Ctrl+V',
    },
    {
        divider: true,
    },
    {
        id: 'o4',
        label: 'Paste',
        icon: 'Cloud',
        onClick: () => {
            action('onClickOption');
            return true;
        },
    },
];
