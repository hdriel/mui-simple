import { useState, useRef, useEffect, useCallback } from 'react';

export default function useElementSize(resize = false): [any, { width: number; height: number }] {
    const ref = useRef<HTMLElement>(null);
    const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        console.log(windowSize);
    }, [windowSize]);

    useEffect(() => {
        function handleResize(): void {
            if (ref.current) {
                const { width, height } = ref.current?.getBoundingClientRect() ?? {};
                setWindowSize({ width, height });
            }
        }

        if (resize) {
            window.addEventListener('resize', handleResize);
            handleResize();
        }

        return () => {
            resize && window.removeEventListener('resize', handleResize);
        };
    }, [ref.current, resize]);

    return [ref, { width: windowSize.width, height: windowSize.height }];
}

export function useElementSizeOld(resize = false): [any, { width: number; height: number }] {
    const ref = useRef<HTMLElement>(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const handleResize = useCallback(() => {
        if (ref.current) {
            const { width, height } = ref.current?.getBoundingClientRect() ?? {};
            setWidth(width);
            setHeight(height);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        handleResize();
    }, [handleResize]);

    useEffect(() => {
        if (resize) {
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (resize) window.removeEventListener('resize', handleResize);
        };
    }, [handleResize, resize]);

    return [ref, { width, height }];
}
