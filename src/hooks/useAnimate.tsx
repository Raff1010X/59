import { useEffect, useRef } from "react";

interface UseObserverProps {
    ref: React.MutableRefObject<HTMLElement | null>,
    className: string,
}

export default function UseAnimate(props: UseObserverProps) {
    const { ref, className } = props;

    useEffect(() => {
        const callbackFunction = (entries: any) => {
            const [entry] = entries;
            if (entry.isIntersecting) ref.current?.classList.add(className);
            else ref.current?.classList.remove(className);
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
    }, [className, ref])


}
