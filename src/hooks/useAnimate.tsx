import { useEffect, useRef } from "react";

interface UseObserverProps {
    ref: React.MutableRefObject<HTMLElement | null>,
    className?: string,
    callback?: () => IntersectionObserverCallback
}

export default function useAnimate(props: UseObserverProps) {
    const { ref, className, callback } = props;

    useEffect(() => {
        if (!ref.current) return;

        let callbackFunction: IntersectionObserverCallback;
        callback
            ? callbackFunction = callback()
            : callbackFunction = (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) ref.current?.classList.add(className!);
                else ref.current?.classList.remove(className!);
            }

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.001
        }

        const observer = new IntersectionObserver(callbackFunction, options);
        if (ref.current) observer.observe(ref.current);

        const refcurrent = ref.current;
        return () => {
            if (refcurrent) observer.unobserve(refcurrent);
        }
    }, [callback, className, ref]);
}
