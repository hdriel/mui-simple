declare class IntersectionObserver {
    constructor(cb: (entries: { isIntersecting: boolean }[]) => void);

    observe(ref: any);

    disconnect();
}

declare type HTMLDivElement = any;

declare type document = any;
