interface Window {
    getComputedStyle?: (element: any) => { lineHeight: number | string };
    document?: {
        createElement: (tag: string) => { appendChild: any; removeChild: any; offsetLeft: number; [key: string]: any };
        [key: string]: any;
    };
}

declare const window: Window & typeof globalThis;
