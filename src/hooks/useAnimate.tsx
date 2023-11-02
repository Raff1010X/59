import { useEffect, useRef } from "react";

interface UseObserverProps {
    ref: React.MutableRefObject<HTMLElement | null>,
    className: string,
}

export default function UseAnimate(props: UseObserverProps) {
    const { ref, className } = props;

    const callbackFunction = (entries: any) => {
        const [entry] = entries;
        if (entry.isIntersecting) ref.current?.classList.add(className);
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.001
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        }
    }, [ref.current])


}
