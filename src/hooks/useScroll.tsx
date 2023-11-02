// useScroll hook
// use intersection observer to find percent of element in viewport

import { useEffect, useState } from "react";

interface UseScrollProps {
    ref: React.MutableRefObject<HTMLElement | null>
}

export default function UseScroll(props: UseScrollProps) {
    const { ref } = props;

    const [percent, setPercent] = useState(0);

    const callbackFunction = (entries: any) => {
        const [entry] = entries;

        if (entry.isIntersecting && entry.boundingClientRect.y >= 0) {
            const percent = Math.ceil(entry.intersectionRatio * 100);
            setPercent(percent);
        }
    }

    function buildThresholdList() {
        let thresholds = [];
        let numSteps = 100;

        for (let i = 1.0; i <= numSteps; i++) {
            let ratio = i / numSteps;
            thresholds.push(ratio);
        }

        thresholds.push(0);
        return thresholds;
    }

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: buildThresholdList(),
        }
        const observer = new IntersectionObserver(callbackFunction, options);

        if (ref.current) observer.observe(ref.current);

        const refcurrent = ref.current;
        return () => {
            if (refcurrent) observer.unobserve(refcurrent!);
        }
    }, [ref])

    return percent;
}