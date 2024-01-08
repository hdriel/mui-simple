interface Window {
    getComputedStyle?: (element: any) => { lineHeight: number | string };
    innerWidth: number;
    innerHeight: number;
    addEventListener: (event: string, cb: () => void) => void;
    removeEventListener: (event: string, cb: () => void) => void;
    getBoundingClientRect: any;
    document?: {
        createElement: (tag: string) => { appendChild: any; removeChild: any; offsetLeft: number; [key: string]: any };
        [key: string]: any;
    };
    alert: (str: string) => void;
}

declare const window: Window & typeof globalThis;
